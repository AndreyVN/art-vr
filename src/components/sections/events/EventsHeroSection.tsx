'use client';

import { m } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function EventsHeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="events-hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#020618' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(255,0,107,0.12)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(43,127,255,0.12)' }} />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 text-center z-10 pt-20">
        <m.div
          initial={{ y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: '#d1d1d1' }}>
            ART-VR | Клуб виртуальной реальности
          </p>
          <p className="text-sm mb-10" style={{ color: '#c5c5c5' }}>
            📍 10 лет Октября, 40
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Где в Омске незабываемо
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-10">
            <span style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              провести день рождения?
            </span>
          </h2>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Корпоративы, детские праздники, семейный отдых и встречи друзей — всё это в ART-VR.
            10 игровых зон, 70+ игр, мощное оборудование.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('events-book')}
              className="px-8 py-4 text-white rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 hover:opacity-90"
              style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)' }}
            >
              Забронировать мероприятие
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('packages')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
            >
              Тарифы
            </button>
          </div>
        </m.div>
      </div>

      <m.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full p-1" style={{ borderColor: '#ff006b' }}>
          <div className="w-1.5 h-3 rounded-full mx-auto" style={{ background: '#ff006b' }} />
        </div>
      </m.div>
    </section>
  );
}
