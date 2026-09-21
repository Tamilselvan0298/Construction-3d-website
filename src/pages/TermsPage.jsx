import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / Legal & Policy
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Terms & <em className="italic gradient-text">Conditions.</em>
          </h1>
          <p className="mt-4 text-sm text-muted-ink">Last updated: January 2026</p>
        </div>

        <div className="mt-12 max-w-3xl space-y-8 text-[15.5px] leading-[1.8] text-ink-2 border-t border-line pt-10">
          <div>
            <h2 className="font-display text-2xl text-ink font-medium">1. Agreement to Terms</h2>
            <p className="mt-3">
              By accessing and utilizing the website and engineering portal of APEX CONSTRUCTIONS Engineering & Infrastructure, you agree to abide by the terms and conditions outlined herein. If you do not agree with any provision, you may not use our services or website resources.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">2. Engineering Information & Estimates</h2>
            <p className="mt-3">
              All architectural renderings, structural guidelines, and cost estimates presented on this website are for informational and planning purposes. Formal engineering commitments, pricing schedules, and completion dates are governed strictly by executed formal construction contracts.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">3. Intellectual Property</h2>
            <p className="mt-3">
              All project photography, digital renderings, layout drawings, brand trademarks, and editorial copy are the intellectual property of APEX CONSTRUCTIONS Engineering & Infrastructure. Reproduction without written consent is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">4. Standard of Construction & Warranty</h2>
            <p className="mt-3">
              Projects contracted through APEX CONSTRUCTIONS comply with Indian Standard Codes (IS Codes), national building codes, and municipal regulatory guidelines. Specific warranty terms, including structural warranties and 12-month defect-liability provisions, are documented in formal project agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">5. Jurisdiction</h2>
            <p className="mt-3">
              Any dispute or claim arising from the use of this website or initial engineering inquiries shall be subject to the exclusive jurisdiction of the competent courts in Tiruchirappalli (Trichy), Tamil Nadu, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
