// Global variables
let currentPage = 1;
let isScrolling = false;
let scrollThreshold = 0.4; // 40% of viewport width
let touchStartX = 0;
let touchStartY = 0;

// DOM elements
const loadingScreen = document.getElementById("loading-screen");
const mainContainer = document.getElementById("main-container");
const horizontalContainer = document.getElementById("horizontal-container");
const navPills = document.querySelectorAll(".nav-pill");
const tooltip = document.getElementById("tooltip");
const salusText = document.querySelector(".salus-text");

// Initialize the website
document.addEventListener("DOMContentLoaded", function () {
  // Show loading screen for 3 seconds
  setTimeout(() => {
    hideLoadingScreen();
  }, 3000);

  // Initialize event listeners
  initializeEventListeners();

  // Initialize animations
  initializeAnimations();
});

// Hide loading screen and show main content
function hideLoadingScreen() {
  loadingScreen.classList.add("fade-out");

  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 800);
}

// Initialize all event listeners
function initializeEventListeners() {
  // Navigation pills
  navPills.forEach((pill) => {
    pill.addEventListener("click", function () {
      const targetPage = parseInt(this.dataset.page);
      navigateToPage(targetPage);
    });
  });

  // Wheel event for horizontal scrolling
  document.addEventListener("wheel", handleWheelScroll, { passive: false });

  // Touch events for mobile
  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  document.addEventListener("touchmove", handleTouchMove, { passive: false });
  document.addEventListener("touchend", handleTouchEnd, { passive: true });

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyNavigation);

  // Button hover effects
  initializeButtonEffects();

  // Form submission
  initializeFormHandling();

  // Resize handling
  window.addEventListener("resize", handleResize);
}

// Wheel scroll handling
function handleWheelScroll(e) {
  if (isScrolling) return;

  // Check if we're in a scrollable area
  const scrollableElement = e.target.closest(".scrollable");

  if (scrollableElement) {
    const { scrollTop, scrollHeight, clientHeight } = scrollableElement;

    // Allow vertical scrolling within scrollable areas
    if (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) return;
    if (e.deltaY < 0 && scrollTop > 0) return;
  } else {
    e.preventDefault();

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // Horizontal scroll
      if (e.deltaX > 0 && currentPage < 5) {
        navigateToPage(currentPage + 1);
      } else if (e.deltaX < 0 && currentPage > 1) {
        navigateToPage(currentPage - 1);
      }
    } else {
      // Vertical scroll converted to horizontal
      if (e.deltaY > 0 && currentPage < 5) {
        navigateToPage(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 1) {
        navigateToPage(currentPage - 1);
      }
    }
  }
}

// Touch event handlers
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
  if (!touchStartX || !touchStartY) return;

  const touchEndX = e.touches[0].clientX;
  const touchEndY = e.touches[0].clientY;

  const deltaX = touchStartX - touchEndX;
  const deltaY = touchStartY - touchEndY;

  // Prevent default if horizontal swipe is detected
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    e.preventDefault();
  }
}

function handleTouchEnd(e) {
  if (!touchStartX || !touchStartY) return;

  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  const deltaX = touchStartX - touchEndX;
  const deltaY = touchStartY - touchEndY;

  // Horizontal swipe detection
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0 && currentPage < 5) {
      navigateToPage(currentPage + 1);
    } else if (deltaX < 0 && currentPage > 1) {
      navigateToPage(currentPage - 1);
    }

    // ✅ Force re-apply transform to ensure snapping on mobile
    setTimeout(() => {
      const translateX = (currentPage - 1) * -100;
      horizontalContainer.style.transform = `translateX(${translateX}vw)`;
    }, 0);
  }

  touchStartX = 0;
  touchStartY = 0;
}

// Keyboard navigation
function handleKeyNavigation(e) {
  if (isScrolling) return;

  switch (e.key) {
    case "ArrowLeft":
      if (currentPage > 1) {
        e.preventDefault();
        navigateToPage(currentPage - 1);
      }
      break;
    case "ArrowRight":
      if (currentPage < 5) {
        e.preventDefault();
        navigateToPage(currentPage + 1);
      }
      break;
    case "Home":
      e.preventDefault();
      navigateToPage(1);
      break;
    case "End":
      e.preventDefault();
      navigateToPage(5);
      break;
  }
}

// Navigate to specific page
function navigateToPage(targetPage) {
  if (targetPage === currentPage || isScrolling) return;

  isScrolling = true;

  // Update current page
  currentPage = targetPage;

  // Update navigation pills
  updateNavPills();

  // Calculate transform
  const translateX = (targetPage - 1) * -100;
  horizontalContainer.style.transform = `translateX(${translateX}vw)`;

  // Reset scrolling flag
  setTimeout(() => {
    isScrolling = false;
  }, 800);
}

// Update navigation pills
function updateNavPills() {
  navPills.forEach((pill, index) => {
    if (index + 1 === currentPage) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
}

// Initialize animations
function initializeAnimations() {
  // Observe elements for animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all glass cards
  document.querySelectorAll(".glass-card").forEach((card) => {
    observer.observe(card);
  });
}

// Animate page elements on navigation
function animatePageElements(pageNumber) {
  const pageElement = document.getElementById(`page-${pageNumber}`);
  if (!pageElement) return;

  // Remove existing animations
  pageElement
    .querySelectorAll(".animate-in, .animate-left, .animate-right")
    .forEach((el) => {
      el.classList.remove("animate-in", "animate-left", "animate-right");
    });

  // Add new animations with delay
  const animatableElements = pageElement.querySelectorAll(
    ".glass-card, .hero-section, .section-header, .contact-item"
  );

  animatableElements.forEach((element, index) => {
    setTimeout(() => {
      if (index % 2 === 0) {
        element.classList.add("animate-left");
      } else {
        element.classList.add("animate-right");
      }
    }, index * 100);
  });
}

// Initialize button effects
function initializeButtonEffects() {
  const buttons = document.querySelectorAll(".glass-button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Add hover sound effect (visual feedback)
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)";
    });

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add ripple animation to CSS
  if (!document.getElementById("ripple-styles")) {
    const style = document.createElement("style");
    style.id = "ripple-styles";
    style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }
}

// Initialize form handling
function initializeFormHandling() {
  const form = document.querySelector(".contact-form form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Validate form
    if (!name || !email || !message) {
      showNotification("Please fill in all fields", "error");
      return;
    }

    // Simulate form submission
    const submitBtn = this.querySelector(".glass-button");
    const originalText = submitBtn.querySelector("span").textContent;

    submitBtn.querySelector("span").textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.querySelector("span").textContent = originalText;
      submitBtn.disabled = false;
      showNotification("Feedback system will be available soon!", "failed");
      this.reset();
    }, 2000);
  });
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "error" ? "rgba(244, 67, 54, 0.9)" : "rgba(76, 175, 80, 0.9)"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        backdrop-filter: blur(20px);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Handle resize
function handleResize() {
  // Recalculate page position
  const translateX = (currentPage - 1) * -100;
  horizontalContainer.style.transform = `translateX(${translateX}vw)`;
}

// Smooth scroll for internal links
document.addEventListener("click", function (e) {
  if (e.target.matches(".glass-button") || e.target.closest(".glass-button")) {
    const button = e.target.matches(".glass-button")
      ? e.target
      : e.target.closest(".glass-button");
    const buttonText = button.querySelector("span").textContent.toLowerCase();

    // Handle specific button actions
    if (buttonText.includes("begin") || buttonText.includes("journey")) {
      navigateToPage(2);
    } else if (
      buttonText.includes("book") ||
      buttonText.includes("appointment")
    ) {
      // Simulate booking action
      showNotification("Booking system will be available soon!", "info");
    } else if (
      buttonText.includes("find") ||
      buttonText.includes("therapist")
    ) {
      // Simulate therapist finder
      showNotification("Therapist directory will be available soon!", "info");
    }
  }
});

// Add smooth scrolling to scrollable areas
document.querySelectorAll(".scrollable").forEach((element) => {
  element.style.scrollBehavior = "smooth";
});

// Preload next page content for better performance
function preloadPageContent(pageNumber) {
  const page = document.getElementById(`page-${pageNumber}`);
  if (page) {
    const images = page.querySelectorAll("img");
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  }
}

// Initialize performance optimizations
document.addEventListener("DOMContentLoaded", function () {
  // Preload adjacent pages
  if (currentPage > 1) preloadPageContent(currentPage - 1);
  if (currentPage < 5) preloadPageContent(currentPage + 1);
});

// Add visual feedback for page changes
function addPageChangeEffect() {
  const effect = document.createElement("div");
  effect.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
        pointer-events: none;
        z-index: 999;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.style.opacity = "1";
  }, 50);

  setTimeout(() => {
    effect.style.opacity = "0";
    setTimeout(() => {
      effect.remove();
    }, 300);
  }, 200);
}

// Enhanced navigation with visual feedback
const originalNavigateToPage = navigateToPage;
navigateToPage = function (targetPage) {
  addPageChangeEffect();
  originalNavigateToPage(targetPage);
};

// Add intersection observer for lazy loading
const lazyLoadObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (element.dataset.src) {
        element.src = element.dataset.src;
        element.removeAttribute("data-src");
      }
      lazyLoadObserver.unobserve(element);
    }
  });
});

// Observe all elements with data-src
document.querySelectorAll("[data-src]").forEach((element) => {
  lazyLoadObserver.observe(element);
});
