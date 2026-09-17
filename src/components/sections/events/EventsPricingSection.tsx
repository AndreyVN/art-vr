'use client';

import { m } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Лайт',
    duration: '1 час',
    weekday: '4 800₽',
    weekend: '6 400₽',
    features: [],
    featured: false,
  },
  {
    name: 'Стандарт',
    duration: '2 часа',
    weekday: '7 600₽',
    weekend: '10 300₽',
    features: [
      '8 игровых зон (9 и 10 дополнительно)',
      'Зона отдыха + 30 мин после игры (до 16 человек)',
      'Более 70 VR игр',
      'PlayStation 5 с топовыми играми',
      'Настольные игры',
      'Электронные пригласительные',
      'Поздравление именинника и вынос торта',
    ],
    featured: true,
  },
  {
    name: 'Макси',
    duration: '3 часа',
    weekday: '11 400₽',
    weekend: '15 300₽',
    features: [],
    featured: false,
  },
];

export function EventsPricingSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="events-pricing" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(255,0,107,0.07)' }} />

      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Тарифы для </span>
            <span style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              мероприятий
            </span>
          </h2>
          <p className="text-lg mb-2" style={{ color: '#99a1af' }}>
            Выберите подходящий пакет для вашего праздника
          </p>
          <p className="text-sm" style={{ color: '#6a7282' }}>
            Все пакеты включают одинаковые условия, но имеют разную продолжительность и цену.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <m.div
              key={pkg.name}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`relative rounded-3xl p-8 flex flex-col ${pkg.featured ? 'scale-105' : ''}`}
              style={{
                background: 'linear-gradient(135deg,#1a1f3a,#171c37,#0a0e27)',
                border: pkg.featured ? '1.5px solid rgba(255,0,107,0.5)' : '1px solid rgba(255,255,255,0.06)',
                boxShadow: pkg.featured ? '0 0 40px rgba(255,0,107,0.12)' : 'none',
              }}
            >
              {pkg.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white"
                  style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)' }}
                >
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                <span
                  className="text-lg font-semibold"
                  style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {pkg.duration}
                </span>
              </div>

              <div className="flex gap-4 justify-center mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold" style={{ color: '#d1d5dc' }}>{pkg.weekday}</div>
                  <div className="text-xs" style={{ color: '#6a7282' }}>будни</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div
                    className="text-xl font-bold"
                    style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {pkg.weekend}
                  </div>
                  <div className="text-xs" style={{ color: '#6a7282' }}>выходные</div>
                </div>
              </div>

              {pkg.features.length > 0 && (
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-sm font-bold mt-0.5" style={{ color: '#ff006b' }}>✓</span>
                      <span className="text-sm" style={{ color: '#99a1af' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => scrollTo('events-book')}
                className="mt-auto w-full py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  background: pkg.featured
                    ? 'linear-gradient(90deg,#ff006b,#7928ca)'
                    : 'rgba(255,255,255,0.07)',
                  border: pkg.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                Выбрать пакет
              </button>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mt-10 max-w-2xl mx-auto text-center space-y-2"
        >
          <p className="font-semibold" style={{ background: 'linear-gradient(90deg,#ff006b,#7928ca)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Аренда всего клуба от 2х часов — 20% скидка
          </p>
          <p className="text-sm" style={{ color: '#6a7282' }}>*Цены указаны со скидкой</p>
        </m.div>
      </div>
    </section>
  );
}
