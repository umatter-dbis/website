function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector(".faq-icon");

  // Close all other FAQs
  const allQuestions = document.querySelectorAll(".faq-question");
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allIcons = document.querySelectorAll(".faq-icon");

  allQuestions.forEach((q) => {
    if (q !== element) {
      q.classList.remove("active");
    }
  });

  allAnswers.forEach((a) => {
    if (a !== answer) {
      a.classList.remove("active");
    }
  });

  allIcons.forEach((i) => {
    if (i !== icon) {
      i.innerHTML = "<i class=\"fa-solid fa-caret-down\"></i>";
    }
  });

  // Toggle current FAQ
  element.classList.toggle("active");
  answer.classList.toggle("active");

  if (answer.classList.contains("active")) {
    icon.innerHTML = "<i class=\"fa-solid fa-caret-up\"></i>";
    // Smooth scroll to the question
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  } else {
    icon.innerHTML = "<i class=\"fa-solid fa-caret-down\"></i>";
  }
}

// Scroll indicator
window.addEventListener("scroll", () => {
  const scrollIndicator = document.getElementById("scrollIndicator");
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = scrollTop / (docHeight - winHeight);
  const scrollPercentRounded = Math.round(scrollPercent * 100);

  scrollIndicator.style.transform = `scaleX(${scrollPercent})`;
});

// Add subtle entrance animation
window.addEventListener("load", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "all 0.6s ease";

      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 50);
    }, index * 100);
  });
});

// Keyboard accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    if (e.target.classList.contains("faq-question")) {
      e.preventDefault();
      toggleFAQ(e.target);
    }
  }
});
