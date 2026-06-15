================================================================
  Dental Practice HTML Template v1.0
  by BrightBuild Studio — brightbuild.online
  Support: mohamedibrahi301@gmail.com
================================================================

Thank you for purchasing this template. This file walks you
through setup from start to live in five steps.


QUICK START (5 steps)
--------------------------------------------------------------

Step 1 — Open the files
  Unzip the package. Open the folder. You will see four HTML
  files and a css/, js/, and images/ folder. Open index.html
  in any web browser to preview the template on your computer.

Step 2 — Replace the placeholder text
  Open each HTML file in a text editor (Notepad on Windows,
  TextEdit on Mac, or free editors like VS Code or Notepad++).
  Search for:
    "Your Practice Name"  → replace with your practice name
    "Your Dental"         → replace with your brand name
    "(000) 000-0000"      → replace with your phone number
    "Your City, State"    → replace with your location
    "hello@yourpractice"  → replace with your email address
    "Your Street Name"    → replace with your address

Step 3 — Add your photos
  Place your images inside the images/ folder. Then update
  each image placeholder comment in the HTML files. For
  example, replace the hero-img div in index.html with:
    <img src="images/clinic-hero.jpg" alt="Our clinic" />

  Recommended image sizes:
    Hero (index.html):      800 x 600 px
    Doctor photo (about):   600 x 800 px
    Team photos (about):    400 x 400 px (square)

Step 4 — Connect the contact form
  Open contact.html. Find the <form> tag and replace
  "REPLACE_WITH_YOUR_FORM_ID" with your Formspree ID.

  To get a free Formspree endpoint:
    1. Go to formspree.io and create a free account
    2. Click "New Form", give it a name
    3. Copy the form endpoint URL (looks like:
       https://formspree.io/f/abcdefgh)
    4. Paste it into the action="" attribute on the form tag

  Alternative (if hosting on Netlify):
    Add the word "netlify" to the opening form tag:
      <form id="contact-form" netlify ...>
    Netlify detects it automatically and handles submissions.

Step 5 — Go live
  Upload the entire folder (all HTML files, css/, js/, images/)
  to your web host. See "HOSTING OPTIONS" below.


CUSTOMIZING COLORS
--------------------------------------------------------------

All colors are defined in one place. Open css/style.css and
look for the :root block near the top:

  :root {
    --ink:          #10243b;   /* dark navy — main text */
    --muted:        #5b6b7c;   /* gray — secondary text */
    --bg:           #f6f9fc;   /* near-white — page background */
    --card:         #ffffff;   /* white — card backgrounds */
    --accent:       #0e8a8a;   /* teal — buttons, links, icons */
    --accent-dark:  #0a6d6d;   /* darker teal — hover states */
    --accent-light: #e6f4f4;   /* pale teal — icon backgrounds */
    --line:         #e4ecf2;   /* light gray — borders */
    --gold:         #e9b949;   /* gold — star ratings */
  }

Change --accent to any color to retheme the entire site at
once. For example, to use a deep blue accent:
  --accent: #1a56c4;

Use a free color picker like coolors.co or palettemaker.com
to find colors that match your practice branding.


CUSTOMIZING FONTS
--------------------------------------------------------------

The template uses Inter, a clean professional font loaded from
Google Fonts. To change it:

1. Go to fonts.google.com
2. Choose a font and click "Get font"
3. Copy the <link> tag Google gives you
4. Replace the Inter <link> tag in the <head> of each HTML file
5. In css/style.css, find "font-family: 'Inter'" and replace
   'Inter' with the name of your new font

Popular alternatives for dental practices:
  - DM Sans (modern, approachable)
  - Nunito (friendly, rounded)
  - Lato (clean, professional)


ADDING A GOOGLE MAP
--------------------------------------------------------------

1. Go to maps.google.com
2. Search for your practice address
3. Click the Share button > Embed a map
4. Copy the <iframe> code shown
5. Open contact.html
6. Find the map-slot div
7. Replace the placeholder text inside it with the iframe code


ADDING A BOOKING WIDGET
--------------------------------------------------------------

If you use a booking system (Zocdoc, Calendly, Acuity, Jane,
Dentrix, or similar), you can embed it on the contact page:

1. Log into your booking platform
2. Find the "embed" or "widget" option (usually in Settings)
3. Copy the embed code they provide (usually an <iframe> or
   a small <script> tag)
4. Paste it into contact.html where you want it to appear,
   for example just above the footer

The contact form can stay on the page alongside the widget,
or you can remove it if the widget handles everything.


HOSTING OPTIONS
--------------------------------------------------------------

Option A — Netlify (Free, recommended for beginners)
  1. Go to app.netlify.com and create a free account
  2. Drag and drop your entire template folder onto the
     Netlify deploy screen
  3. Your site goes live in about 30 seconds with a free URL
  4. Add your custom domain in Site Settings > Domain Management

Option B — GitHub Pages (Free, for technical users)
  1. Create a free GitHub account at github.com
  2. Create a new repository (make it public)
  3. Upload all template files to the repository
  4. Go to Settings > Pages, set source to main branch
  5. Your site is live at yourusername.github.io/reponame

Option C — Traditional web host (Paid, ~$3-10/month)
  Popular options: Bluehost, SiteGround, HostGator, GoDaddy
  Upload the template files via their File Manager or FTP.
  Any host that supports static HTML files works.


FILE STRUCTURE
--------------------------------------------------------------

dental-template/
  index.html       — Home page
  about.html       — About page (doctor bio, team, values)
  services.html    — Services page (6 services, insurance)
  contact.html     — Contact page (form, hours, map)
  css/
    style.css      — All styles and colors
  js/
    main.js        — Mobile nav, scroll animations, form
  images/          — Place your photos here
  README.txt       — This file
  LICENSE.txt      — Usage rights


NEED HELP?
--------------------------------------------------------------

Email us at mohamedibrahi301@gmail.com with your question.
We respond within one business day.

If you would like us to customize this template for your
specific practice (your photos, your copy, your colors,
fully deployed and ready to launch), visit brightbuild.online
to see our done-for-you service.


================================================================
  Version 1.0 — June 2026
  BrightBuild Studio — brightbuild.online
================================================================
