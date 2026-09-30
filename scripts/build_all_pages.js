import fs from 'fs';
import path from 'path';

function getHeaderHTML(activePage) {
  const isHome = activePage === 'home';
  const isAbout = activePage === 'about';
  const isServices = activePage === 'services';
  const isProjects = activePage === 'projects';
  const isOngoing = activePage === 'ongoing';
  const isCompleted = activePage === 'completed';
  const isGallery = activePage === 'gallery';
  const isContact = activePage === 'contact';

  const homeActive = isHome ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const homeInd = isHome ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const aboutActive = isAbout ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const aboutInd = isAbout ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const servicesActive = isServices ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const servicesInd = isServices ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const projectsActive = (isProjects || isOngoing || isCompleted) ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const projectsInd = (isProjects || isOngoing || isCompleted) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const galleryActive = isGallery ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const galleryInd = isGallery ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const contactActive = isContact ? 'text-ink' : 'text-ink-2 hover:text-ink';
  const contactInd = isContact ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100';

  const mobHomeActive = isHome ? 'text-blue' : 'text-ink';
  const mobAboutActive = isAbout ? 'text-blue' : 'text-ink';
  const mobServicesActive = isServices ? 'text-blue' : 'text-ink';
  const mobOngoingActive = isOngoing ? 'text-blue font-semibold' : 'text-ink-2 hover:text-ink';
  const mobCompletedActive = isCompleted ? 'text-blue font-semibold' : 'text-ink-2 hover:text-ink';
  const mobGalleryActive = isGallery ? 'text-blue' : 'text-ink';
  const mobContactActive = isContact ? 'text-blue' : 'text-ink';

  return `<!-- PERSISTENT FIXED HEADER -->
<header class="fixed inset-x-0 top-0 z-50 transition-all duration-300 border-transparent bg-white/70 backdrop-blur-md">
  <!-- TOP OPERATIONAL TELEMETRY RIBBON -->
  <div class="hidden md:block bg-ink text-white/70 py-1.5 border-b border-white/10 font-mono text-[11px]">
    <div class="container-x flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-blue animate-pulse"></span>
        <span>ACTIVE SITES OPERATING IN TRICHY · CHIDAMBARAM · TIRUNELVELI</span>
      </div>
      <div class="flex items-center gap-4 text-white/60">
        <span>IS-CODE STRUCTURAL RIGOR</span>
        <span>·</span>
        <a href="tel:+918610836498" class="text-amber hover:underline">+91 86108 36498</a>
      </div>
    </div>
  </div>

  <div class="container-x flex h-[68px] md:h-[72px] items-center justify-between">
    <!-- LOGO -->
    <a href="index.html" aria-label="APEX CONSTRUCTIONS home" class="inline-flex items-center shrink-0">
      <img src="logo.png" alt="APEX CONSTRUCTIONS" class="h-9 md:h-11 w-auto object-contain transition-all duration-300">
    </a>

    <!-- DESKTOP NAVIGATION -->
    <nav class="hidden items-center gap-1 xl:gap-2.5 lg:flex">
      <!-- HOME -->
      <a href="index.html" class="group relative px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${homeActive}">
        <span>Home</span>
        <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${homeInd}"></span>
      </a>

      <!-- ABOUT US -->
      <a href="about.html" class="group relative px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${aboutActive}">
        <span>About Us</span>
        <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${aboutInd}"></span>
      </a>

      <!-- STRENGTHS & SERVICES -->
      <a href="strengths-services.html" class="group relative px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${servicesActive}">
        <span>Strengths &amp; Services</span>
        <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${servicesInd}"></span>
      </a>

      <!-- PROJECTS WITH DROPDOWN -->
      <div id="projectsDropdownContainer" class="relative group">
        <a href="completed-projects.html" class="group relative inline-flex items-center gap-1 px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${projectsActive}">
          <span>Projects</span>
          <svg id="projectsChevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-3.5 w-3.5 transition-transform duration-300"><path d="m6 9 6 6 6-6"></path></svg>
          <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${projectsInd}"></span>
        </a>

        <!-- DROPDOWN MENU -->
        <div id="projectsDropdownMenu" class="hidden group-hover:block absolute left-0 top-full z-50 min-w-[210px] rounded-xl border border-line bg-white p-2 shadow-xl animate-in fade-in duration-200">
          <a href="ongoing-projects.html" class="flex items-center justify-between px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink hover:bg-paper-2 rounded-lg transition-colors no-underline">
            <span>Ongoing Projects</span>
            <span class="h-2 w-2 animate-pulse rounded-full bg-green"></span>
          </a>
          <a href="completed-projects.html" class="block px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink hover:bg-paper-2 rounded-lg transition-colors no-underline">
            Completed Projects
          </a>
        </div>
      </div>

      <!-- GALLERY -->
      <a href="gallery.html" class="group relative px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${galleryActive}">
        <span>Gallery</span>
        <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${galleryInd}"></span>
      </a>

      <!-- CONTACT US -->
      <a href="contact.html" class="group relative px-3 py-1.5 text-[14px] font-medium transition-colors no-underline whitespace-nowrap ${contactActive}">
        <span>Contact Us</span>
        <span class="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${contactInd}"></span>
      </a>
    </nav>

    <!-- RIGHT ACTION: GET FREE CONSULTATION -->
    <div class="flex items-center gap-2 shrink-0">
      <button type="button" class="open-consultation-btn group hidden h-10 items-center gap-2 rounded-full bg-gradient-to-r from-amber to-orange pl-4 pr-1 text-[13.5px] font-bold text-ink transition-all hover:opacity-95 shadow-sm md:inline-flex cursor-pointer border-none shrink-0">
        <span>Get Free Consultation</span>
        <span class="grid h-7 w-7 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:rotate-45 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-3.5 w-3.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </span>
      </button>

      <!-- MOBILE MENU TOGGLE -->
      <button id="mobileMenuToggle" type="button" class="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden cursor-pointer bg-transparent" aria-label="Toggle Menu">
        <svg id="mobileMenuIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-ink"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>

  <!-- MOBILE MENU DRAWER -->
  <div id="mobileMenuDrawer" class="hidden border-b border-line bg-white px-6 py-6 lg:hidden animate-in slide-in-from-top-4 duration-300">
    <div class="flex flex-col gap-2">
      <a href="index.html" class="text-left text-base font-medium py-2.5 no-underline ${mobHomeActive}">Home</a>
      <a href="about.html" class="text-left text-base font-medium py-2.5 no-underline ${mobAboutActive}">About Us</a>
      <a href="strengths-services.html" class="text-left text-base font-medium py-2.5 no-underline ${mobServicesActive}">Strengths &amp; Services</a>
      <div class="py-2 border-y border-line/60 my-1">
        <div class="text-xs uppercase tracking-wider text-muted-ink font-semibold mb-2">Projects</div>
        <div class="flex flex-col gap-1.5 pl-3">
          <a href="ongoing-projects.html" class="text-sm font-medium py-1.5 no-underline flex items-center justify-between ${mobOngoingActive}">
            <span>Ongoing Projects</span>
            <span class="h-2 w-2 animate-pulse rounded-full bg-green"></span>
          </a>
          <a href="completed-projects.html" class="text-sm font-medium py-1.5 no-underline ${mobCompletedActive}">Completed Projects</a>
        </div>
      </div>
      <a href="gallery.html" class="text-left text-base font-medium py-2.5 no-underline ${mobGalleryActive}">Gallery</a>
      <a href="contact.html" class="text-left text-base font-medium py-2.5 no-underline ${mobContactActive}">Contact Us</a>
      <button type="button" class="open-consultation-btn mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-amber to-orange text-sm font-bold text-ink cursor-pointer border-none shadow-sm">
        Get Free Consultation
      </button>
    </div>
  </div>
</header>`;
}

function getFooterHTML() {
  return `<!-- PERSISTENT FOOTER -->
<footer class="relative overflow-hidden bg-ink text-white">
  <div class="blueprint-bg pointer-events-none absolute inset-0 opacity-[0.06]"></div>
  <div class="container-x relative pt-24 pb-10">
    <div class="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <a href="index.html" aria-label="APEX CONSTRUCTIONS home" class="inline-flex items-center">
          <img alt="APEX CONSTRUCTIONS" class="h-10 md:h-12 w-auto object-contain transition-all duration-300 brightness-0 invert" src="logo.png">
        </a>
        <p class="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
          Engineering tomorrow's infrastructure, today. Headquartered in Pon nagar 4th Cross, Trichy – 620001, building across South India since 2021.
        </p>
        <form class="mt-8 max-w-sm" onsubmit="event.preventDefault(); alert('Thank you for subscribing to APEX technical updates.'); this.reset();">
          <label class="text-xs uppercase tracking-[0.18em] text-white/50">Newsletter</label>
          <div class="mt-3 flex h-12 items-center rounded-full border border-white/15 bg-white/[0.04] pl-5 pr-1">
            <input required="" placeholder="your@email.com" class="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40 text-white" type="email" value="">
            <button type="submit" class="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-amber to-orange text-ink transition-transform hover:scale-105 cursor-pointer border-none shadow-sm" aria-label="Subscribe">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </button>
          </div>
          <p class="mt-2 text-[11px] font-mono uppercase tracking-wider text-white/40">ISO 9001:2015 &amp; IS-Code Compliant</p>
        </form>
      </div>

      <div>
        <div class="text-xs uppercase tracking-[0.18em] text-white/50">Company</div>
        <ul class="mt-5 space-y-3 list-none p-0">
          <li><a href="index.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Home</a></li>
          <li><a href="about.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">About Us</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Strengths &amp; Services</a></li>
          <li><a href="gallery.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Gallery</a></li>
          <li><a href="contact.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <div class="text-xs uppercase tracking-[0.18em] text-white/50">Projects</div>
        <ul class="mt-5 space-y-3 list-none p-0">
          <li><a href="ongoing-projects.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Ongoing Projects</a></li>
          <li><a href="completed-projects.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Completed Projects</a></li>
        </ul>
      </div>

      <div>
        <div class="text-xs uppercase tracking-[0.18em] text-white/50">Services</div>
        <ul class="mt-5 space-y-3 list-none p-0">
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Industrial Construction</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Commercial Construction</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Residential Construction</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Steel Structure Works</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Infrastructure Projects</a></li>
          <li><a href="strengths-services.html" class="text-[15px] text-white/80 transition-colors hover:text-white no-underline">Turnkey Construction</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
      <p>© 2026 APEX CONSTRUCTIONS Engineering &amp; Infrastructure. All rights reserved.</p>
      <div class="flex gap-6">
        <a href="privacy.html" class="text-white/50 hover:text-white no-underline transition-colors">Privacy</a>
        <a href="terms.html" class="text-white/50 hover:text-white no-underline transition-colors">Terms</a>
      </div>
    </div>
  </div>

  <div aria-hidden="true" class="container-x relative pb-10">
    <div class="font-display text-display-1 leading-none tracking-[-0.05em] text-white/[0.04] select-none pointer-events-none">
      APEX CONSTRUCTIONS
    </div>
  </div>
</footer>

<!-- FLOATING ACTION BUTTONS -->
<div class="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50 flex flex-col gap-3 lg:gap-4 pointer-events-none">
  <a href="https://wa.me/918668179136" target="_blank" rel="noopener noreferrer" class="pointer-events-auto group relative flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)]" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 448 512" fill="currentColor" class="h-6 w-6 lg:h-7 lg:w-7"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.1 2.8 3.4 35.1 53.6 85 75.1 49.9 21.6 49.9 14.4 58.9 13.5 9-1 29.1-11.9 33.2-23.4 4.1-11.6 4.1-21.5 2.8-23.5-1.2-2.1-4.8-3.4-10.3-6.1z"></path></svg>
  </a>
  <a href="tel:+918610836498" class="pointer-events-auto group relative flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-blue text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(35,135,219,0.3)]" aria-label="Call Us">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-5 w-5 lg:h-6 lg:w-6"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
  </a>
</div>`;
}

const pageConfigs = [
  { file: 'index.html', active: 'home', isHome: true },
  { file: 'about.html', active: 'about' },
  { file: 'strengths-services.html', active: 'services' },
  { file: 'services.html', active: 'services' },
  { file: 'ongoing-projects.html', active: 'ongoing' },
  { file: 'completed-projects.html', active: 'completed' },
  { file: 'gallery.html', active: 'gallery' },
  { file: 'contact.html', active: 'contact' },
  { file: 'privacy.html', active: 'none' },
  { file: 'terms.html', active: 'none' },
];

console.log('Mapping all pages with unified navigation, header and footer...');

for (const config of pageConfigs) {
  if (!fs.existsSync(config.file)) {
    console.warn(`File ${config.file} does not exist, skipping.`);
    continue;
  }

  let html = fs.readFileSync(config.file, 'utf-8');

  // Replace Header
  const headerRegex = /<header[\s\S]*?<\/header>/i;
  const newHeader = getHeaderHTML(config.active);
  if (headerRegex.test(html)) {
    html = html.replace(headerRegex, newHeader);
  }

  // Replace Footer
  const footerRegex = /<footer[\s\S]*?<\/footer>[\s\S]*?(<div id="consultationModal"|<!-- Global Scripts -->)/i;
  const newFooter = getFooterHTML();
  if (footerRegex.test(html)) {
    html = html.replace(footerRegex, `${newFooter}\n$1`);
  }

  // Convert buttons with onClick navigate to real anchor links
  html = html.replace(/<button[^>]*onClick="[^"]*navigate\('([^']*)'\)"[^>]*>([\s\S]*?)<\/button>/gi, (m, dest, inner) => {
    let href = 'index.html';
    if (dest === '/about') href = 'about.html';
    else if (dest === '/strengths-services') href = 'strengths-services.html';
    else if (dest === '/projects/ongoing') href = 'ongoing-projects.html';
    else if (dest === '/projects/completed' || dest === '/projects') href = 'completed-projects.html';
    else if (dest === '/gallery') href = 'gallery.html';
    else if (dest === '/contact') href = 'contact.html';
    return `<a href="${href}" class="no-underline">${inner}</a>`;
  });

  // Ensure all buttons with "Contact Site Office" link to contact.html
  html = html.replace(/<button([^>]*)>Contact Site Office<\/button>/gi, '<a href="contact.html" class="inline-flex h-14 items-center rounded-full border border-white/30 px-8 text-[15px] font-medium text-white transition-colors hover:border-white no-underline bg-transparent">Contact Site Office</a>');

  // Ensure all Consultation buttons trigger open-consultation-btn
  html = html.replace(/<button([^>]*)>([\s\S]*?)(Arrange a Site Walkthrough|Start a project|Start Your Project|Consult an Engineering Lead|Get Free Consultation|Schedule Consultation)([\s\S]*?)<\/button>/gi,
    (match, attrs, pre, text, post) => {
      if (!attrs.includes('open-consultation-btn')) {
        attrs = attrs.replace(/class="([^"]*)"/i, 'class="$1 open-consultation-btn"');
      }
      return `<button${attrs}>${pre}${text}${post}</button>`;
    }
  );

  // Fix absolute asset paths to relative paths so subdomain/subfolder hosting works flawlessly
  html = html.replace(/(href|src)=["']\/(assets\/[^"']+)["']/gi, '$1="$2"');
  html = html.replace(/(href|src)=["']\/(css\/[^"']+)["']/gi, '$1="$2"');
  html = html.replace(/(href|src)=["']\/(js\/[^"']+)["']/gi, '$1="$2"');
  html = html.replace(/(href|src)=["']\/(logo\.png)["']/gi, '$1="$2"');
  html = html.replace(/(href|src)=["']\/(profile\.webp)["']/gi, '$1="$2"');
  html = html.replace(/(href|src)=["']\/(favicon\.svg)["']/gi, '$1="$2"');

  fs.writeFileSync(config.file, html, 'utf-8');
  console.log(`Updated and mapped ${config.file}`);

  // Also copy to dist/
  const distPath = path.join('dist', config.file);
  fs.writeFileSync(distPath, html, 'utf-8');
}

console.log('All pages successfully mapped and updated!');
