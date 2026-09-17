'use client';

import { m } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 text-center z-10 pt-20">
        <m.div
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Клуб виртуальной реальности в Омске
            </span>
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              ART-VR
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-5xl mx-auto">
            10 игровых зон, VR шлемы последнего поколения, более 70 игр, скидки при бронировании
            клуба
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={site.phoneHref}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-2"
            >
              Забронировать
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollTo('games')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Узнать больше
            </button>
          </div>
        </m.div>
      </div>

      <m.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-500 rounded-full p-1">
          <div className="w-1.5 h-3 bg-pink-500 rounded-full mx-auto" />
        </div>
      </m.div>
    </section>
  );
}
