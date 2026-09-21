import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../router/Router';

export default function KPHeader({ onOpenConsultation }) {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path) => {
    setMobileMenu(false);
    setProjectsDropdown(false);
    navigate(path);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Strengths & Services', path: '/strengths-services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-line bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]'
            : 'border-b border-transparent bg-white/70 backdrop-blur-md'
        }`}
      >
        {/* TOP OPERATIONAL TELEMETRY RIBBON */}
        <div className="hidden md:block bg-ink text-white/70 py-1.5 border-b border-white/10 font-mono text-[11px]">
          <div className="container-x flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue animate-pulse" />
              <span>ACTIVE SITES OPERATING IN TRICHY · CHIDAMBARAM · TIRUNELVELI</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <span>IS-CODE STRUCTURAL RIGOR</span>
              <span>·</span>
              <a href="tel:+918610836498" className="text-amber hover:underline">+91 86108 36498</a>
            </div>
          </div>
        </div>

        <div className="container-x flex h-[68px] md:h-[72px] items-center justify-between">
          {/* LOGO */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            aria-label="APEX CONSTRUCTIONS home"
            className="inline-flex items-center shrink-0"
          >
            <img
              src="/assets/logo.png"
              alt="APEX CONSTRUCTIONS"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-1 xl:gap-2.5 lg:flex">
            {/* HOME */}
            <button
              type="button"
              onClick={() => handleNav('/')}
              className={`group relative px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                currentPath === '/' ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                  currentPath === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* ABOUT US */}
            <button
              type="button"
              onClick={() => handleNav('/about')}
              className={`group relative px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                currentPath === '/about' ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              <span>About Us</span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                  currentPath === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* STRENGTHS & SERVICES */}
            <button
              type="button"
              onClick={() => handleNav('/strengths-services')}
              className={`group relative px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                currentPath === '/strengths-services' ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              <span>Strengths & Services</span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                  currentPath === '/strengths-services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* PROJECTS WITH DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <button
                type="button"
                onClick={() => handleNav('/projects/completed')}
                className={`group relative inline-flex items-center gap-1 px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                  currentPath.startsWith('/projects') ? 'text-ink' : 'text-ink-2 hover:text-ink'
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-300"
                  style={{ transform: projectsDropdown ? 'rotate(180deg)' : 'none' }}
                />
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                    currentPath.startsWith('/projects') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>

              {projectsDropdown && (
                <div className="absolute left-0 top-full z-50 min-w-[210px] rounded-xl border border-line bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    type="button"
                    onClick={() => handleNav('/projects/ongoing')}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink hover:bg-paper-2 rounded-lg transition-colors cursor-pointer bg-transparent border-none flex items-center justify-between"
                  >
                    <span>Ongoing Projects</span>
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNav('/projects/completed')}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-ink-2 hover:text-ink hover:bg-paper-2 rounded-lg transition-colors cursor-pointer bg-transparent border-none"
                  >
                    Completed Projects
                  </button>
                </div>
              )}
            </div>

            {/* GALLERY */}
            <button
              type="button"
              onClick={() => handleNav('/gallery')}
              className={`group relative px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                currentPath === '/gallery' ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              <span>Gallery</span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                  currentPath === '/gallery' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>

            {/* CONTACT US */}
            <button
              type="button"
              onClick={() => handleNav('/contact')}
              className={`group relative px-3 py-1.5 text-[14px] font-medium transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap ${
                currentPath === '/contact' ? 'text-ink' : 'text-ink-2 hover:text-ink'
              }`}
            >
              <span>Contact Us</span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-blue to-green transition-transform duration-500 ${
                  currentPath === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          </nav>

          {/* RIGHT ACTION: GET FREE CONSULTATION */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group hidden h-10 items-center gap-2 rounded-full bg-gradient-to-r from-amber to-orange pl-4 pr-1 text-[13.5px] font-bold text-ink transition-all hover:opacity-95 shadow-sm md:inline-flex cursor-pointer border-none shrink-0"
            >
              <span>Get Free Consultation</span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:rotate-45 shrink-0">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden cursor-pointer bg-transparent"
              aria-label="Toggle Menu"
            >
              {mobileMenu ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
        {mobileMenu && (
          <div className="border-b border-line bg-white px-6 py-6 lg:hidden animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => handleNav('/')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/' ? 'text-blue' : 'text-ink'
                }`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleNav('/about')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/about' ? 'text-blue' : 'text-ink'
                }`}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleNav('/strengths-services')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/strengths-services' ? 'text-blue' : 'text-ink'
                }`}
              >
                Strengths & Services
              </button>
              <button
                type="button"
                onClick={() => handleNav('/projects/ongoing')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none flex items-center justify-between ${
                  currentPath === '/projects/ongoing' ? 'text-blue' : 'text-ink'
                }`}
              >
                <span>Ongoing Projects</span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-green" />
              </button>
              <button
                type="button"
                onClick={() => handleNav('/projects/completed')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/projects/completed' ? 'text-blue' : 'text-ink'
                }`}
              >
                Completed Projects
              </button>
              <button
                type="button"
                onClick={() => handleNav('/gallery')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/gallery' ? 'text-blue' : 'text-ink'
                }`}
              >
                Gallery
              </button>
              <button
                type="button"
                onClick={() => handleNav('/contact')}
                className={`text-left text-base font-medium py-2.5 cursor-pointer bg-transparent border-none ${
                  currentPath === '/contact' ? 'text-blue' : 'text-ink'
                }`}
              >
                Contact Us
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenu(false);
                  onOpenConsultation();
                }}
                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-orange text-sm font-bold text-ink cursor-pointer border-none shadow-md"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

