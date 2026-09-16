'use client';

import { m } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { site } from '@/lib/site';

export function GamesBookingSection() {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Выбрали игру?{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Забронируйте зону
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Игру можно менять в течение сеанса, а администратор запустит и объяснит управление.
            Работаем по предварительной записи.
          </p>

          <a
            href={site.phoneHref}
            className="inline-block text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-8 hover:opacity-80 transition-opacity"
          >
            {site.phone}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.phoneHref}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a
              href={site.emailHref}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Написать
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
