'use client';

import { m } from 'motion/react';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

export function EventsToBookSection() {
  return (
    <section id="events-book" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#020618,#0f172b)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'rgba(117,58,255,0.08)' }} />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 relative z-10 text-center">
        <m.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Готовы окунуться в </span>
            <span style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              виртуальную реальность?
            </span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#d1d5dc' }}>
            Забронируйте мероприятие прямо сейчас — позвоните нам, и мы подберём дату и формат.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white text-lg font-semibold transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(90deg,#753aff,#6885f8)' }}
          >
            <Phone className="w-5 h-5" />
            {site.phone}
          </a>
        </m.div>
      </div>
    </section>
  );
}
