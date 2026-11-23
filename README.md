# Akka & Bavs — 1st Anniversary Website 💕💍

A 100% pure frontend (HTML5, CSS3, JavaScript) gift website built for **Akka & Bavs** to celebrate their 1st Wedding Anniversary.

Runs entirely in the browser with **zero backend or database setup required**. Can be opened directly on phones or computers, and hosted for free on GitHub Pages, Netlify, or Vercel.

---

## 🌟 Key Features Included

1. **🔐 Wedding-Date Passcode Lock Screen**:
   - Private entry screen requiring their wedding date (e.g. `24112025`), PIN (`1234`), or cute bypass (`Peek Inside directly`).
   - "Need a Hint?" button with helpful clues.
   - Auto-triggers audio and celebration confetti upon unlocking!

2. **🎵 Background Music with Romantic Equalizer**:
   - Floating glassmorphic music pill with animated equalizer bars.
   - Plays their wedding song from `assets/music/wedding-song.mp3`.
   - **Built-in Web Audio API Fallback**: If an MP3 hasn't been added yet, it automatically plays a gentle, romantic music box melody (Canon in D chords) so music *always* works seamlessly.

3. **⏳ Real-Time "Year 1" Live Counter**:
   - Ticking live clock calculating exact **Days, Hours, Minutes, and Seconds** since the wedding ceremony.
   - Automatic milestone badge (*"365 Days • 52 Weeks • 8,760 Hours • 525,600 Heartbeats"*).

4. **🎧 "Year 1 Wrapped" (Spotify-Style Story Cards)**:
   - Swipeable/clickable story cards with top progress bars.
   - Fun hardcoded stats:
     - 365 Days Logged (0 days apart in heart)
     - 540+ "What should we eat?" debates
     - 1,460 cups of chai shared (Bavs's rating: 9.9/10)
     - Midnight Masterchefs (2 AM Maggie & sweet cravings)
     - 15,000+ mall steps & baggage duty
     - Official soundtrack of Year 1

5. **📜 Scroll-Driven Milestone Timeline**:
   - Vertical animated timeline with alternating story cards:
     - *Chapter 1:* The Muhurtham & Sacred Vows
     - *Chapter 2:* The Grand Sangeet & Dancing Night
     - *Chapter 3:* Honeymoon Escapades
     - *Chapter 4:* First Diwali & Festivals
     - *Chapter 5:* Building Our Cozy Nest
     - *Chapter 6:* 365 Days Strong — Happy 1st Anniversary!

6. **↔️ "Then vs. Now" Interactive Photo Slider**:
   - Draggable comparison slider with custom heart knob.
   - Left side: Day 1 (Royal Wedding Elegance).
   - Right side: Year 1 (Cozy, Happy & Inseparable).
   - Touch and mouse dragging enabled.

7. **🗺️ Interactive Memory Map (Leaflet.js)**:
   - Interactive map with heart pins marking special locations:
     - Wedding Mandapam
     - Honeymoon Getaway
     - Favorite Date Night Cafe
     - Home Sweet Home
   - Quick jump pills for effortless navigation.

8. **🤔 Couple Trivia Quiz ("Who's More Likely To?")**:
   - 6 playful interactive questions with `[👰 Akka]` vs `[🤵 Bavs]`.
   - Instant reaction feedback for each choice.
   - End-game verdict screen with compatibility score (*1000%!*) and confetti explosion.

9. **🪙 Digital Scratch-Off Cards (Sibling IOUs)**:
   - HTML5 Canvas scratch cards with shimmering gold/silver foil coating.
   - Rub with finger or mouse to scrub off the foil:
     - 🍛 *Royal Biryani Feast* (Paid by Vybhu)
     - 🤐 *48-Hour Zero Teasing Pass* (Immunity for Akka!)
     - 🎬 *Movie Night VIP Combo* (Recliner tickets + jumbo popcorn)
     - 📸 *Personal Chauffeur & Instagram Photographer* for a day
   - Automatically reveals reward and sparks confetti when >40% is scratched.

10. **💌 Polaroid Family Wish Wall**:
    - Pre-collected love notes styled like vintage Polaroids with washi tape.
    - Wishes from Amma & Appa, In-laws, Cousins, and Friends.
    - Interactive "Play Blessings" voice note button with chime audio effect.

11. **✉️ Interactive Wax-Sealed Sibling Love Letter**:
    - Vintage royal wax seal button.
    - Click seal to open envelope and unveil the heartfelt letter from Vybhu.

---

## 🚀 How to Run & Preview Right Now

1. **Directly in your Browser**:
   - Simply double-click `index.html` in your file explorer!
   - It will open in Google Chrome, Microsoft Edge, Safari, or Firefox immediately.

2. **Or with a Local Dev Server**:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```
   Open `http://localhost:8000` or `http://localhost:3000` in your browser.

---

## 🎨 How to Personalize Your Website

All primary settings and texts are centralized at the very top of `script.js` in the `CONFIG` object:

### 1. Change Couple Names & Sibling Name
Open `script.js` and edit:
```javascript
names: {
  bride: "Akka",
  groom: "Bavs",
  sibling: "Vybhu"
}
```

### 2. Set the Exact Wedding Date & Time
In `script.js`:
```javascript
weddingDate: "2025-11-24T09:30:00", // Format: YYYY-MM-DDTHH:MM:SS
```

### 3. Customize the Passcode
In `script.js`:
```javascript
passcodes: [
  "24112025",  // Wedding date DDMMYYYY
  "2411",      // Short date
  "1234",      // Quick pin
  "love"       // Keyword
]
```

### 4. Drop in Real Photos & Songs

Place your media files in the `assets/` folders using these exact names (the website automatically displays them, and falls back to curated romantic photos if empty):

- **Hero Banner:** `assets/photos/hero.jpg`
- **Then (Wedding Day):** `assets/photos/then.jpg`
- **Now (Casual/Year 1):** `assets/photos/now.jpg`
- **Timeline Milestones:**
  - `assets/photos/timeline-1.jpg`
  - `assets/photos/timeline-2.jpg`
  - `assets/photos/timeline-3.jpg`
  - `assets/photos/timeline-4.jpg`
  - `assets/photos/timeline-5.jpg`
  - `assets/photos/timeline-6.jpg`
- **Family Wishes Photos:**
  - `assets/wishes/mom-dad.jpg`
  - `assets/wishes/inlaws.jpg`
  - `assets/wishes/cousins.jpg`
- **Background Song:**
  - `assets/music/wedding-song.mp3`

*(Tip: Run your photos through [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) to keep file sizes under 500KB each for lightning-fast loading on mobile phones!)*

---

## 🌐 Free 2-Minute Deployment Options

### Option 1: Netlify Drop (Easiest — Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `annieversary` folder into the upload box.
3. Your website is live in 10 seconds with a free URL like `https://akka-bavs-year1.netlify.app`!

### Option 2: Vercel
1. Install Vercel CLI or import your GitHub repository at [vercel.com](https://vercel.com).
2. Click **Deploy**.

### Option 3: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings** > **Pages** > Select `main` branch > `/ (root)` > Save.

---

## 🎁 Surprise Gifting Tip

Generate a free QR code for your live URL at [qr-code-generator.com](https://www.qr-code-generator.com/) and print it inside an anniversary greeting card or frame. When Akka & Bavs scan it with their phone camera on their anniversary morning, the website unlocks! 💖
