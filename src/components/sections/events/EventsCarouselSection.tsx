'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Детский день рождения',
    text: 'Большой выбор детских игр без жестоких сцен: администратор объясняет правила простыми словами, подбирает короткие раунды и меняет активности, чтобы дети не уставали. Доступны популярные у ребят игры — Minecraft, Roblox и Gorilla Tag; компанию можно разбить на небольшие команды, и каждая выбирает свою игру. Детям постарше предложим настоящие тактические шутеры вроде Counter-Strike и режим обороны от зомби. Между VR-сессиями ждут PlayStation 5 и настольные игры, а в финале — торжественный вынос торта и поздравление именинника.',
  },
  {
    title: 'Взрослый день рождения',
    text: 'Впечатление, которое запоминается сильнее ресторана. Беспроводные шлемы Meta Quest 3 последнего поколения и мощные игровые ПК дают тактические шутеры уровня Pavlov и Arizona Sunshine — с настоящей физикой оружия и топовой графикой, а не упрощённой картинкой, как на VR-аренах. Командный бой, хоррор на время или хаотичный VR-турнир между гостями, а рядом — зона с PS5 и настолками, если кто-то захочет перевести дух.',
  },
  {
    title: 'Корпоратив',
    text: 'Тимбилдинг в виртуальной реальности: делимся на небольшие команды, и каждая выбирает свою игру и сценарий. В VR стираются границы должностей — важны только слаженность, коммуникация и креатив. Командные тактические шутеры на мощных ПК дают ощущения, недоступные обычным аренам, и по-настоящему сплачивают коллектив.',
  },
  {
    title: 'Семейный отдых',
    text: 'Приключения для всех возрастов и безопасное оборудование даже для самых маленьких. Большой выбор игр и для детей, и для взрослых: кто-то штурмует квесты и гонки в VR, кто-то отдыхает за PlayStation 5 и настольными играми. Инструкторы помогут освоиться и подберут игры по возрасту — скучать не будет никто.',
  },
  {
    title: 'Встреча друзей',
    text: 'Гибкий формат: приходите компанией и делитесь на небольшие команды — каждый выбирает игру по своему вкусу. Собрались большой компанией? Minecraft и Roblox в VR держат до 10 человек в одном мире. В зоне отдыха — диван, PS5 и настолки, чтобы разбавить VR-сессии. Идеально, когда есть и фанаты VR, и те, кто просто хочет посидеть рядом.',
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
