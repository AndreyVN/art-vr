'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'С какого возраста можно играть в вашем клубе?',
    a: 'От 6 лет в сопровождении взрослых, с 14 лет — самостоятельно. Для детских праздников подбираем специальные игры без жестоких сцен и с короткими раундами.',
  },
  {
    q: 'В чём отличие VR клуба от арены?',
    a: 'В VR клубе вы арендуете отдельные зоны целиком для своей компании — без чужих людей рядом. На арене игроки из разных групп могут оказаться рядом. У нас 10 изолированных зон, каждая со своим шлемом и мощным ПК.',
  },
  {
    q: 'Обязательно ли записываться заранее?',
    a: 'Рекомендуем бронировать за 1–2 дня, особенно в выходные и праздники. Для мероприятий (день рождения, корпоратив) — за 3–7 дней. Звоните или пишите, и мы подберём удобное время.',
  },
  {
    q: 'Что такое игровая зона, что в неё входит? И может ли в одной зоне играть несколько человек?',
    a: 'Игровая зона — это отдельное пространство с VR-шлемом Meta Quest 3/3S и мощным игровым ПК. В одной зоне одновременно играет 1 человек в шлеме, но наблюдать за ним могут все желающие через экран. Зоны изолированы, вы не мешаете другим компаниям.',
  },
  {
    q: 'Можно ли менять игру в течение игрового времени?',
    a: 'Да, в любой момент. Наш оператор поможет быстро переключить игру. Смена занимает 1–2 минуты и не считается потерянным временем.',
  },
  {
    q: 'Будет ли нам кто-то помогать во время игры?',
    a: 'Да, наш оператор всегда рядом — поможет надеть и настроить шлем, подберёт игру под ваш опыт и возраст, объяснит управление. Вы никогда не останетесь один на один с незнакомым оборудованием.',
  },
  {
    q: 'Нужна ли сменная обувь?',
    a: 'Сменную обувь очень желательно взять с собой — в VR приходится активно двигаться, и в чистой лёгкой обуви играть удобнее, безопаснее и гигиеничнее. Также советуем удобную одежду без каблуков и очень широких платьев.',
  },
  {
    q: 'Можно ли принести свою еду и напитки?',
    a: 'Да, можно приносить свои угощения — праздничный торт, снеки, лимонад. Едим и пьём в лаунж-зоне за столом; на самих игровых зонах — только между сессиями, чтобы не пачкать оборудование.',
  },
  {
    q: 'Сколько человек можно пригласить на день рождения/мероприятие?',
    a: 'До 20 гостей одновременно. Зона отдыха для празднования вмещает до 16 человек, а в VR-зонах играют до 10 — пока одни в шлемах, другие отдыхают за столом с PS5 и настолками. Для компании побольше договоримся о ротации.',
  },
];

export function EventsFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="events-faq" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wide"
            style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
        </m.div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl text-left transition-all"
                style={{
                  background: open === i ? 'rgba(246,51,154,0.08)' : 'rgba(255,255,255,0.04)',
                  border: open === i ? '1px solid rgba(246,51,154,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-white font-medium">{faq.q}</span>
                <span className="flex-shrink-0 text-pink-400">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pt-3 pb-5 rounded-b-2xl -mt-2" style={{ background: 'rgba(246,51,154,0.04)', border: '1px solid rgba(246,51,154,0.15)', borderTop: 'none' }}>
                      <p className="text-sm leading-relaxed" style={{ color: '#99a1af' }}>{faq.a}</p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
