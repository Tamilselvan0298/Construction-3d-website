import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const BASE_URL = 'http://localhost:5173';

const routes = [
  { route: '/', filename: 'index.html', title: 'APEX CONSTRUCTIONS | Engineering & Infrastructure', isHome: true },
  { route: '/about', filename: 'about.html', title: 'About Us | APEX CONSTRUCTIONS' },
  { route: '/strengths-services', filename: 'strengths-services.html', title: 'Strengths & Services | APEX CONSTRUCTIONS' },
  { route: '/projects/ongoing', filename: 'ongoing-projects.html', title: 'Ongoing Projects | APEX CONSTRUCTIONS' },
  { route: '/projects/completed', filename: 'completed-projects.html', title: 'Completed Projects | APEX CONSTRUCTIONS' },
  { route: '/gallery', filename: 'gallery.html', title: 'Gallery | APEX CONSTRUCTIONS' },
  { route: '/contact', filename: 'contact.html', title: 'Contact Us | APEX CONSTRUCTIONS' },
  { route: '/privacy', filename: 'privacy.html', title: 'Privacy Policy | APEX CONSTRUCTIONS' },
  { route: '/terms', filename: 'terms.html', title: 'Terms & Conditions | APEX CONSTRUCTIONS' },
];

const modalHTML = `
<!-- CONSULTATION MODAL DIALOG -->
<div id="consultationModal" class="hidden fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/75 p-4 backdrop-blur-md">
  <div class="relative w-full max-w-[560px] rounded-[24px] bg-white p-6 md:p-9 shadow-2xl">
    <button id="closeConsultationBtn" type="button" class="absolute right-5 top-5 p-1 text-muted-ink hover:text-ink transition-colors cursor-pointer bg-transparent border-none" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>
    </button>
    <div id="consultationFormSuccess" style="display: none;" class="py-8 text-center">
      <div class="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-green/10 text-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
      </div>
      <h3 class="font-display text-2xl font-semibold text-ink">Consultation Request Received</h3>
      <p class="mt-2 text-sm text-muted-ink leading-relaxed">A senior engineer from APEX CONSTRUCTIONS will review your project requirements and call you back within one business day.</p>
    </div>
    <div id="consultationFormContent">
      <div class="mb-6">
        <span class="text-xs font-semibold uppercase tracking-[0.12em] text-blue">Engineering Consultation</span>
        <h3 class="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">Get Free Consultation</h3>
        <p class="mt-1.5 text-[13.5px] text-muted-ink">Tell us about your site, scope, and timeline. No obligation.</p>
      </div>
      <form id="consultationForm" class="flex flex-col gap-4">
        <div>
          <label class="mb-1.5 block text-xs font-medium text-ink-2">Full Name</label>
          <input type="text" required placeholder="e.g. Ramesh Krishnan" class="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink outline-none focus:border-blue">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div>
            <label class="mb-1.5 block text-xs font-medium text-ink-2">Phone Number</label>
            <input type="tel" required placeholder="+91 86108 36498" class="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink outline-none focus:border-blue">
          </div>
          <div>
            <label class="mb-1.5 block text-xs font-medium text-ink-2">Email Address</label>
            <input type="email" required placeholder="client@company.com" class="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink outline-none focus:border-blue">
          </div>
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-ink-2">Project Discipline</label>
          <select class="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-blue">
            <option value="Industrial Construction">Industrial Construction (Plant / Warehouse)</option>
            <option value="Commercial Construction">Commercial Building / Office</option>
            <option value="Residential Construction">Residential Villa / Apartment</option>
            <option value="Steel Structure Works">Steel Structure Works (PEB)</option>
            <option value="Turnkey Construction">Turnkey Infrastructure Delivery</option>
          </select>
        </div>
        <div>
          <label class="mb-1.5 block text-xs font-medium text-ink-2">Project Notes / Location</label>
          <textarea rows="3" placeholder="Share details about site location, plot size, or expected start date..." class="w-full rounded-lg border border-line px-3.5 py-2.5 text-sm text-ink outline-none focus:border-blue resize-none"></textarea>
        </div>
        <button type="submit" class="mt-2 w-full rounded-full bg-gradient-to-r from-amber to-orange py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.01] cursor-pointer border-none shadow-sm">Submit Consultation Request</button>
      </form>
    </div>
  </div>
</div>
`;

console.log('Starting pure HTML export and optimization...');

for (const item of routes) {
  const url = `${BASE_URL}${item.route}`;
  console.log(`Dumping ${url} -> ${item.filename}`);
  try {
    const cmd = `${CHROME_PATH} --headless --disable-gpu --dump-dom "${url}"`;
    let html = execSync(cmd, { encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 });

    // Clean up Vite/React refresh scripts & dev inlined style blocks
    html = html.replace(/<script type="module">[\s\S]*?<\/script>/gi, '');
    html = html.replace(/<script type="module" src="\/@vite\/client"><\/script>/gi, '');
    html = html.replace(/<script type="module" src="\/src\/main\.jsx"><\/script>/gi, '');
    html = html.replace(/<script type="module" crossorigin="" src="[^"]*"><\/script>/gi, '');
    html = html.replace(/<style type="text\/css" data-vite-dev-id="[^"]*">[\s\S]*?<\/style>/gi, '');
    html = html.replace(/<link rel="stylesheet" crossorigin="" href="[^"]*">/gi, '');

    // Set page title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${item.title}</title>`);

    // Ensure style.css and fonts are present in <head>
    const headInsert = `
    <!-- Standalone CSS & Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600&family=Inter+Tight:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              ink: '#0B0F19',
              'ink-2': '#1E293B',
              'muted-ink': '#64748B',
              paper: '#FFFFFF',
              'paper-2': '#F8FAFC',
              'paper-3': '#F1F5F9',
              line: '#E2E8F0',
              blue: '#D97706',
              amber: '#F59E0B',
              orange: '#EA580C',
              green: '#EA580C'
            },
            fontFamily: {
              display: ['Fraunces', 'serif'],
              sans: ['"Inter Tight"', 'sans-serif']
            }
          }
        }
      }
    </script>
`;
    html = html.replace('</head>', `${headInsert}\n  </head>`);

    // Fix internal navigation links
    html = html.replace(/href="\/"/g, 'href="index.html"');
    html = html.replace(/href="\/about"/g, 'href="about.html"');
    html = html.replace(/href="\/strengths-services"/g, 'href="strengths-services.html"');
    html = html.replace(/href="\/projects\/ongoing"/g, 'href="ongoing-projects.html"');
    html = html.replace(/href="\/projects\/completed"/g, 'href="completed-projects.html"');
    html = html.replace(/href="\/gallery"/g, 'href="gallery.html"');
    html = html.replace(/href="\/contact"/g, 'href="contact.html"');
    html = html.replace(/href="\/privacy"/g, 'href="privacy.html"');
    html = html.replace(/href="\/terms"/g, 'href="terms.html"');

    // Fix asset image paths
    html = html.replace(/src="\/assets\/logo\.png"/g, 'src="logo.png"');
    html = html.replace(/src="\.\/assets\/logo\.png"/g, 'src="logo.png"');
    html = html.replace(/src="\/logo\.png"/g, 'src="logo.png"');
    html = html.replace(/src="\/(projects|images|logos)\//g, 'src="$1/');

    // Ensure buttons that trigger consultation have the open-consultation-btn class
    html = html.replace(/<button([^>]*)>([^<]*)(Get Free Consultation|Start a project|Schedule Consultation|Arrange a Site Walkthrough|Start Your Project)([^<]*)<\/button>/gi,
      (match, attrs, pre, text, post) => {
        if (!attrs.includes('open-consultation-btn')) {
          attrs = attrs.replace(/class="([^"]*)"/i, 'class="$1 open-consultation-btn"');
        }
        return `<button${attrs}>${pre}${text}${post}</button>`;
      }
    );

    // In index.html, ensure canvas and hero elements have IDs matching hero.js
    if (item.isHome) {
      html = html.replace(/<section([^>]*style="[^"]*height:\s*400vh[^"]*"[^>]*)>/i, '<section id="heroContainer"$1>');
      html = html.replace(/<canvas([^>]*)><\/canvas>/i, '<canvas id="heroCanvas"$1></canvas>');
      html = html.replace(/<div([^>]*class="[^"]*fixed top-0[^"]*"[^>]*)>/i, '<div id="heroProgressContainer"$1>');
      html = html.replace(/<div([^>]*class="[^"]*h-full bg-blue[^"]*"[^>]*)>/i, '<div id="heroProgressBar"$1>');
    }

    // Embed consultation modal before </body>
    let bodyEnd = `
    ${modalHTML}

    <!-- Global Scripts -->
    <script src="js/main.js" defer></script>
`;
    if (item.isHome) {
      bodyEnd += `    <script src="js/hero.js" defer></script>\n`;
    }
    html = html.replace('</body>', `${bodyEnd}  </body>`);

    // Save to root directory
    fs.writeFileSync(item.filename, html, 'utf-8');
    console.log(`Saved clean ${item.filename} (${(html.length / 1024).toFixed(1)} KB)`);

    // If strengths-services.html, also make a copy as services.html for convenience
    if (item.filename === 'strengths-services.html') {
      fs.writeFileSync('services.html', html, 'utf-8');
      console.log('Saved services.html (alias)');
    }
  } catch (err) {
    console.error(`Error processing ${item.route}:`, err.message);
  }
}

console.log('Pure HTML export complete!');
