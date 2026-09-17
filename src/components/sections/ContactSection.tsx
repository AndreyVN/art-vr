'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { Calendar, MessageCircle, Send } from 'lucide-react';
import { site } from '@/lib/site';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 border-t border-white/10 bg-slate-900">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.phoneHref}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Забронировать сейчас
            </a>
            <a
              href={site.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp
            </a>
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5 text-sky-400" />
              Telegram
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Перед посещением ознакомьтесь с{' '}
            <Link
              href={site.rules.page}
              className="text-pink-400 hover:text-pink-300 underline underline-offset-4"
            >
              правилами посещения и техникой безопасности
            </Link>
            .
          </p>
        </m.div>
      </div>
    </section>
  );
}
