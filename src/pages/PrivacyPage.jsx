import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-28 pb-20">
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / Legal & Policy
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Privacy <em className="italic gradient-text">Policy.</em>
          </h1>
          <p className="mt-4 text-sm text-muted-ink">Last updated: January 2026</p>
        </div>

        <div className="mt-12 max-w-3xl space-y-8 text-[15.5px] leading-[1.8] text-ink-2 border-t border-line pt-10">
          <div>
            <h2 className="font-display text-2xl text-ink font-medium">1. Overview</h2>
            <p className="mt-3">
              APEX CONSTRUCTIONS Engineering & Infrastructure ("we", "our", or "us") is dedicated to protecting the privacy of project sponsors, clients, and visitors. This Privacy Policy outlines how we collect, use, and protect any information shared when using our website or submitting project briefs.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">2. Information We Collect</h2>
            <p className="mt-3">
              We collect information you explicitly provide when submitting consultation inquiries, requesting bill of quantity reviews, or contacting our site offices. This includes:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-muted-ink">
              <li>Contact details: Name, phone number, email address.</li>
              <li>Project parameters: Site location, planned built-up area, proposed category, and architectural specifications.</li>
              <li>Technical files: Soil testing reports, survey documents, and drawings shared for bidding purposes.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">3. Purpose of Processing</h2>
            <p className="mt-3">
              We process your information exclusively to:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1.5 text-muted-ink">
              <li>Prepare engineering scopes, cost estimates, and technical feasibility reports.</li>
              <li>Coordinate scheduled on-site inspections and client walkthroughs.</li>
              <li>Communicate construction updates and respond to inquiries.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">4. Confidentiality & Security</h2>
            <p className="mt-3">
              All architectural blueprints, land records, and project coordinates remain strictly confidential. We never monetize, sell, or trade client information to third-party marketing networks.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink font-medium">5. Contact Us</h2>
            <p className="mt-3">
              If you have any questions concerning our privacy practices, contact our principal office at <a href="mailto:info@apexgroup.engineering" className="text-blue underline">info@apexgroup.engineering</a> or call +91 86108 36498.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
