'use client';

import { m } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    title: 'Лайт',
    priceWeekday: '4800',
    priceWeekend: '6400',
    popular: false,
  },
  {
    title: 'Стандарт',
    priceWeekday: '7600',
    priceWeekend: '10300',
    popular: true,
  },
  {
    title: 'Макси',
    priceWeekday: '11400',
    priceWeekend: '15300',
    popular: false,
  },
];

const packageFeatures = [
  'Цена указана за 8 игровых зон',
  '9 и 10 зоны арендуются дополнительно',
  'Зона отдыха на всё время + 30 минут после (до 16 человек)',
  'Более 60 VR игр на выбор',
  'PlayStation 5 с топовыми играми',
  'Настольные игры для детей и взрослых',
  'Электронные пригласительные',
  'Поздравление именинника и вынос торта',
];

export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Тарифы для{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              мероприятий
            </span>
          </h2>
          <p className="text-gray-400">Идеально для дня рождения, корпоратива или вечеринки</p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 border ${
                pkg.popular
                  ? 'border-pink-500/50 shadow-xl shadow-pink-500/20'
                  : 'border-blue-500/20'
              } rounded-2xl p-8 hover:border-pink-500/40 transition-all ${
                pkg.popular ? 'md:scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
                <div className="mb-3">
                  <p className="text-gray-400 text-sm mb-1">Будни</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      {pkg.priceWeekday}
                    </span>
                    <span className="text-gray-400 text-xl mb-1">₽</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Выходные</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {pkg.priceWeekend}
                    </span>
                    <span className="text-gray-400 text-xl mb-1">₽</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {packageFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-6">
            <p className="text-gray-300 text-lg mb-1">
              🎉{' '}
              <span className="font-semibold text-white">
                Аренда всего клуба от 2х часов — 20% скидка
              </span>
            </p>
            <p className="text-gray-400 text-sm">*Цены указаны со скидкой</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
