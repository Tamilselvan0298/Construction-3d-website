import React from 'react';
import { ShieldCheck, Award, HardHat, CheckCircle2 } from 'lucide-react';

export default function KPMarquee() {
  const metrics = [
    { label: 'BUILT-UP AREA POURED', val: '1.7M+ SQFT', icon: HardHat },
    { label: 'STRUCTURAL COMPLIANCE', val: '100% IS CODES', icon: ShieldCheck },
    { label: 'SAFETY PERFORMANCE', val: 'ZERO LTI RECORD', icon: Award },
    { label: 'DEFECT-FREE COMMISSIONING', val: '98.6% RETENTION', icon: CheckCircle2 },
  ];

  const clientLogos = [
    { name: 'KR Fuels', src: '/logos/logo1.jpeg' },
    { name: 'Dr. Vasudevan Hospital', src: '/logos/logo2.png' },
    { name: 'KR Gases Pvt. Ltd.', src: '/logos/logo3.png' },
    { name: 'Creepers Engineering', src: '/logos/logo4.png' },
    { name: 'Suriyan Mark Industries', src: '/logos/logo5.png' },
    { name: 'Lasan Healthcare', src: '/logos/logo6.png' },
  ];

  return (
    <section className="border-y border-line bg-white">
      {/* 1. ARCHITECTURAL LIVE METRICS STRIP */}
      <div className="border-b border-line bg-paper-2/50 py-5">
        <div className="container-x grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="flex items-center gap-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue/20 bg-blue/10 text-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
                    {m.val}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-ink">
                    {m.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. ENTERPRISE LOGO TICKER */}
      <div className="container-x flex items-center gap-8 py-8 max-md:flex-col max-md:items-center max-md:text-center">
        <div className="shrink-0 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-ink">
            Enterprise Client Partners
          </span>
        </div>

        <div
          className="flex-1 min-w-0 w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="marquee flex w-max items-center gap-10 md:gap-14 pr-10 md:pr-14">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center shrink-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 h-12 w-[110px] md:h-14 md:w-[140px]"
                title={client.name}
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
