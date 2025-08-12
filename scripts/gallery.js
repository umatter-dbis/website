(() => {
  const container = document.getElementById("circle-container");

  const baseItems = [
    {
      src: "../media/img1.png",
      alt: "Children making toys together",
      title: "Non-verbal Expression",
      caption: "Fostering focus and teamwork",
    },
    {
      src: "../media/img2.png",
      alt: "Tree artwork with colorful leaves",
      title: "Tree of Life",
      caption: "Drawing feelings and roots",
    },
    {
      src: "../media/img3.png",
      alt: "Student coloring a mandala",
      title: "Mindfulness",
      caption: "Calm through creative focus",
    },
    {
      src: "../media/img4.png",
      alt: "Children using puppets to act",
      title: "Storytelling",
      caption: "Emotions through role-play",
    },
    {
      src: "../media/img5.png",
      alt: "Kids moving with colorful ribbons",
      title: "Joyful Movement Circle",
      caption: "Connecting through playful motion",
    },
    {
      src: "../media/img6.png",
      alt: "Child playing with sand tray",
      title: "Sand Play",
      caption: "Exploring worlds with imagination",
    },
    {
      src: "../media/img7.png",
      alt: "Children dancing together in class",
      title: "Expressive Movement Session",
      caption: "Energizing minds through dance",
    },
    {
      src: "../media/img8.png",
      alt: "Poster of classroom rules or values",
      title: "Kindness Pledge",
      caption: "Promoting fairness and empathy",
    },
  ];

  const items = [...baseItems, ...baseItems];
  let cards = [];
  let currentRotation = 0;
  let autoRotate = true;

  function createCards() {
    items.forEach(({ src, alt, title }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("role", "listitem");

      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.draggable = false;

      const caption = document.createElement("div");
      caption.className = "title";
      caption.textContent = title;

      card.appendChild(img);
      card.appendChild(caption);
      container.appendChild(card);
      cards.push(card);
    });
  }

  function layoutCards() {
    const width = window.innerWidth;
    const radius = width * 0.35;
    const angleStep = 360 / cards.length;

    cards.forEach((card, i) => {
      const angle = angleStep * i - currentRotation;
      const rad = (angle * Math.PI) / 180;
      const x = radius * Math.sin(rad);
      const z = radius * Math.cos(rad);

      const scale = 0.75 + ((z + radius) / (2 * radius)) * 0.45;
      const brightness = 0.6 + ((z + radius) / (2 * radius)) * 0.4;

      card.style.visibility = z < 0 ? "hidden" : "visible";
      card.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`;
      card.style.filter = `brightness(${brightness})`;
      card.style.zIndex = Math.floor(z + radius);
    });
  }

  function animate() {
    if (autoRotate && !isDragging) {
      currentRotation = (currentRotation + 0.2) % 360;
      layoutCards();
    }
    requestAnimationFrame(animate);
  }

  let isDragging = false;
  let startX = 0;
  let startRotation = 0;

  function onPointerDown(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startRotation = currentRotation;
    container.style.cursor = "grabbing";
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentRotation = (startRotation - deltaX * 0.3 + 360) % 360;
    layoutCards();
  }

  function onPointerUp() {
    isDragging = false;
    container.style.cursor = "grab";
  }

  container.style.cursor = "grab";
  container.addEventListener("mousedown", onPointerDown);
  container.addEventListener("touchstart", onPointerDown, {
    passive: true,
  });
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("mouseup", onPointerUp);
  window.addEventListener("touchend", onPointerUp);
  window.addEventListener("touchcancel", onPointerUp);
  window.addEventListener("resize", layoutCards);

  createCards();
  layoutCards();
  animate(); // Start the auto-rotation
})();
