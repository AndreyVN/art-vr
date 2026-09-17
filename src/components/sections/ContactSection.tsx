'use client';

import { m } from 'motion/react';
import { Calendar } from 'lucide-react';
import { site } from '@/lib/site';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы окунуться в{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              виртуальную реальность?
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Забронируйте свой сеанс прямо сейчас и получите незабываемые впечатления!
          </p>
          <a
            href={site.phoneHref}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Забронировать сейчас
          </a>
        </m.div>
      </div>
    </section>
  );
}
