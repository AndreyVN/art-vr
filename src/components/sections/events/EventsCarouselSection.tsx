'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Детский день рождения',
    text: 'Администраторы объясняют правила простыми словами. Подбираем игры без жестоких сцен, с короткими раундами (дети не устают) и обязательной сменой активности.',
  },
  {
    title: 'Взрослый день рождения',
    text: 'Опыт, который запоминается сильнее, чем просто ресторан. Можно выбрать командный шутер, прохождение хоррора на время или хаотичный VR-турнир между гостями. Отдельная зона с PS5 / настолками, чтобы компания не зацикливалась только на шлемах.',
  },
  {
    title: 'Корпоратив',
    text: 'Тимбилдинг в виртуальной реальности! Объединяем команду через игру. В VR-пространстве стираются границы должностей! Здесь важны только слаженность, коммуникация и креатив. Испытайте себя и коллег в захватывающих сценариях и укрепите командный дух!',
  },
  {
    title: 'Семейный отдых',
    text: 'Семейный VR-адреналин: приключения для всех возрастов! Дети, родители — в шлемы и вперёд: квесты, гонки и битвы ждут. Опытные инструкторы помогут освоиться, а оборудование безопасно даже для самых маленьких. Веселитесь, побеждайте и создавайте семейные воспоминания в виртуальной реальности!',
  },
  {
    title: 'Встреча друзей',
    text: 'Гибкий формат: приходите своей компанией, выбирайте общий сценарий или делитесь на мини-группы по тем играм, которые интересны лично вам. В зоне отдыха — уютный диван, PS5 и настолки, чтобы разбавить VR-сессии. Идеальный вариант, если в компании есть и ярые фанаты VR, и те, кто просто хочет посидеть рядом.',
  },
];

export function EventsCarouselSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="events-carousel" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(43,127,255,0.06)' }} />

      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Для любого{' '}
            <span style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              повода
            </span>
          </h2>
        </m.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <m.div
              key={current}
              initial={{ x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl p-10 md:p-14"
              style={{ background: 'linear-gradient(135deg,#1a1f3a,#0a0e27)', border: '1px solid rgba(246,51,154,0.15)' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                {slides[current].title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: '#99a1af' }}>
                {slides[current].text}
              </p>
            </m.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border flex items-center justify-center text-white transition-all hover:border-pink-500/60"
              style={{ borderColor: 'rgba(246,51,154,0.3)' }}
              aria-label="Назад"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    background: i === current ? 'linear-gradient(90deg,#ff006b,#7928ca)' : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Слайд ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border flex items-center justify-center text-white transition-all hover:border-pink-500/60"
              style={{ borderColor: 'rgba(246,51,154,0.3)' }}
              aria-label="Вперёд"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
