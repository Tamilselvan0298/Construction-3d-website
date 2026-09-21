import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from '../../router/Router';

export default function KPFooter() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLink = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="blueprint-bg pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="container-x relative pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* COL 1: LOGO, ADDRESS & NEWSLETTER */}
          <div>
            <a
              href="/"
              onClick={handleLink('/')}
              aria-label="APEX CONSTRUCTIONS home"
              className="inline-flex items-center"
            >
              <img
                src="/assets/logo.png"
                alt="APEX CONSTRUCTIONS"
                className="h-14 w-auto object-contain transition-all duration-300 brightness-0 invert"
              />
            </a>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              Engineering tomorrow's infrastructure, today. Headquartered in Pon nagar 4th Cross, Trichy – 620001, building across South India since 2021.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-sm">
              <label className="text-xs uppercase tracking-[0.18em] text-white/50">
                Newsletter
              </label>
              <div className="mt-3 flex h-12 items-center rounded-full border border-white/15 bg-white/[0.04] pl-5 pr-1">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40 text-white"
                />
                <button
                  type="submit"
                  className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-amber to-orange text-ink transition-transform hover:scale-105 cursor-pointer border-none shadow-sm"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              {subscribed ? (
                <p className="mt-2 text-xs text-amber font-mono">
                  Thank you for subscribing to APEX CONSTRUCTIONS updates!
                </p>
              ) : (
                <p className="mt-2 text-[11px] font-mono uppercase tracking-wider text-white/40">
                  ISO 9001:2015 & IS-Code Compliant
                </p>
              )}
            </form>
          </div>

          {/* COL 2: COMPANY */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Company
            </div>
            <ul className="mt-5 space-y-3 list-none p-0">
              <li>
                <a
                  href="/"
                  onClick={handleLink('/')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={handleLink('/about')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Strengths & Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={handleLink('/gallery')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={handleLink('/contact')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: PROJECTS */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Projects
            </div>
            <ul className="mt-5 space-y-3 list-none p-0">
              <li>
                <a
                  href="/projects/ongoing"
                  onClick={handleLink('/projects/ongoing')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Ongoing Projects
                </a>
              </li>
              <li>
                <a
                  href="/projects/completed"
                  onClick={handleLink('/projects/completed')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Completed Projects
                </a>
              </li>
            </ul>
          </div>

          {/* COL 4: SERVICES */}
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Services
            </div>
            <ul className="mt-5 space-y-3 list-none p-0">
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Industrial Construction
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Commercial Construction
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Residential Construction
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Steel Structure Works
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Infrastructure Projects
                </a>
              </li>
              <li>
                <a
                  href="/strengths-services"
                  onClick={handleLink('/strengths-services')}
                  className="text-[15px] text-white/80 transition-colors hover:text-white no-underline"
                >
                  Turnkey Construction
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center">
          <p>© 2026 APEX CONSTRUCTIONS Engineering & Infrastructure. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              onClick={handleLink('/privacy')}
              className="text-white/50 hover:text-white no-underline transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              onClick={handleLink('/terms')}
              className="text-white/50 hover:text-white no-underline transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* GIANT WATERMARK */}
      <div aria-hidden={true} className="container-x relative pb-10">
        <div className="font-display text-display-1 leading-none tracking-[-0.05em] text-white/[0.04] select-none pointer-events-none">
          APEX CONSTRUCTIONS
        </div>
      </div>
    </footer>
  );
}
