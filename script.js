/**
 * ============================================================================
 * Akka & Bavs — 1st Anniversary Website Engine
 * Fully Client-Side (Zero Server / DB required)
 * Built with Love by Rohit
 * ============================================================================
 */

/* ==========================================================================
   EASY CUSTOMIZATION CONFIG
   Edit any value in this block to personalize the website!
   ========================================================================== */
const CONFIG = {
  // Couple Names
  names: {
    bride: "Akka",
    groom: "Bavs",
    sibling: "Rohit"
  },

  // Wedding Date & Time (YYYY-MM-DDTHH:MM:SS)
  // Used for the live ticking counter
  weddingDate: "2025-11-24T09:30:00",

  // Accepted Passcodes for the Lock Screen (Case-insensitive)
  // DDMMYYYY, short pins, nicknames, or common inside jokes
  passcodes: [
    "24112025",
    "2411",
    "1234",
    "love",
    "akka",
    "bavs",
    "21112025",
    "forever"
  ],

  // Year 1 Wrapped Stats (Spotify-Style Story Cards)
  wrappedStories: [
    {
      badge: "STORY 1 OF 6",
      icon: "⏳",
      stat: "365",
      title: "Days as Husband & Wife",
      desc: "8,760 hours of love, 525,600 minutes of pure friendship, and exactly zero resignations accepted!",
      footer: "🏆 1 Year Milestone Completed"
    },
    {
      badge: "STORY 2 OF 6",
      icon: "🤔",
      stat: "540+",
      title: "The 'What Should We Eat?' Debates",
      desc: "99% of conversations started with 'Whatever you want' and ended with 'No, not that'. Mastered the art of compromise!",
      footer: "🍕 Top Choice: Biryani & Dessert"
    },
    {
      badge: "STORY 3 OF 6",
      icon: "☕",
      stat: "1,460",
      title: "Cups of Chai Shared",
      desc: "From rushed morning sips to cozy evening chats on the balcony. Bavs's tea-making rating: Certified 9.9/10!",
      footer: "🫖 Official Drink of Year 1"
    },
    {
      badge: "STORY 4 OF 6",
      icon: "🍳",
      stat: "No. 1",
      title: "Midnight Masterchefs",
      desc: "Top culinary achievement: 2 AM spicy noodles, experimental pasta, and surprise sweet treats from the fridge.",
      footer: "👨‍🍳 Kitchen Chemistry Level: Expert"
    },
    {
      badge: "STORY 5 OF 6",
      icon: "🛍️",
      stat: "15,000+",
      title: "Mall Steps Logged",
      desc: "Akka shopping: 3 hours. Bavs holding the shopping bags with a polite smile: Priceless and undefeated!",
      footer: "👜 Ultimate Shopping Partner"
    },
    {
      badge: "STORY 6 OF 6",
      icon: "🎵",
      stat: "∞",
      title: "Soundtrack of Year 1",
      desc: "Top Track: That one favorite romantic song that makes both of you smile in the car. Forever on repeat!",
      footer: "✨ Verdict: The Undefeated Power Couple"
    }
  ],

  // Interactive Memory Map Locations (Leaflet.js)
  mapLocations: [
    {
      title: "Wedding Mandapam",
      category: "Where Forever Began",
      coords: [13.0425, 80.2458], // Customizable coordinates
      zoom: 14,
      desc: "The sacred day, Vedic chants, floral garland exchange, and heartfelt vows.",
      img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Honeymoon Paradise",
      category: "Beach & Mountain Escapes",
      coords: [9.9312, 76.2673], // Kerala / Beach coast
      zoom: 13,
      desc: "Golden sunsets, endless coastal walks, and our very first romantic trip as newlyweds.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Favorite Date Night Cafe",
      category: "Chai & Conversations",
      coords: [12.9716, 77.5946],
      zoom: 15,
      desc: "The cozy corner table where we spend hours talking about life, dreams, and everything in between.",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Home Sweet Home",
      category: "Our Cozy Haven",
      coords: [13.0827, 80.2707],
      zoom: 15,
      desc: "Sunday morning lazy breakfasts, plant parenting, laughter, and infinite comfort.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Couple Trivia Quiz ("Who's More Likely To?")
  triviaQuestions: [
    {
      question: "Who is more likely to fall asleep 15 minutes into a movie?",
      reactionAkka: "Haha! Akka loves her cozy naps! Blankets are irresistible.",
      reactionBavs: "Bavs had a long week! Movie theaters double as nap sanctuaries."
    },
    {
      question: "Who takes longer to get ready for a family event?",
      reactionAkka: "Perfection takes time! Drapes, jewelry, and unmatched royal elegance.",
      reactionBavs: "Bavs spends 20 minutes perfecting the shirt collar and watch! Admit it!"
    },
    {
      question: "Who says 'I\\'m not hungry' and then eats half the other's food?",
      reactionAkka: "The universal rule of marriage: your food is our food!",
      reactionBavs: "Bavs testing the food for quality assurance! 😂"
    },
    {
      question: "Who is the better navigator when using Google Maps?",
      reactionAkka: "Akka gives turn-by-turn life guidance even when GPS goes silent!",
      reactionBavs: "Bavs has internal compass confidence (even during a U-turn detour)!"
    },
    {
      question: "Who is more likely to buy something random online at 1 AM?",
      reactionAkka: "Midnight shopping cart therapy is completely justified!",
      reactionBavs: "New gadgets and unexpected Amazon packages appearing at the doorstep!"
    },
    {
      question: "Who is more likely to start a goofy dance party in the kitchen?",
      reactionAkka: "Akka brings all the Bollywood sparkle and energy to the kitchen!",
      reactionBavs: "Bavs has signature dance moves that belong in a comedy special!"
    }
  ],

  // Family Wish Wall Pre-collected Data
  familyWishes: [
    {
      author: "Amma & Appa",
      message: "Seeing you both grow together in love, respect, and joy brings us immense peace. May God shower you with boundless health, laughter, and prosperity forever.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      voiceNoteTitle: "Amma's Blessings 🎙️"
    },
    {
      author: "In-Laws",
      message: "Akka brought so much sunshine into our family! May your togetherness remain as bright and beautiful as your wedding day.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      voiceNoteTitle: "Family Love Note 🎙️"
    },
    {
      author: "The Sibling Gang (Rohit & Cousins)",
      message: "Happy 1st Anniversary to the coolest couple! Bavs, thank you for handling Akka. Akka, thank you for feeding him. Treat is strictly pending on you both!",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
      voiceNoteTitle: "Cousins Cheers 🎙️"
    },
    {
      author: "Best Friends",
      message: "One whole year of being the model couple! You two are living proof that soulmates exist. Cheers to 100 more years of love and celebrations!",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      voiceNoteTitle: "Friends Toast 🎙️"
    }
  ]
};

/* ==========================================================================
   GLOBAL APP STATE
   ========================================================================== */
const AppState = {
  isUnlocked: false,
  isMusicPlaying: false,
  currentStoryIdx: 0,
  storyTimer: null,
  currentQuizIdx: 0,
  quizScores: { akka: 0, bavs: 0 },
  audioContext: null,
  synthInterval: null,
  leafletMap: null,
  mapMarkers: []
};

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const elements = {
  lockScreen: document.getElementById('lock-screen'),
  passcodeInput: document.getElementById('passcode-input'),
  unlockBtn: document.getElementById('unlock-btn'),
  passcodeError: document.getElementById('passcode-error'),
  hintToggleBtn: document.getElementById('hint-toggle-btn'),
  quickEnterBtn: document.getElementById('quick-enter-btn'),
  hintBox: document.getElementById('hint-box'),
  confettiCanvas: document.getElementById('confetti-canvas'),
  heartsBg: document.getElementById('hearts-bg'),
  musicToggleBtn: document.getElementById('music-toggle-btn'),
  musicWave: document.getElementById('music-wave'),
  musicLabel: document.getElementById('music-label'),
  bgAudio: document.getElementById('bg-audio'),
  countDays: document.getElementById('count-days'),
  countHours: document.getElementById('count-hours'),
  countMinutes: document.getElementById('count-minutes'),
  countSeconds: document.getElementById('count-seconds'),
  storyProgressBar: document.getElementById('story-progress-bar'),
  wrappedCard: document.getElementById('wrapped-card'),
  wrappedPrevBtn: document.getElementById('wrapped-prev-btn'),
  wrappedNextBtn: document.getElementById('wrapped-next-btn'),
  wrappedCounter: document.getElementById('wrapped-counter'),
  comparisonSlider: document.getElementById('comparison-slider'),
  thenWrapper: document.getElementById('then-wrapper'),
  sliderHandle: document.getElementById('slider-handle'),
  mapPills: document.getElementById('map-pills'),
  quizWrapper: document.getElementById('quiz-wrapper'),
  quizStep: document.getElementById('quiz-step'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizQuestion: document.getElementById('quiz-question'),
  optionAkkaBtn: document.getElementById('option-akka-btn'),
  optionBavsBtn: document.getElementById('option-bavs-btn'),
  quizFeedback: document.getElementById('quiz-feedback'),
  feedbackText: document.getElementById('feedback-text'),
  quizNextBtn: document.getElementById('quiz-next-btn'),
  quizContent: document.getElementById('quiz-content'),
  quizResults: document.getElementById('quiz-results'),
  resultsStats: document.getElementById('results-stats'),
  quizRestartBtn: document.getElementById('quiz-restart-btn'),
  polaroidGrid: document.getElementById('polaroid-grid'),
  envelopeElement: document.getElementById('envelope-element'),
  waxSealBtn: document.getElementById('wax-seal-btn'),
  toggleLetterBtn: document.getElementById('toggle-letter-btn'),
  celebrateAgainBtn: document.getElementById('celebrate-again-btn')
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initFloatingHearts();
  initPasscodeScreen();
  initMusicController();
  initLiveCounter();
  initWrappedStories();
  initThenNowSlider();
  initMemoryMap();
  initTriviaQuiz();
  initScratchCards();
  initWishWall();
  initSiblingLetter();
  initNavigationHighlight();

  // Celebrate again button in footer
  if (elements.celebrateAgainBtn) {
    elements.celebrateAgainBtn.addEventListener('click', () => {
      launchConfetti();
    });
  }
});

/* ==========================================================================
   1. FLOATING BACKGROUND HEARTS
   ========================================================================== */
function initFloatingHearts() {
  const container = elements.heartsBg;
  if (!container) return;
  const hearts = ['❤️', '💖', '✨', '💍', '🌸', '🥂'];

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${9 + Math.random() * 8}s`;
    heart.style.animationDelay = `${Math.random() * 7}s`;
    heart.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    container.appendChild(heart);
  }
}

/* ==========================================================================
   2. PASSCODE LOCK SCREEN
   ========================================================================== */
function initPasscodeScreen() {
  // Focus input automatically on load
  setTimeout(() => {
    if (elements.passcodeInput) elements.passcodeInput.focus();
  }, 400);

  // Toggle Hint
  if (elements.hintToggleBtn) {
    elements.hintToggleBtn.addEventListener('click', () => {
      elements.hintBox.classList.toggle('hidden');
    });
  }

  // Quick peek entry
  if (elements.quickEnterBtn) {
    elements.quickEnterBtn.addEventListener('click', () => {
      unlockSite();
    });
  }

  // Submit button
  if (elements.unlockBtn) {
    elements.unlockBtn.addEventListener('click', checkPasscode);
  }

  // Enter key press in input
  if (elements.passcodeInput) {
    elements.passcodeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        checkPasscode();
      }
    });
  }
}

function checkPasscode() {
  const inputVal = (elements.passcodeInput.value || '').trim().toLowerCase();
  
  // Clean special characters like dots, slashes, hyphens in date format
  const sanitized = inputVal.replace(/[\/\-\.\s]/g, '');

  const isCorrect = CONFIG.passcodes.some(code => {
    return sanitized === code.toLowerCase();
  });

  if (isCorrect || inputVal === '') {
    unlockSite();
  } else {
    // Shake & Error Feedback
    elements.passcodeInput.classList.add('shake');
    elements.passcodeError.textContent = 'Oops! Try again or tap "Need a Hint" / "Peek Inside" 💕';
    setTimeout(() => {
      elements.passcodeInput.classList.remove('shake');
    }, 500);
  }
}

function unlockSite() {
  AppState.isUnlocked = true;
  elements.lockScreen.classList.add('unlocked');
  
  // Launch celebration confetti burst!
  launchConfetti();
  setTimeout(() => launchConfetti(), 400);

  // Start music automatically on unlock (Browser autoplay permission is granted on click)
  startMusic();
}

/* ==========================================================================
   3. BACKGROUND MUSIC & SYNTHESIZED ROMANTIC FALLBACK
   ========================================================================== */
function initMusicController() {
  const btn = elements.musicToggleBtn;
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (AppState.isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });

  // Handle audio element events
  const audio = elements.bgAudio;
  if (audio) {
    audio.addEventListener('play', () => {
      AppState.isMusicPlaying = true;
      elements.musicWave.classList.add('playing');
      elements.musicLabel.textContent = 'Playing 🎵';
    });

    audio.addEventListener('pause', () => {
      if (!AppState.synthInterval) {
        AppState.isMusicPlaying = false;
        elements.musicWave.classList.remove('playing');
        elements.musicLabel.textContent = 'Paused 🔇';
      }
    });

    audio.addEventListener('error', () => {
      console.log('Local MP3 not found. Falling back to built-in romantic melody synthesizer.');
      // If audio fails, we still allow romantic melodic sound box!
    });
  }
}

function startMusic() {
  const audio = elements.bgAudio;
  if (audio && audio.currentSrc) {
    audio.play().then(() => {
      AppState.isMusicPlaying = true;
      elements.musicWave.classList.add('playing');
      elements.musicLabel.textContent = 'Playing 🎵';
    }).catch(err => {
      console.log('HTML5 audio play blocked/failed, switching to Web Audio API fallback:', err);
      startRomanticSynth();
    });
  } else {
    startRomanticSynth();
  }
}

function stopMusic() {
  const audio = elements.bgAudio;
  if (audio && !audio.paused) {
    audio.pause();
  }
  stopRomanticSynth();
  AppState.isMusicPlaying = false;
  elements.musicWave.classList.remove('playing');
  elements.musicLabel.textContent = 'Paused 🔇';
}

/**
 * Romantic Acoustic Music Box Web Audio API Synthesizer
 * Plays a warm, soothing arpeggiated music box melody (Canon in D / Lullaby progression)
 * Guarantees romantic background sound even when external mp3 file isn't present yet!
 */
function startRomanticSynth() {
  if (AppState.synthInterval) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AppState.audioContext) {
      AppState.audioContext = new AudioContext();
    }
    if (AppState.audioContext.state === 'suspended') {
      AppState.audioContext.resume();
    }

    AppState.isMusicPlaying = true;
    elements.musicWave.classList.add('playing');
    elements.musicLabel.textContent = 'Music Box ✨';

    // Romantic Arpeggiated Melody Notes (Frequencies in Hz)
    // Progression: D - A - Bm - F#m - G - D - G - A
    const notes = [
      293.66, 369.99, 440.00, 587.33, // D major
      220.00, 277.18, 329.63, 440.00, // A major
      246.94, 293.66, 369.99, 493.88, // B minor
      185.00, 220.00, 277.18, 369.99, // F# minor
      196.00, 246.94, 293.66, 392.00, // G major
      293.66, 369.99, 440.00, 587.33, // D major
      196.00, 246.94, 293.66, 392.00, // G major
      220.00, 277.18, 329.63, 440.00  // A major
    ];

    let noteIdx = 0;
    function playNextNote() {
      if (!AppState.isMusicPlaying || !AppState.audioContext) return;
      
      const ctx = AppState.audioContext;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Kalimba / Glockenspiel warm sine sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIdx], ctx.currentTime);

      // Soft envelope
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);

      noteIdx = (noteIdx + 1) % notes.length;
    }

    playNextNote();
    AppState.synthInterval = setInterval(playNextNote, 480);
  } catch (e) {
    console.error('Web Audio synth error:', e);
  }
}

function stopRomanticSynth() {
  if (AppState.synthInterval) {
    clearInterval(AppState.synthInterval);
    AppState.synthInterval = null;
  }
}

/* ==========================================================================
   4. LIVE YEAR 1 COUNTER
   ========================================================================== */
function initLiveCounter() {
  const weddingTime = new Date(CONFIG.weddingDate).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = Math.max(0, now - weddingTime);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (elements.countDays) elements.countDays.textContent = days;
    if (elements.countHours) elements.countHours.textContent = String(hours).padStart(2, '0');
    if (elements.countMinutes) elements.countMinutes.textContent = String(minutes).padStart(2, '0');
    if (elements.countSeconds) elements.countSeconds.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. YEAR 1 WRAPPED (SPOTIFY-STYLE STORY CARDS)
   ========================================================================== */
function initWrappedStories() {
  const stories = CONFIG.wrappedStories;
  const progressContainer = elements.storyProgressBar;
  if (!progressContainer || !stories.length) return;

  // Build progress bars
  progressContainer.innerHTML = '';
  stories.forEach((_, idx) => {
    const seg = document.createElement('div');
    seg.className = 'story-progress-seg';
    seg.id = `story-seg-${idx}`;
    seg.innerHTML = '<div class="story-progress-fill"></div>';
    progressContainer.appendChild(seg);
  });

  // Render first story
  renderStory(0);

  // Nav buttons
  if (elements.wrappedPrevBtn) {
    elements.wrappedPrevBtn.addEventListener('click', () => {
      goToStory(AppState.currentStoryIdx - 1);
    });
  }

  if (elements.wrappedNextBtn) {
    elements.wrappedNextBtn.addEventListener('click', () => {
      goToStory(AppState.currentStoryIdx + 1);
    });
  }

  // Touch Swipe for mobile
  let touchStartX = 0;
  elements.wrappedCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  elements.wrappedCard.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 45) {
      goToStory(AppState.currentStoryIdx + 1);
    } else if (touchEndX - touchStartX > 45) {
      goToStory(AppState.currentStoryIdx - 1);
    }
  }, { passive: true });
}

function renderStory(idx) {
  const stories = CONFIG.wrappedStories;
  if (idx < 0 || idx >= stories.length) return;

  AppState.currentStoryIdx = idx;
  const item = stories[idx];

  // Update Progress bars
  stories.forEach((_, sIdx) => {
    const seg = document.getElementById(`story-seg-${sIdx}`);
    if (!seg) return;
    const fill = seg.querySelector('.story-progress-fill');
    if (sIdx < idx) {
      seg.classList.add('completed');
      if (fill) fill.style.width = '100%';
    } else if (sIdx === idx) {
      seg.classList.remove('completed');
      if (fill) fill.style.width = '100%';
    } else {
      seg.classList.remove('completed');
      if (fill) fill.style.width = '0%';
    }
  });

  // Injected Card HTML
  elements.wrappedCard.innerHTML = `
    <div class="wrapped-card-top">
      <span>${item.badge}</span>
      <span>AKKA & BAVS 2026</span>
    </div>
    <div class="wrapped-card-icon">${item.icon}</div>
    <div class="wrapped-stat-number">${item.stat}</div>
    <h3 class="wrapped-stat-title">${item.title}</h3>
    <p class="wrapped-stat-desc">${item.desc}</p>
    <div class="wrapped-card-footer">${item.footer}</div>
  `;

  if (elements.wrappedCounter) {
    elements.wrappedCounter.textContent = `Card ${idx + 1} / ${stories.length}`;
  }
}

function goToStory(targetIdx) {
  const stories = CONFIG.wrappedStories;
  if (targetIdx < 0) {
    renderStory(0);
  } else if (targetIdx >= stories.length) {
    renderStory(0); // loop back
  } else {
    renderStory(targetIdx);
  }
}

/* ==========================================================================
   6. "THEN VS. NOW" INTERACTIVE PHOTO SLIDER
   ========================================================================== */
function initThenNowSlider() {
  const container = elements.comparisonSlider;
  const thenWrap = elements.thenWrapper;
  const handle = elements.sliderHandle;
  if (!container || !thenWrap || !handle) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let posX = x - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    thenWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Events for Mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });
}

/* ==========================================================================
   7. INTERACTIVE MEMORY MAP (LEAFLET.JS)
   ========================================================================== */
function initMemoryMap() {
  const mapElement = document.getElementById('memory-map');
  if (!mapElement) return;

  // Check if Leaflet is loaded
  if (typeof L === 'undefined') {
    mapElement.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#721226;text-align:center;padding:2rem;">
        <div>
          <h3>📍 Our Sacred Memory Locations</h3>
          <p>Wedding Mandapam • Honeymoon Getaway • Favorite Date Spot • Home Sweet Home</p>
        </div>
      </div>
    `;
    return;
  }

  try {
    const locations = CONFIG.mapLocations;
    const initialLocation = locations[0];

    // Initialize Map with clean warm tiles (CartoDB Positron / OSM)
    const map = L.map('memory-map', {
      scrollWheelZoom: false,
      zoomControl: true
    }).setView(initialLocation.coords, 12);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    AppState.leafletMap = map;

    // Custom Heart Marker Icon
    const heartIcon = L.divIcon({
      className: 'custom-leaflet-heart',
      html: '<div style="background:#721226;color:#fff;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.3);border:2px solid #c99a3e;font-size:16px;">💖</div>',
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });

    // Add markers
    AppState.mapMarkers = [];
    locations.forEach((loc, index) => {
      const popupHtml = `
        <div class="map-popup-card">
          <img src="${loc.img}" alt="${loc.title}">
          <h4>${loc.title}</h4>
          <span style="font-size:0.75rem;color:#c99a3e;font-weight:700;">${loc.category}</span>
          <p>${loc.desc}</p>
        </div>
      `;

      const marker = L.marker(loc.coords, { icon: heartIcon })
        .addTo(map)
        .bindPopup(popupHtml);

      if (index === 0) {
        marker.openPopup();
      }

      AppState.mapMarkers.push(marker);
    });

    // Fit map bounds across all pins
    const group = new L.featureGroup(AppState.mapMarkers);
    map.fitBounds(group.getBounds().pad(0.25));

    // Map pills click handler
    const pills = document.querySelectorAll('.map-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const pinId = parseInt(pill.getAttribute('data-pin-id'), 10);
        if (locations[pinId] && AppState.mapMarkers[pinId]) {
          const loc = locations[pinId];
          map.flyTo(loc.coords, loc.zoom || 14, { duration: 1.2 });
          AppState.mapMarkers[pinId].openPopup();
        }
      });
    });

  } catch (err) {
    console.error('Error initializing map:', err);
  }
}

/* ==========================================================================
   8. COUPLE TRIVIA: "WHO'S MORE LIKELY TO?"
   ========================================================================== */
function initTriviaQuiz() {
  renderQuizQuestion(0);

  if (elements.optionAkkaBtn) {
    elements.optionAkkaBtn.addEventListener('click', () => handleQuizAnswer('akka'));
  }

  if (elements.optionBavsBtn) {
    elements.optionBavsBtn.addEventListener('click', () => handleQuizAnswer('bavs'));
  }

  if (elements.quizNextBtn) {
    elements.quizNextBtn.addEventListener('click', () => {
      const nextIdx = AppState.currentQuizIdx + 1;
      if (nextIdx < CONFIG.triviaQuestions.length) {
        renderQuizQuestion(nextIdx);
      } else {
        showQuizResults();
      }
    });
  }

  if (elements.quizRestartBtn) {
    elements.quizRestartBtn.addEventListener('click', () => {
      AppState.quizScores = { akka: 0, bavs: 0 };
      elements.quizResults.classList.add('hidden');
      elements.quizContent.classList.remove('hidden');
      renderQuizQuestion(0);
    });
  }
}

function renderQuizQuestion(idx) {
  AppState.currentQuizIdx = idx;
  const total = CONFIG.triviaQuestions.length;
  const item = CONFIG.triviaQuestions[idx];

  elements.quizStep.textContent = `Question ${idx + 1} of ${total}`;
  elements.quizProgressFill.style.width = `${((idx + 1) / total) * 100}%`;
  elements.quizQuestion.textContent = item.question;

  // Reset states
  elements.optionAkkaBtn.classList.remove('selected');
  elements.optionBavsBtn.classList.remove('selected');
  elements.quizFeedback.classList.add('hidden');
}

function handleQuizAnswer(choice) {
  AppState.quizScores[choice]++;
  const item = CONFIG.triviaQuestions[AppState.currentQuizIdx];

  elements.optionAkkaBtn.classList.toggle('selected', choice === 'akka');
  elements.optionBavsBtn.classList.toggle('selected', choice === 'bavs');

  const text = choice === 'akka' ? item.reactionAkka : item.reactionBavs;
  elements.feedbackText.textContent = text;
  elements.quizFeedback.classList.remove('hidden');
}

function showQuizResults() {
  elements.quizContent.classList.add('hidden');
  elements.quizResults.classList.remove('hidden');

  elements.resultsStats.innerHTML = `
    <div class="result-stat-pill">
      <strong>${AppState.quizScores.akka}</strong>
      <span>Akka Votes 👑</span>
    </div>
    <div class="result-stat-pill">
      <strong>${AppState.quizScores.bavs}</strong>
      <span>Bavs Votes 🤵</span>
    </div>
  `;

  // Trigger celebration confetti
  launchConfetti();
}

/* ==========================================================================
   9. DIGITAL SCRATCH-OFF CARDS
   ========================================================================== */
function initScratchCards() {
  const cards = [
    { canvasId: 'scratch-canvas-1', badgeId: 'scratch-badge-1' },
    { canvasId: 'scratch-canvas-2', badgeId: 'scratch-badge-2' },
    { canvasId: 'scratch-canvas-3', badgeId: 'scratch-badge-3' },
    { canvasId: 'scratch-canvas-4', badgeId: 'scratch-badge-4' }
  ];

  cards.forEach(card => {
    setupCanvasScratch(card.canvasId, card.badgeId);
  });
}

function setupCanvasScratch(canvasId, badgeId) {
  const canvas = document.getElementById(canvasId);
  const badge = document.getElementById(badgeId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  let isScratching = false;
  let isRevealed = false;

  // Fill canvas with luxury gold/silver foil texture
  function drawFoil() {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#d4af37');
    gradient.addColorStop(0.3, '#f3e5ab');
    gradient.addColorStop(0.5, '#aa771c');
    gradient.addColorStop(0.8, '#ffd700');
    gradient.addColorStop(1, '#85580a');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add pattern / text
    ctx.fillStyle = '#412502';
    ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH WITH FINGER OR MOUSE ✨', width / 2, height / 2 - 10);
    ctx.font = '13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Rub to reveal anniversary gift!', width / 2, height / 2 + 18);
  }

  drawFoil();

  function scratch(x, y) {
    if (isRevealed) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkRevealedPercentage();
  }

  function checkRevealedPercentage() {
    if (isRevealed) return;
    try {
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      const totalPixels = pixels.length / 4;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] === 0) {
          transparentPixels += 4;
        }
      }

      const percent = (transparentPixels / totalPixels) * 100;
      if (percent > 42) {
        isRevealed = true;
        // Fade out canvas completely
        canvas.style.transition = 'opacity 0.6s ease';
        canvas.style.opacity = '0';
        setTimeout(() => {
          canvas.style.display = 'none';
          if (badge) badge.classList.remove('hidden');
          launchConfetti();
        }, 500);
      }
    } catch (e) {
      // Fallback
    }
  }

  // Mouse interaction
  canvas.addEventListener('mousedown', (e) => {
    isScratching = true;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    scratch(x, y);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    scratch(x, y);
  });

  window.addEventListener('mouseup', () => {
    isScratching = false;
  });

  // Touch interaction
  canvas.addEventListener('touchstart', (e) => {
    isScratching = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    scratch(x, y);
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (!isScratching) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * (canvas.width / rect.width);
    const y = (touch.clientY - rect.top) * (canvas.height / rect.height);
    scratch(x, y);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isScratching = false;
  });
}

/* ==========================================================================
   10. FAMILY & FRIENDS WISH WALL
   ========================================================================== */
function initWishWall() {
  const container = elements.polaroidGrid;
  if (!container) return;

  const wishes = CONFIG.familyWishes;
  container.innerHTML = '';

  wishes.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.innerHTML = `
      <div class="washi-tape"></div>
      <div class="polaroid-img-wrapper">
        <img 
          src="${item.img}" 
          alt="${item.author}" 
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80';"
        >
      </div>
      <p class="polaroid-message">"${item.message}"</p>
      <span class="polaroid-author">— ${item.author}</span>
      <button class="voice-note-pill" data-voice-idx="${index}" type="button">
        <span>▶</span> ${item.voiceNoteTitle}
      </button>
    `;
    container.appendChild(card);
  });

  // Voice note play click
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.voice-note-pill');
    if (btn) {
      const idx = btn.getAttribute('data-voice-idx');
      const author = wishes[idx]?.author || 'Family';
      btn.innerHTML = '<span>🔊</span> Playing blessings...';
      
      // Play brief pleasant chime
      playBlessingChime();

      setTimeout(() => {
        btn.innerHTML = `<span>▶</span> ${wishes[idx].voiceNoteTitle}`;
      }, 3500);
    }
  });
}

function playBlessingChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major chord chime
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.15 + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.15);
      osc.stop(ctx.currentTime + idx * 0.15 + 1.3);
    });
  } catch (e) {
    //
  }
}

/* ==========================================================================
   11. SIBLING CLOSING LOVE LETTER
   ========================================================================== */
function initSiblingLetter() {
  const seal = elements.waxSealBtn;
  const toggleBtn = elements.toggleLetterBtn;
  const paper = document.getElementById('letter-paper');
  const env = elements.envelopeElement;
  if (!seal && !toggleBtn) return;

  function toggleLetter() {
    if (env) {
      env.classList.toggle('open');
    }
    if (paper) {
      paper.classList.toggle('expanded');
    }
    const isOpen = env && env.classList.contains('open');
    if (toggleBtn) {
      toggleBtn.textContent = isOpen ? 'Fold Letter Back ✉️' : 'Open Letter ✉️';
    }
    launchConfetti();
  }

  if (seal) seal.addEventListener('click', toggleLetter);
  if (toggleBtn) toggleBtn.addEventListener('click', toggleLetter);
}

/* ==========================================================================
   12. STICKY NAV ACTIVE HIGHLIGHT
   ========================================================================== */
function initNavigationHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   13. LIGHTWEIGHT CANVAS CONFETTI ENGINE
   ========================================================================== */
function launchConfetti() {
  const canvas = elements.confettiCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const count = 90;
  const particles = [];
  const colors = ['#721226', '#c99a3e', '#f1dfa8', '#ff6b8b', '#ffffff', '#e84393'];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.45 + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.9) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
      isHeart: Math.random() > 0.65
    });
  }

  let animationFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeParticles = 0;

    particles.forEach(p => {
      if (p.opacity <= 0) return;
      activeParticles++;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38; // gravity
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.012; // fade out

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);

      if (p.isHeart) {
        ctx.fillStyle = p.color;
        ctx.font = `${p.size * 1.8}px serif`;
        ctx.fillText('❤️', 0, 0);
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      }

      ctx.restore();
    });

    if (activeParticles > 0) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
}
