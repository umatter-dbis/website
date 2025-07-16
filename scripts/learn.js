// Modal Cards Functionality - Add this to your existing script.js

// Card data with detailed content
const cardData = {
  "stress-relief": {
    title: "7 Day Stress Relief Challenge",
    content: `
        <h4>Welcome to Your 7-Day Journey</h4>
        <p>This comprehensive challenge is designed to help you develop sustainable stress management techniques that you can integrate into your daily life. Each day focuses on a different aspect of stress relief, building upon the previous day's learnings.</p>
        
        <h4>Day 1: Mindful Breathing</h4>
        <p>Learn the foundation of stress relief through proper breathing techniques. We'll explore diaphragmatic breathing, the 4-7-8 technique, and how to use breath as an anchor during stressful moments.</p>
        <ul>
          <li>Morning breathing exercise routine</li>
          <li>Midday stress-relief breathing breaks</li>
          <li>Evening wind-down breathing session</li>
        </ul>
        
        <h4>Day 2: Progressive Muscle Relaxation</h4>
        <p>Discover how physical tension relates to mental stress and learn techniques to systematically relax your entire body.</p>
        
        <h4>Day 3: Mindfulness Meditation</h4>
        <p>Introduction to mindfulness practices that help you stay present and reduce anxiety about future events or past experiences.</p>
        
        <h4>Day 4: Cognitive Restructuring</h4>
        <p>Learn to identify and challenge stress-inducing thought patterns, replacing them with more balanced and realistic perspectives.</p>
        
        <h4>Day 5: Physical Movement</h4>
        <p>Explore how gentle exercise and movement can be powerful tools for stress relief and mood improvement.</p>
        
        <h4>Day 6: Social Connection</h4>
        <p>Understand the importance of social support in stress management and learn strategies for building meaningful connections.</p>
        
        <h4>Day 7: Integration and Planning</h4>
        <p>Combine all the techniques you've learned and create a personalized stress management plan for ongoing success.</p>
        
        <p>Each day includes guided exercises, reflection prompts, and practical tips you can implement immediately. By the end of this challenge, you'll have a toolkit of proven strategies to manage stress effectively.</p>
      `,
  },
  "self-care": {
    title: "Building a Personalized Self-care Routine",
    content: `
        <h4>Understanding Self-Care</h4>
        <p>Self-care isn't selfish—it's essential. This comprehensive guide will help you create a sustainable self-care routine that fits your lifestyle, preferences, and needs.</p>
        
        <h4>The Four Pillars of Self-Care</h4>
        
        <h4>1. Physical Self-Care</h4>
        <ul>
          <li>Nutrition and hydration strategies</li>
          <li>Sleep hygiene and rest</li>
          <li>Movement and exercise</li>
          <li>Regular health check-ups</li>
        </ul>
        
        <h4>2. Emotional Self-Care</h4>
        <ul>
          <li>Emotional awareness and regulation</li>
          <li>Journaling and self-reflection</li>
          <li>Setting healthy boundaries</li>
          <li>Seeking support when needed</li>
        </ul>
        
        <h4>3. Mental Self-Care</h4>
        <ul>
          <li>Continuous learning and growth</li>
          <li>Mindfulness and meditation practices</li>
          <li>Creative expression and hobbies</li>
          <li>Mental stimulation and challenge</li>
        </ul>
        
        <h4>4. Social Self-Care</h4>
        <ul>
          <li>Nurturing meaningful relationships</li>
          <li>Community involvement</li>
          <li>Balancing alone time with social time</li>
          <li>Communication skills</li>
        </ul>
        
        <h4>Creating Your Personal Self-Care Plan</h4>
        <p>We'll guide you through a step-by-step process to identify your specific needs, preferences, and constraints. You'll learn how to:</p>
        <ul>
          <li>Assess your current self-care practices</li>
          <li>Identify areas for improvement</li>
          <li>Set realistic and achievable goals</li>
          <li>Create daily, weekly, and monthly self-care rituals</li>
          <li>Overcome common obstacles and barriers</li>
        </ul>
        
        <p>Remember, self-care is not a one-size-fits-all approach. What works for others may not work for you, and that's perfectly okay. This guide will help you discover what truly nourishes your mind, body, and spirit.</p>
      `,
  },
  "growth-mindset": {
    title: "Attaining a Growth Mindset",
    content: `
        <h4>What is a Growth Mindset?</h4>
        <p>A growth mindset is the belief that abilities and intelligence can be developed through dedication, hard work, and learning from failure. This powerful concept, developed by psychologist Carol Dweck, can transform how you approach challenges and setbacks.</p>
        
        <h4>Fixed vs. Growth Mindset</h4>
        <p><strong>Fixed Mindset:</strong> "I'm either good at something or I'm not." People with a fixed mindset believe their basic abilities are static traits.</p>
        <p><strong>Growth Mindset:</strong> "I can improve with effort and practice." People with a growth mindset believe they can develop their abilities through hard work and dedication.</p>
        
        <h4>The Science Behind Growth Mindset</h4>
        <p>Research shows that individuals with a growth mindset are more likely to:</p>
        <ul>
          <li>Embrace challenges instead of avoiding them</li>
          <li>Persist in the face of setbacks</li>
          <li>See effort as a path to mastery</li>
          <li>Learn from criticism and feedback</li>
          <li>Find inspiration in others' success</li>
        </ul>
        
        <h4>Developing Your Growth Mindset</h4>
        
        <h4>1. Embrace Challenges</h4>
        <p>Learn to view challenges as opportunities to grow rather than threats to your ego. We'll explore practical strategies for reframing difficult situations.</p>
        
        <h4>2. Learn from Criticism</h4>
        <p>Discover how to receive feedback constructively and use it as fuel for improvement rather than taking it personally.</p>
        
        <h4>3. Replace "I Can't" with "I Can't Yet"</h4>
        <p>The power of adding "yet" to your vocabulary and how this simple word can transform your relationship with failure and learning.</p>
        
        <h4>4. Celebrate the Process</h4>
        <p>Learn to find satisfaction in the journey of learning and growing, not just in the end results.</p>
        
        <h4>Practical Exercises</h4>
        <ul>
          <li>Daily reflection and journaling prompts</li>
          <li>Challenge-seeking activities</li>
          <li>Failure reframing exercises</li>
          <li>Goal-setting with a growth mindset approach</li>
          <li>Building resilience through mindfulness</li>
        </ul>
        
        <p>By the end of this guide, you'll have a toolkit of strategies to maintain and strengthen your growth mindset, helping you approach life's challenges with confidence and curiosity.</p>
      `,
  },
  "time-management": {
    title: "The Ultimate Time-management Toolkit",
    content: `
        <h4>Mastering Time Management</h4>
        <p>Effective time management isn't about doing more things—it's about doing the right things efficiently. This comprehensive toolkit provides you with proven strategies and techniques to take control of your time and reduce stress.</p>
        
        <h4>Core Principles of Time Management</h4>
        
        <h4>1. Priority Matrix (Eisenhower Method)</h4>
        <p>Learn to categorize tasks based on urgency and importance:</p>
        <ul>
          <li>Urgent & Important: Do first</li>
          <li>Important but Not Urgent: Schedule</li>
          <li>Urgent but Not Important: Delegate</li>
          <li>Neither Urgent nor Important: Eliminate</li>
        </ul>
        
        <h4>2. Time Blocking</h4>
        <p>Discover how to allocate specific time slots for different activities, including:</p>
        <ul>
          <li>Deep work sessions</li>
          <li>Email and communication</li>
          <li>Meetings and appointments</li>
          <li>Personal time and breaks</li>
        </ul>
        
        <h4>3. The Pomodoro Technique</h4>
        <p>Master this popular productivity method that uses 25-minute focused work sessions followed by short breaks to maintain concentration and prevent burnout.</p>
        
        <h4>Advanced Strategies</h4>
        
        <h4>Getting Things Done (GTD)</h4>
        <p>Learn David Allen's comprehensive system for capturing, clarifying, organizing, and reviewing all your commitments and tasks.</p>
        
        <h4>Energy Management</h4>
        <p>Understand your natural energy rhythms and learn to schedule tasks when you're most alert and focused.</p>
        
        <h4>Digital Tools and Apps</h4>
        <p>Explore the best productivity apps and tools to support your time management system:</p>
        <ul>
          <li>Task managers and to-do lists</li>
          <li>Calendar applications</li>
          <li>Time tracking tools</li>
          <li>Focus and distraction-blocking apps</li>
        </ul>
        
        <h4>Overcoming Common Obstacles</h4>
        <ul>
          <li>Procrastination strategies</li>
          <li>Dealing with interruptions</li>
          <li>Managing perfectionism</li>
          <li>Saying no effectively</li>
          <li>Handling unexpected urgent tasks</li>
        </ul>
        
        <h4>Creating Your Personal System</h4>
        <p>By the end of this toolkit, you'll have a personalized time management system that fits your lifestyle, work demands, and personal goals. You'll learn to work smarter, not harder, and create more time for what truly matters to you.</p>
      `,
  },
  "social-anxiety": {
    title: "Overcoming Social Anxiety",
    content: `
        <h4>Understanding Social Anxiety</h4>
        <p>Social anxiety is more than just shyness—it's an intense fear of being judged, embarrassed, or rejected in social situations. This comprehensive guide provides practical strategies to help you build confidence and overcome social fears.</p>
        
        <h4>Recognizing Social Anxiety</h4>
        <p>Common symptoms include:</p>
        <ul>
          <li>Physical symptoms: blushing, sweating, trembling, rapid heartbeat</li>
          <li>Emotional symptoms: intense fear, worry, self-consciousness</li>
          <li>Behavioral symptoms: avoidance, seeking reassurance, difficulty speaking</li>
          <li>Cognitive symptoms: negative self-talk, catastrophic thinking</li>
        </ul>
        
        <h4>Cognitive Strategies</h4>
        
        <h4>1. Challenging Negative Thoughts</h4>
        <p>Learn to identify and question anxious thoughts:</p>
        <ul>
          <li>Thought records and cognitive restructuring</li>
          <li>Probability estimation exercises</li>
          <li>Evidence for and against anxious predictions</li>
          <li>Developing balanced, realistic thoughts</li>
        </ul>
        
        <h4>2. Mindfulness and Acceptance</h4>
        <p>Discover how mindfulness can help you observe anxious thoughts without being overwhelmed by them.</p>
        
        <h4>Behavioral Techniques</h4>
        
        <h4>1. Gradual Exposure</h4>
        <p>Step-by-step approach to facing social fears:</p>
        <ul>
          <li>Creating a fear hierarchy</li>
          <li>Starting with less threatening situations</li>
          <li>Gradual progression to more challenging scenarios</li>
          <li>Building confidence through success experiences</li>
        </ul>
        
        <h4>2. Social Skills Training</h4>
        <p>Practical skills to improve your social interactions:</p>
        <ul>
          <li>Conversation starters and maintenance</li>
          <li>Active listening techniques</li>
          <li>Non-verbal communication</li>
          <li>Assertiveness training</li>
        </ul>
        
        <h4>Physical Techniques</h4>
        
        <h4>1. Relaxation Methods</h4>
        <ul>
          <li>Progressive muscle relaxation</li>
          <li>Deep breathing exercises</li>
          <li>Visualization techniques</li>
          <li>Grounding exercises for panic moments</li>
        </ul>
        
        <h4>Building Long-term Confidence</h4>
        
        <h4>Self-Compassion Practices</h4>
        <p>Learn to treat yourself with kindness and understanding, especially when social interactions don't go as planned.</p>
        
        <h4>Building a Support Network</h4>
        <p>Strategies for finding and connecting with understanding friends, family members, or support groups.</p>
        
        <h4>Lifestyle Factors</h4>
        <ul>
          <li>Regular exercise and its anxiety-reducing benefits</li>
          <li>Nutrition and its impact on mood and anxiety</li>
          <li>Sleep hygiene for better emotional regulation</li>
          <li>Limiting caffeine and alcohol</li>
        </ul>
        
        <p>Remember, overcoming social anxiety is a journey, not a destination. With patience, practice, and the right strategies, you can build genuine confidence and enjoy more fulfilling social connections.</p>
      `,
  },
};

// Initialize modal functionality
function initializeModalCards() {
  // Create modal overlay HTML if it doesn't exist
  createModalOverlay();

  // Get DOM elements
  const modalOverlay = document.getElementById("card-modal-overlay");
  const expandedCard = document.getElementById("expanded-card");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const closeBtn = document.getElementById("modal-close-btn");

  // Add click event listeners to cards with data-card attribute
  const cards = document.querySelectorAll(".glass-card[data-card]");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Prevent event from bubbling up to navigation handlers
      e.stopPropagation();

      const cardType = card.getAttribute("data-card");
      openCardModal(cardType);
    });

    // Add visual feedback for clickable cards
    card.style.cursor = "pointer";
    card.addEventListener("mouseenter", () => {
      if (!card.classList.contains("modal-open")) {
        card.style.transform = "translateY(-8px) scale(1.02)";
      }
    });
    card.addEventListener("mouseleave", () => {
      if (!card.classList.contains("modal-open")) {
        card.style.transform = "translateY(0) scale(1)";
      }
    });
  });

  // Close modal event listeners
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCardModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeCardModal();
      }
    });
  }

  // Enhanced keyboard event listener for ESC key (doesn't interfere with existing navigation)
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      modalOverlay &&
      modalOverlay.classList.contains("active")
    ) {
      e.preventDefault();
      e.stopPropagation();
      closeCardModal();
    }
  });
}

// Create modal overlay HTML
function createModalOverlay() {
  // Check if modal already exists
  if (document.getElementById("card-modal-overlay")) return;

  const modalHTML = `
      <div class="modal-overlay" id="card-modal-overlay">
        <div class="expanded-card scrollable" id="expanded-card">
          <button class="close-btn" id="modal-close-btn">&times;</button>
          <div class="card-icon"></div>
          <h3 id="modal-title"></h3>
          <div class="expanded-content" id="modal-content"></div>
        </div>
      </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Add modal-specific styles
  addModalStyles();
}

// Add modal styles
function addModalStyles() {
  const modalStyles = `
      <style id="modal-card-styles">
        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }
  
        .modal-overlay.active {
          opacity: 1;
          visibility: visible;
        }
  
        /* Expanded Card */
        .expanded-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 25px;
          padding: 3rem;
          max-width: 80vw;
          max-height: 70vh;
          width: 70vw;
          position: relative;
          box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3);
          transform: scale(0.8);
          transition: all 0.4s ease;
          overflow: hidden;
        }
  
        .modal-overlay.active .expanded-card {
          transform: scale(1);
        }
  
        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          color: #666;
          z-index: 10001;
        }
  
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(212, 175, 55, 0.5);
          transform: scale(1.1);
        }
  
        .expanded-card .card-icon {
          /* width: 80px;
          height: 80px;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(212, 175, 55, 0.1));
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2); */
          display: none; /* Hide icon for now */
        }
  
        .expanded-card h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #333;
          font-weight: 600;
        }
  
        .expanded-content {
          max-height: 50vh;
          overflow-y: auto;
          padding-right: 1rem;
          color: #444;
          line-height: 1.8;
          font-size: 1.1rem;
        }
  
        .expanded-content::-webkit-scrollbar {
          width: 8px;
        }
  
        .expanded-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
  
        .expanded-content::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.4);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
  
        .expanded-content h4 {
          color: #333;
          margin: 2rem 0 1rem 0;
          font-size: 1.4rem;
          font-weight: 600;
        }
  
        .expanded-content ul {
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }
  
        .expanded-content li {
          margin-bottom: 0.8rem;
        }
  
        .expanded-content p {
          margin-bottom: 1.2rem;
        }
  
        /* Background blur effect */
        .page.modal-blur {
          filter: blur(5px);
          transform: scale(0.95);
          transition: all 0.4s ease;
        }
  
        /* Prevent clicks on blurred content */
        .page.modal-blur * {
          pointer-events: none;
        }
  
        /* Mobile responsive */
        @media (max-width: 768px) {
          .expanded-card {
            max-width: 95vw;
            max-height: 90vh;
            padding: 2rem;
            margin: 1rem;
          }
  
          .expanded-card h3 {
            font-size: 2rem;
          }
  
          .expanded-content {
            font-size: 1rem;
            max-height: 60vh;
          }
        }
      </style>
    `;

  if (!document.getElementById("modal-card-styles")) {
    document.head.insertAdjacentHTML("beforeend", modalStyles);
  }
}

// Open card modal
function openCardModal(cardType) {
  const data = cardData[cardType];
  if (!data) return;

  const modalOverlay = document.getElementById("card-modal-overlay");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");
  const page =
    document.getElementById("page-2") || document.querySelector(".page");

  if (!modalOverlay || !modalTitle || !modalContent) return;

  // Set modal content
  modalTitle.textContent = data.title;
  modalContent.innerHTML = data.content;

  // Add blur effect to background
  if (page) {
    page.classList.add("modal-blur");
  }

  // Show modal
  modalOverlay.classList.add("active");

  // Add class to prevent card hover effects
  const clickedCard = document.querySelector(`[data-card="${cardType}"]`);
  if (clickedCard) {
    clickedCard.classList.add("modal-open");
  }
}

// Close card modal
function closeCardModal() {
  const modalOverlay = document.getElementById("card-modal-overlay");
  const page =
    document.getElementById("page-2") || document.querySelector(".page");

  if (!modalOverlay) return;

  // Remove blur effect from background
  if (page) {
    page.classList.remove("modal-blur");
  }

  // Hide modal
  modalOverlay.classList.remove("active");

  // Remove modal-open class from all cards
  document.querySelectorAll(".glass-card").forEach((card) => {
    card.classList.remove("modal-open");
  });
}

// Initialize modal cards when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Delay initialization to ensure all other scripts are loaded
  setTimeout(initializeModalCards, 100);
});

// Also initialize if DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeModalCards);
} else {
  setTimeout(initializeModalCards, 100);
}
