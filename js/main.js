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

  // 6. GALLERY & PROJECT CATEGORY FILTERING (if applicable)
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterButtons.length && filterItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        filterButtons.forEach(b => {
          b.classList.remove('bg-blue', 'text-white');
          b.classList.add('bg-white', 'text-ink-2');
        });
        btn.classList.add('bg-blue', 'text-white');
        btn.classList.remove('bg-white', 'text-ink-2');

        filterItems.forEach(item => {
          const itemCat = item.getAttribute('data-category');
          if (category === 'all' || itemCat === category) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
