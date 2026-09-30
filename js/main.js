// js/main.js - Global Interactions, Navigation, Modal, and FAQ Accordions
document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY HEADER TRANSITION ON SCROLL
  const header = document.querySelector('header');
  if (header) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('border-b', 'border-line', 'bg-white/95', 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]');
        header.classList.remove('border-transparent', 'bg-white/70');
      } else {
        header.classList.remove('border-b', 'border-line', 'bg-white/95', 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]');
        header.classList.add('border-transparent', 'bg-white/70');
      }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  // 2. MOBILE MENU DRAWER TOGGLE
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileMenuDrawer');
  const mobileIcon = document.getElementById('mobileMenuIcon');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileDrawer.classList.contains('hidden');
      if (isOpen) {
        mobileDrawer.classList.add('hidden');
        if (mobileIcon) {
          mobileIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"></path>';
        }
      } else {
        mobileDrawer.classList.remove('hidden');
        if (mobileIcon) {
          mobileIcon.innerHTML = '<path d="M18 6 6 18M6 6l12 12"></path>';
        }
      }
    });

    // Close mobile drawer when clicking any link inside it
    mobileDrawer.querySelectorAll('a, button').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        if (mobileIcon) {
          mobileIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"></path>';
        }
      });
    });
  }

  // 3. DESKTOP PROJECTS DROPDOWN
  const projectsDropdownContainer = document.getElementById('projectsDropdownContainer');
  const projectsDropdownMenu = document.getElementById('projectsDropdownMenu');
  const projectsChevron = document.getElementById('projectsChevron');

  if (projectsDropdownContainer && projectsDropdownMenu) {
    let timeout;
    const showMenu = () => {
      clearTimeout(timeout);
      projectsDropdownMenu.classList.remove('hidden');
      if (projectsChevron) projectsChevron.style.transform = 'rotate(180deg)';
    };
    const hideMenu = () => {
      timeout = setTimeout(() => {
        projectsDropdownMenu.classList.add('hidden');
        if (projectsChevron) projectsChevron.style.transform = 'none';
      }, 150);
    };

    projectsDropdownContainer.addEventListener('mouseenter', showMenu);
    projectsDropdownContainer.addEventListener('mouseleave', hideMenu);
  }

  // 4. CONSULTATION MODAL
  const modal = document.getElementById('consultationModal');
  const closeBtn = document.getElementById('closeConsultationBtn');
  const form = document.getElementById('consultationForm');
  const formContent = document.getElementById('consultationFormContent');
  const formSuccess = document.getElementById('consultationFormSuccess');

  function openModal() {
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (formContent) formContent.style.display = 'block';
      if (formSuccess) formSuccess.style.display = 'none';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  // Trigger modal on any button with data-open-consultation or .open-consultation-btn
  document.querySelectorAll('[data-open-consultation], .open-consultation-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formContent && formSuccess) {
        formContent.style.display = 'none';
        formSuccess.style.display = 'block';
        setTimeout(() => {
          closeModal();
          form.reset();
        }, 3500);
      }
    });
  }

  // 5. FAQ ACCORDION INTERACTIVITY
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-answer');
    const chevron = item.querySelector('.faq-chevron');

    if (btn && content) {
      btn.addEventListener('click', () => {
        const isExpanded = !content.classList.contains('hidden');
        // Close others in same accordion
        const parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) {
              const otherContent = other.querySelector('.faq-answer');
              const otherChevron = other.querySelector('.faq-chevron');
              if (otherContent) otherContent.classList.add('hidden');
              if (otherChevron) otherChevron.style.transform = 'none';
            }
          });
        }
        if (isExpanded) {
          content.classList.add('hidden');
          if (chevron) chevron.style.transform = 'none';
        } else {
          content.classList.remove('hidden');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 6. GALLERY & PROJECT CATEGORY FILTERING
  const filterContainers = document.querySelectorAll('.flex.flex-wrap.gap-2\\.5');
  filterContainers.forEach(container => {
    const buttons = container.querySelectorAll('button');
    if (!buttons.length) return;

    const firstText = buttons[0].textContent.trim();
    if (firstText !== 'All') return;

    const parentSection = container.closest('section');
    const nextSection = parentSection ? parentSection.nextElementSibling : null;
    const grid = nextSection ? nextSection.querySelector('.grid') : null;
    if (!grid) return;

    const cards = grid.children;

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedCat = btn.textContent.trim();

        // Update active styles on buttons
        buttons.forEach(b => {
          b.className = 'h-10 rounded-full px-5 text-xs font-medium transition-all cursor-pointer border border-line bg-paper text-ink hover:border-ink/40';
        });
        btn.className = 'h-10 rounded-full px-5 text-xs font-medium transition-all cursor-pointer border-ink bg-ink text-white shadow-sm';

        // Filter cards
        Array.from(cards).forEach(card => {
          if (selectedCat === 'All') {
            card.style.display = '';
            return;
          }
          const badge = card.querySelector('.rounded-full');
          const badgeText = badge ? badge.textContent.trim() : '';
          if (badgeText.toLowerCase() === selectedCat.toLowerCase()) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });

  // 7. GALLERY LIGHTBOX MODAL
  const galleryGrid = document.querySelector('.grid.gap-6.sm\\:grid-cols-2.lg\\:grid-cols-3');
  if (galleryGrid) {
    const lightbox = document.createElement('div');
    lightbox.id = 'galleryLightbox';
    lightbox.className = 'hidden fixed inset-0 z-[110] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4';
    lightbox.innerHTML = `
      <div class="relative max-w-4xl w-full overflow-hidden rounded-[28px] border border-white/20 bg-ink shadow-2xl" onclick="event.stopPropagation()">
        <button id="closeLightboxBtn" type="button" class="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white hover:text-ink cursor-pointer border-none" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"></path></svg>
        </button>
        <img id="lightboxImg" src="" alt="" class="max-h-[75vh] w-full object-contain bg-black">
        <div class="p-6 text-white border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <div>
            <span id="lightboxCategory" class="rounded-full bg-white/10 px-3 py-0.5 text-xs font-mono text-amber"></span>
            <h3 id="lightboxTitle" class="mt-2 font-display text-2xl font-medium"></h3>
            <p id="lightboxLocation" class="text-xs text-white/70 mt-1 flex items-center gap-1"></p>
          </div>
          <button type="button" class="open-consultation-btn inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-paper-2 cursor-pointer border-none">
            <span>Inquire About Similar Build</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const lbImg = lightbox.querySelector('#lightboxImg');
    const lbCat = lightbox.querySelector('#lightboxCategory');
    const lbTitle = lightbox.querySelector('#lightboxTitle');
    const lbLoc = lightbox.querySelector('#lightboxLocation');
    const closeLb = lightbox.querySelector('#closeLightboxBtn');

    function closeLightbox() {
      lightbox.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    if (closeLb) closeLb.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', closeLightbox);

    const lbConsultBtn = lightbox.querySelector('.open-consultation-btn');
    if (lbConsultBtn) {
      lbConsultBtn.addEventListener('click', () => {
        closeLightbox();
        openModal();
      });
    }

    galleryGrid.querySelectorAll('.group').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const cat = item.querySelector('.rounded-full');
        const title = item.querySelector('h3');
        const loc = item.querySelector('.mt-2 span');

        if (img && lbImg) lbImg.src = img.src;
        if (cat && lbCat) lbCat.textContent = cat.textContent.trim();
        if (title && lbTitle) lbTitle.textContent = title.textContent.trim();
        if (loc && lbLoc) {
          lbLoc.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> ${loc.textContent.trim()}`;
        }

        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // 8. CONTACT FORM SUBMISSION
  const contactForm = document.querySelector('main form');
  if (contactForm && (window.location.pathname.includes('contact') || window.location.href.includes('contact'))) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting APEX CONSTRUCTIONS! A senior civil engineer will review your inquiry and respond within one business day.');
      contactForm.reset();
    });
  }
});
