import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Industrial Construction',
    location: '',
    area: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-28 pb-20">
      {/* 1. HERO HEADER */}
      <section className="container-x py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-blue font-semibold">
            / Contact Us
          </div>
          <h1 className="mt-5 font-display text-display-1 leading-[1] tracking-[-0.04em] text-ink">
            Let's plan your <em className="italic gradient-text">build.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-2 max-w-2xl">
            Tell us about your site, scope and timeline. A senior civil engineer responds with a preliminary scope review within one business day.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM GRID */}
      <section className="section-y bg-paper-2/60 border-t border-line">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            {/* LEFT COLUMN: OFFICE & DIRECT CONTACTS */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
                  Direct Engineering Inquiries
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
                  Reach out directly to our principal project management office for commercial bids, structural consultations, or joint venture opportunities.
                </p>
              </div>

              <div className="space-y-4">
                {/* PHONE */}
                <a
                  href="tel:+918610836498"
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-6 shadow-sm transition hover:border-blue/30 hover:shadow-md"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-ink">Phone & WhatsApp</div>
                    <div className="mt-1 font-display text-xl font-medium text-ink">+91 86108 36498</div>
                    <div className="text-xs text-muted-ink mt-0.5">Available Mon–Sat · 9:00 to 18:00 IST</div>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@apexgroup.engineering"
                  className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-6 shadow-sm transition hover:border-blue/30 hover:shadow-md"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-green/10 text-green shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-ink">Technical Bids & BOQ</div>
                    <div className="mt-1 font-display text-xl font-medium text-ink">info@apexgroup.engineering</div>
                    <div className="text-xs text-muted-ink mt-0.5">Replies within 1 business day</div>
                  </div>
                </a>

                {/* HEADQUARTERS */}
                <div className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue/10 text-blue shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-ink">Head Office</div>
                    <div className="mt-1 font-display text-xl font-medium text-ink">Pon Nagar 4th Cross</div>
                    <div className="text-sm text-muted-ink mt-0.5">Trichy – 620001, Tamil Nadu, India</div>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-4 rounded-[20px] border border-line bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper-3 text-ink shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-ink">Operating Hours</div>
                    <div className="mt-1 font-display text-xl font-medium text-ink">Monday – Saturday</div>
                    <div className="text-sm text-muted-ink mt-0.5">9:00 AM – 6:00 PM (Site Operations 24/7 on demand)</div>
                  </div>
                </div>
              </div>

              {/* WHATSAPP CTA BADGE */}
              <div className="rounded-[24px] border border-green/30 bg-green/10 p-6 flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-medium text-ink">Prefer Instant WhatsApp Chat?</div>
                  <div className="text-xs text-muted-ink mt-1">Connect with our on-duty engineer right now</div>
                </div>
                <a
                  href="https://wa.me/918668179136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-sm font-medium text-white transition hover:scale-105"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE RFQ FORM */}
            <div className="rounded-[32px] border border-line bg-white p-8 md:p-12 shadow-md">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green/10 text-green ring-1 ring-green/20">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-medium text-ink">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 text-[16px] text-muted-ink max-w-md mx-auto leading-relaxed">
                    Thank you, {form.name}. A senior civil engineer from our Trichy office will review your specifications and get in touch within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        phone: '',
                        email: '',
                        category: 'Industrial Construction',
                        location: '',
                        area: '',
                        message: '',
                      });
                    }}
                    className="mt-8 inline-flex h-11 items-center rounded-full border border-line bg-paper px-6 text-sm font-medium text-ink hover:border-ink cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
                      Project Brief & Consultation
                    </h2>
                    <p className="mt-2 text-[14.5px] text-muted-ink">
                      Fill in the basic parameters of your planned build to receive an initial engineering evaluation.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Sundaram"
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Project Discipline *
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40 text-ink cursor-pointer"
                      >
                        <option>Industrial Construction</option>
                        <option>Commercial Construction</option>
                        <option>Residential Construction</option>
                        <option>Steel Structure Works</option>
                        <option>Infrastructure Projects</option>
                        <option>Turnkey Construction</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Site Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                        placeholder="e.g. Trichy, Madurai, Chennai"
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                        Approximate Scope / Area
                      </label>
                      <input
                        type="text"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                        placeholder="e.g. 2 Acres / 40,000 sqft"
                        className="w-full h-12 rounded-xl border border-line px-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink mb-2">
                      Project Description & Timeline
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Outline your planned construction milestones, current stage of architectural drawings, and estimated commencement date..."
                      className="w-full rounded-xl border border-line p-4 text-sm outline-none transition focus:border-blue focus:ring-1 focus:ring-blue bg-paper-2/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-ink text-[15px] font-medium text-white transition-colors hover:bg-ink-2 cursor-pointer border-none shadow-md"
                  >
                    <span>Submit Project Brief</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>

                  <p className="text-center text-[12px] text-muted-ink">
                    Your site coordinates and design briefs remain strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
