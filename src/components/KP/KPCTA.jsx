import React from 'react';
import { ArrowUpRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function KPCTA({ onOpenConsultation }) {
  return (
    <section id="cta-section" className="container-x section-y">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-ink border border-white/15 shadow-2xl">
        <img
          src="/assets/cta-banner.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover filter brightness-[0.4] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 blueprint-bg opacity-[0.08] pointer-events-none" />

        {/* CAD CORNER CROSSHAIRS */}
        <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-amber" />
        <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-amber" />
        <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-amber" />
        <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-amber" />

        <div className="relative z-10 grid gap-10 px-8 py-16 text-white md:grid-cols-[1.4fr_1fr] md:px-16 md:py-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Direct Engineering Consultation</span>
            </div>
            <h2 className="mt-5 font-display text-display-2 leading-[0.98] tracking-[-0.035em] text-balance">
              <span>Ready to break ground on </span>
              <em className="italic gradient-text">your next project?</em>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
              Submit your site coordinates, built-up scope, and schedule targets. A licensed senior civil engineer will review your brief and return a preliminary scope evaluation within one business day.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end justify-center gap-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-r from-amber to-orange pl-7 pr-2 text-[15px] font-bold text-ink cursor-pointer border-none shadow-lg shadow-amber/20 hover:opacity-95 transition-all"
            >
              <span>Submit Project Brief</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+918610836498"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber" />
                <span>+91 86108 36498</span>
              </a>

              <a
                href="https://wa.me/918610836498?text=Hello%20APEX%20CONSTRUCTIONS,%20I%20would%20like%20to%20consult%20on%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="h-4 w-4 text-green" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
