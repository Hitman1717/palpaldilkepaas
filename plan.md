Akka & Bavs — 1st Anniversary Website Blueprint

A 100% frontend-only (HTML, CSS, JavaScript — no backend or database needed) gift website plan. Everything can be hosted for free on GitHub Pages, Netlify, or Vercel and opened right on their phones.

1. Must-Have Frontend Features

Every feature below runs completely in the browser with zero server setup:

A. Entry & Atmosphere

Wedding-Date Lock Screen: A clean passcode screen where they enter their wedding date (DDMMYYYY) or a funny inside joke to unlock the site.

Floating Music Toggle: A subtle play/pause button in the corner playing their wedding song or favorite romantic track (using a local .mp3 file).

Confetti / Sparkle Burst: A lightweight canvas celebration animation that triggers right after they unlock the site.

B. Storytelling & Memories

Live "Year 1" Counter: A real-time ticking clock showing exact Days, Hours, Minutes, and Seconds since their wedding muhurtham/ceremony.

Scroll-Driven Milestone Timeline: Vertical timeline cards animating in as they scroll (Wedding Day → Honeymoon → First Festival together → Candid moments → Year 1).

"Then vs. Now" Photo Slider: A draggable before-and-after image slider contrasting a dressed-up wedding photo with a cozy or goofy Year 1 photo.

Interactive Memory Map (Optional): Using Leaflet.js (free, no API key needed) with custom pins for their wedding venue, honeymoon, and favorite hangout spots.

C. Fun & Interactive Elements

"Year 1 Wrapped" (Spotify Style): Swipeable/clickable story cards showing fun, hardcoded stats (e.g., "365 Days Together", "500+ 'What should we eat?' debates", "Top Hangout Spot", "Official Song of Year 1").

Couple Trivia ("Who's More Likely To?"): A 5–10 question interactive quiz they can tap through together, ending with playful badges/titles for Akka and Bavs.

Digital Scratch-Off Cards: HTML5 Canvas scratch cards they rub with their finger or mouse to reveal fun IOUs from you (e.g., "Free biryani/dinner treat on me", "Zero teasing Akka for 24 hours", "Free movie tickets").

D. Emotional Finale

Pre-Collected Family Wish Wall: Since this is pure frontend, secretly collect wishes, photos, and short 15-second voice notes from parents, cousins, and friends ahead of time, then display them as a Polaroid collage with playable audio buttons.

Sibling Note (From You): A heartfelt closing letter from you at the bottom of the page.

2. Checklist of Changes & Customizations You Need to Make

Use this checklist to prepare all your content before (or while) editing the code.

Step 1: Core Personal Details

[ ] Names / Nicknames: Decide how they appear on the site (e.g., "Akka & Bavs" or their actual names).

[ ] Exact Wedding Date & Time: Needed for the live counter (e.g., YYYY-MM-DD HH:MM:SS).

[ ] Unlock Passcode: Choose their wedding date (DDMMYYYY) or a 4-digit PIN + a cute hint message.

[ ] Browser Tab Title & Favicon: Update <title> to "Happy 1st Anniversary Akka & Bavs!" and add a heart/ring emoji favicon.

Step 2: Gather & Optimize Media Assets

[ ] Hero Cover Photo: 1 high-res favorite wedding photo for the top banner.

[ ] Timeline Photos: 6–10 photos covering their first year (keep captions short and sweet).

[ ] "Then vs. Now" Pair: 2 photos with matching aspect ratios (both landscape or both portrait) for the slider.

[ ] Family Wish Wall Media: 5–10 photos and/or short .mp3 voice notes from close family/friends.

[ ] Background Song: 1 .mp3 track (trim or compress it under ~4MB so it loads fast on mobile).

[ ] Compress All Images: Run photos through TinyPNG or Squoosh (convert to .webp or compressed .jpg) so the site doesn't lag on phones.

Step 3: Write the Custom Text & Inside Jokes

[ ] Year 1 Wrapped Stats: Write 5–6 funny/sweet stat cards tailored specifically to Akka & Bavs.

[ ] Timeline Captions: Add the date, title, and a 1–2 line story for each milestone.

[ ] Quiz Questions: Write 5–8 custom "Who's more likely to..." questions + funny result messages.

[ ] Scratch Card Rewards: Decide on 3–4 custom gift coupons or date-night ideas from you.

[ ] Your Closing Letter: Write a personal note from you as the creator of the gift.

Step 4: Secretly Collect Family Wishes (Pure Frontend Hack)

[ ] Create a secret WhatsApp group (without Akka & Bavs!) 1 week before the anniversary.

[ ] Ask everyone for: 1 photo + 2-line wish (and optional 10-second voice note).

[ ] Hardcode their names, messages, and media paths into a simple JavaScript array (e.g., const familyWishes = [...]) inside your frontend code.

Step 5: Styling & Mobile Testing

[ ] Color Palette: Match their wedding colors (e.g., warm cream, maroon/burgundy, and gold, or pastel blush and sage).

[ ] Fonts: Pair an elegant serif (like Playfair Display) for headings with a clean sans-serif (like Poppins or Inter) for body text.

[ ] Mobile-First Check: Test the entire site on your phone screen (especially the photo slider, scratch cards, and audio button) since they'll most likely open it on mobile.

Step 6: Hosting & Gifting

[ ] Deploy for Free: Upload your project to Netlify Drop (drag-and-drop), Vercel, or GitHub Pages.

[ ] Custom Link Name: Rename the free URL to something cute (e.g., akka-bavs-year1.netlify.app).

[ ] Physical Surprise Tie-In: Generate a QR code for the link and print it on a greeting card, Polaroid, or small photo frame so they have something physical to unwrap first.

3. Recommended Simple Folder Structure

If you build it as a plain static frontend site, keep your files tidy like this:

akka-bavs-anniversary/
├── index.html          # Main structure
├── style.css           # Styling, colors, animations
├── script.js           # Counter, passcode, quiz, scratch cards, wishes data
└── assets/
    ├── music/
    │   └── wedding-song.mp3
    ├── photos/
    │   ├── hero.jpg
    │   ├── then.jpg
    │   ├── now.jpg
    │   └── timeline-1.jpg ...
    └── wishes/
        ├── mom-dad.jpg
        └── cousin-voice.mp3


4. Quick Pro-Tips

Autoplay Rule: Modern browsers block background music from autoplaying until the user clicks something. Put the audio.play() trigger right on the "Unlock" button of the passcode screen so the music starts seamlessly the moment they enter!

Privacy: Since it's a public static URL, don't put sensitive info (like home addresses). The wedding-date passcode screen is a great fun layer, and you can add <meta name="robots" content="noindex"> in <head> so Google won't index their photos.