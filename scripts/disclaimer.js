(function () {
  // Check if user has previously accepted disclaimer
  function initDisclaimer() {
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    if (hasAccepted === "true") {
      hideDisclaimer();
    } else {
      document.body.classList.add("disclaimer-active");
    }
  }

  window.acceptDisclaimer = function () {
    localStorage.setItem("disclaimerAccepted", "true");
    hideDisclaimer();
  };

  window.declineDisclaimer = function () {
    if (
      confirm(
        "You have declined our terms. You will be redirected away from this site to https://dbis.in."
      )
    ) {
      window.location.href = "https://dbis.in";
    }
  };

  function hideDisclaimer() {
    const modal = document.getElementById("disclaimerModal");
    modal.classList.add("disclaimer-hidden");
    document.body.classList.remove("disclaimer-active");
  }

  // Initialize when DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDisclaimer);
  } else {
    initDisclaimer();
  }
})();
