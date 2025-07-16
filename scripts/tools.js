class BreathingExercise {
  constructor() {
    this.selectedMinutes = 2;
    this.totalSeconds = this.selectedMinutes * 60;
    this.remainingSeconds = this.totalSeconds;
    this.isRunning = false;
    this.intervalId = null;
    this.breathingIntervalId = null;
    this.currentPhase = "ready";
    this.phaseTimer = 0;

    // Breathing pattern: 4-4-4-4 (inhale-hold-exhale-hold)
    this.breathingPattern = {
      inhale: 4,
      holdIn: 4,
      exhale: 4,
      holdOut: 4,
    };

    this.initEventListeners();
    this.updateDisplay();
  }

  initEventListeners() {
    // Preset buttons
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (!this.isRunning) {
          this.selectPreset(parseInt(e.target.dataset.minutes));
        }
      });
    });

    // Play/Pause button
    document.getElementById("playPauseBtn").addEventListener("click", () => {
      if (this.isRunning) {
        this.pause();
      } else {
        this.start();
      }
    });
  }

  selectPreset(minutes) {
    this.selectedMinutes = minutes;
    this.totalSeconds = minutes * 60;
    this.remainingSeconds = this.totalSeconds;

    // Update active preset button
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document
      .querySelector(`[data-minutes="${minutes}"]`)
      .classList.add("active");

    this.updateDisplay();
  }

  start() {
    this.isRunning = true;
    const playPauseBtn = document.getElementById("playPauseBtn");
    playPauseBtn.classList.add("playing");

    // Disable preset buttons during exercise
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.disabled = true;
    });

    this.startTimer();
    this.startBreathingCycle();
  }

  pause() {
    this.isRunning = false;
    const playPauseBtn = document.getElementById("playPauseBtn");
    playPauseBtn.classList.remove("playing");

    // Enable preset buttons
    document.querySelectorAll(".preset-btn").forEach((btn) => {
      btn.disabled = false;
    });

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.breathingIntervalId) {
      clearInterval(this.breathingIntervalId);
      this.breathingIntervalId = null;
    }

    this.resetToInitialState();
  }

  resetToInitialState() {
    this.remainingSeconds = this.totalSeconds;
    this.currentPhase = "ready";
    this.phaseTimer = 0;

    document.getElementById("phaseText").textContent =
      "Choose your session length";
    document.getElementById("gradientAnimation").className =
      "gradient-animation";

    this.updateDisplay();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.remainingSeconds--;
      this.updateDisplay();

      if (this.remainingSeconds <= 0) {
        this.complete();
      }
    }, 1000);
  }

  startBreathingCycle() {
    this.currentPhase = "inhale";
    this.phaseTimer = 0;
    this.updateBreathingVisuals();

    this.breathingIntervalId = setInterval(() => {
      this.phaseTimer++;

      switch (this.currentPhase) {
        case "inhale":
          if (this.phaseTimer >= this.breathingPattern.inhale) {
            this.currentPhase = "holdIn";
            this.phaseTimer = 0;
          }
          break;
        case "holdIn":
          if (this.phaseTimer >= this.breathingPattern.holdIn) {
            this.currentPhase = "exhale";
            this.phaseTimer = 0;
          }
          break;
        case "exhale":
          if (this.phaseTimer >= this.breathingPattern.exhale) {
            this.currentPhase = "holdOut";
            this.phaseTimer = 0;
          }
          break;
        case "holdOut":
          if (this.phaseTimer >= this.breathingPattern.holdOut) {
            this.currentPhase = "inhale";
            this.phaseTimer = 0;
          }
          break;
      }

      this.updateBreathingVisuals();
    }, 1000);
  }

  updateBreathingVisuals() {
    const gradientAnimation = document.getElementById("gradientAnimation");
    const phaseText = document.getElementById("phaseText");

    gradientAnimation.className = "gradient-animation";

    switch (this.currentPhase) {
      case "inhale":
        gradientAnimation.classList.add("inhale");
        phaseText.textContent = "Breathe In";
        break;
      case "holdIn":
        gradientAnimation.classList.add("inhale");
        phaseText.textContent = "Hold";
        break;
      case "exhale":
        gradientAnimation.classList.add("exhale");
        phaseText.textContent = "Breathe Out";
        break;
      case "holdOut":
        gradientAnimation.classList.add("exhale");
        phaseText.textContent = "Hold";
        break;
    }
  }

  updateDisplay() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    document.getElementById("timerDisplay").textContent = timeString;
  }

  complete() {
    this.pause();
    document.getElementById("phaseText").textContent =
      "Session Complete! Well done!";

    setTimeout(() => {
      document.getElementById("phaseText").textContent =
        "Choose your session length";
    }, 5000);
  }
}

// Initialize the breathing exercise when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new BreathingExercise();
});
