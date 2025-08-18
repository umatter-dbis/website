// Modal Cards Functionality - Add this to your existing script.js

// Card data with detailed content
const cardData = {
  "stress-relief": {
    title: "7 Day Stress Relief",
    content: `
        <h4>Welcome to Your 7-Day Journey</h4>
        <p>This comprehensive challenge is designed to help you develop sustainable stress management techniques that you can integrate into your daily life. Each day focuses on a different aspect of stress relief, building upon the previous day's learnings.</p>

        <p>Please feel free to use the following link to learn more about the same:
        </p>
        <a style="color: blue;" href="https://www.mindful.org/how-to-manage-stress-with-mindfulness-and-meditation/" target="_blank" rel="noopener noreferrer">How to Manage Stress with Mindfulness and Meditation</a>
        
        <h4>Day 1: Mindful Breathing</h4>
        <p>Learn the foundation of stress relief through proper breathing techniques. We'll explore diaphragmatic breathing, the 4-7-8 technique, and how to use breath as an anchor during stressful moments.</p>
        <ul>
          <li>- Morning breathing exercise routine</li>
          <li>- Midday stress-relief breathing breaks</li>
          <li>- Evening wind-down breathing session</li>
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
        <p>Combine all the techniques you've learned and create a personalized stress management plan.</p>
      `,
  },
  "self-care": {
    title: "Self-care Routine",
    content: `
        <h4>Understanding Self-Care</h4>
        <p>Self-care isn't selfish—it's essential. This comprehensive guide will help you create a sustainable self-care routine that fits your lifestyle, preferences, and needs.</p>
        
        <h4>The Four Pillars of Self-Care</h4>
        
        <h4>1. Physical</h4>
        <ul>
          <li>- Nutrition and hydration strategies</li>
          <li>- Sleep hygiene and rest</li>
          <li>- Movement and exercise</li>
          <li>- Regular health check-ups</li>
        </ul>
        
        <h4>2. Emotional</h4>
        <ul>
          <li>- Emotional awareness and regulation</li>
          <li>- Journaling and self-reflection</li>
          <li>- Setting healthy boundaries</li>
          <li>- Seeking support when needed</li>
        </ul>
        
        <h4>3. Mental</h4>
        <ul>
          <li>- Continuous learning and growth</li>
          <li>- Mindfulness and meditation practices</li>
          <li>- Creative expression and hobbies</li>
          <li>- Mental stimulation and challenge</li>
        </ul>
        
        <h4>4. Social</h4>
        <ul>
          <li>- Nurturing meaningful relationships</li>
          <li>- Community involvement</li>
          <li>- Balancing alone time with social time</li>
          <li>- Communication skills</li>
        </ul>
        
        <h4>Creating Your Personal Self-Care Plan</h4>
        <p>To identify your specific needs, preferences, and constraints, you must:</p>
        <ul>
          <li>- - Assess your current self-care practices</li>
          <li>- - Identify areas for improvement</li>
          <li>- - Set realistic and achievable goals</li>
          <li>- - Create daily, weekly, and monthly self-care rituals</li>
          <li>- - Overcome common obstacles and barriers</li>
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
          <li>- Embrace challenges instead of avoiding them</li>
          <li>- Persist in the face of setbacks</li>
          <li>- See effort as a path to mastery</li>
          <li>- Learn from criticism and feedback</li>
          <li>- Find inspiration in others' success</li>
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
          <li>- Daily reflection and journaling prompts</li>
          <li>- Challenge-seeking activities</li>
          <li>- Failure reframing exercises</li>
          <li>- Goal-setting with a growth mindset approach</li>
          <li>- Building resilience through mindfulness</li>
        </ul>
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
          <li>- Urgent & Important: Do first</li>
          <li>- Important but Not Urgent: Schedule</li>
          <li>- Urgent but Not Important: Delegate</li>
          <li>- Neither Urgent nor Important: Eliminate</li>
        </ul>
        
        <h4>2. Time Blocking</h4>
        <p>Discover how to allocate specific time slots for different activities, including:</p>
        <ul>
          <li>- Deep work sessions</li>
          <li>- Email and communication</li>
          <li>- Meetings and appointments</li>
          <li>- Personal time and breaks</li>
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
          <li>- Task managers and to-do lists</li>
          <li>- Calendar applications</li>
          <li>- Time tracking tools</li>
          <li>- Focus and distraction-blocking apps</li>
        </ul>
        
        <h4>Overcoming Common Obstacles</h4>
        <ul>
          <li>- Procrastination strategies</li>
          <li>- Dealing with interruptions</li>
          <li>- Managing perfectionism</li>
          <li>- Saying no effectively</li>
          <li>- Handling unexpected urgent tasks</li>
        </ul>
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
          <li>- Physical symptoms: blushing, sweating, trembling, rapid heartbeat</li>
          <li>- Emotional symptoms: intense fear, worry, self-consciousness</li>
          <li>- Behavioral symptoms: avoidance, seeking reassurance, difficulty speaking</li>
          <li>- Cognitive symptoms: negative self-talk, catastrophic thinking</li>
          <li>- etc...</li>
        </ul>
        
        <h4>Cognitive Strategies</h4>
        
        <h4>1. Challenging Negative Thoughts</h4>
        <p>Learn to identify and question anxious thoughts:</p>
        <ul>
          <li>- Thought records and cognitive restructuring</li>
          <li>- Probability estimation exercises</li>
          <li>- Evidence for and against anxious predictions</li>
          <li>- Developing balanced, realistic thoughts</li>
        </ul>
        
        <h4>2. Mindfulness and Acceptance</h4>
        <p>Discover how mindfulness can help you observe anxious thoughts without being overwhelmed by them.</p>
        
        <h4>Behavioral Techniques</h4>
        
        <h4>1. Gradual Exposure</h4>
        <p>Step-by-step approach to facing social fears:</p>
        <ul>
          <li>- Creating a fear hierarchy</li>
          <li>- Starting with less threatening situations</li>
          <li>- Gradual progression to more challenging scenarios</li>
          <li>- Building confidence through success experiences</li>
        </ul>
        
        <h4>2. Social Skills Training</h4>
        <p>Practical skills to improve your social interactions:</p>
        <ul>
          <li>- Conversation starters and maintenance</li>
          <li>- Active listening techniques</li>
          <li>- Non-verbal communication</li>
          <li>- Assertiveness training</li>
        </ul>
        
        <h4>Physical Techniques</h4>
        
        <h4>1. Relaxation Methods</h4>
        <ul>
          <li>- Progressive muscle relaxation</li>
          <li>- Deep breathing exercises</li>
          <li>- Visualization techniques</li>
          <li>- Grounding exercises for panic moments</li>
        </ul>
        
        <h4>Building Long-term Confidence</h4>
        
        <h4>Self-Compassion Practices</h4>
        <p>Learn to treat yourself with kindness and understanding, especially when social interactions don't go as planned.</p>
        
        <h4>Building a Support Network</h4>
        <p>Strategies for finding and connecting with understanding friends, family members, or support groups.</p>
        
        <h4>Lifestyle Factors</h4>
        <ul>
          <li>- Regular exercise and its anxiety-reducing benefits</li>
          <li>- Nutrition and its impact on mood and anxiety</li>
          <li>- Sleep hygiene for better emotional regulation</li>
          <li>- Limiting caffeine and alcohol</li>
        </ul>
        
        <p>Remember, overcoming social anxiety is a journey, not a destination. With patience, practice, and the right strategies, you can build genuine confidence and enjoy more fulfilling social connections.</p>
      `,
  },
  "myths-facts": {
    title: "Myths vs Facts about Mental Health",
    content: `
        <div class="resource-items">
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Mental health problems are a sign of weakness</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Mental health challenges are common and can affect individuals from all backgrounds. They do not reflect personal strength or character. Seeking support when needed demonstrates self-awareness and responsibility, and is a positive and proactive step toward well-being.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Only people with serious mental illnesses need therapy</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Therapy is a valuable resource for individuals seeking to enhance their well-being, manage stress, or navigate life's challenges, regardless of the presence of a serious mental health condition.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Talking about mental health will make things worse</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Discussing mental health openly can foster a supportive and understanding environment. Open conversations can also help reduce stigma and promote the development of effective coping strategies.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Therapy is just for talking about problems - it doesn't help with practical solutions</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Therapy offers a supportive environment to explore emotions while also providing valuable tools, coping strategies, and skills to effectively manage various life challenges.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: People with mental health issues are violent or dangerous</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                The vast majority of individuals with mental health conditions are not violent. In fact, they are more likely to be victims of violence than perpetrators. Mental health conditions do not define a person's identity, character, or behavior.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Mental health problems are rare and don't affect most people</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Approximately one in four individuals will experience a mental health concern at some point in their lives.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Mental health issues disappear if one learns to ignore them</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Mental health issues often become more challenging health problems. Addressing them early with professional support can prevent them from worsening.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Therapy is only necessary for individuals with a "serious" mental health condition</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Seeking therapy can be beneficial for individuals facing various challenges, including stress management, academic pressures, relationship concerns, difficulty expressing difficult emotions and personal development.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Medication is the sole solution for mental health issues</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                While medication can be beneficial for some individuals, therapy, lifestyle modifications, and self-care strategies are also important components of effective mental health management. Many individuals find that a combination of approaches yields the best results.
            </div>
        </div>
    </div>
    <div class="faq-item">
        <button class="faq-question" onclick="toggleFAQ(this)">
            <div class="question-text">Myth: Individuals with mental health issues can never recover</div>
            <div class="faq-icon"><i class="fa-solid fa-caret-down"></i></div>
        </button>
        <div class="faq-answer">
            <div class="faq-answer-content">
                Individuals with mental health challenges recover and lead fulfilling lives. Seeking therapy, medical treatment, self-care, and support at the right time can significantly enhance recovery and long-term well-being.
            </div>
        </div>
    </div>
</div>
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
    document.getElementById("page-3") || document.querySelector(".page");

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
    document.getElementById("page-3") || document.querySelector(".page");

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
