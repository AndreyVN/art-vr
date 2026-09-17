'use client';

import { m } from 'motion/react';
import { Check, Clock } from 'lucide-react';
import { packages, packageFeatures } from '@/lib/events-content';



export function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Тарифы для{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              мероприятий
            </span>
          </h2>
          <p className="text-gray-400">Идеально для дня рождения, корпоратива или вечеринки</p>
        </m.div>

        {/* Тарифы: отличаются только названием и ценой — компактные карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {packages.map((pkg, index) => (
            <m.div
              key={pkg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative rounded-2xl p-6 text-center bg-gradient-to-br from-slate-800 to-slate-900 border transition-all ${
                pkg.popular
                  ? 'border-pink-500/50 shadow-xl shadow-pink-500/20 sm:scale-105'
                  : 'border-blue-500/20 hover:border-pink-500/40'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                  Популярный
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-1 mt-1">{pkg.title}</h3>
              <p className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Clock className="w-4 h-4 text-pink-400" />
                {pkg.duration}
                <span className="text-gray-600">·</span>
                {pkg.zones} игровых зон
              </p>
              <div className="flex items-stretch justify-center divide-x divide-white/10">
                <div className="px-4">
                  <p className="text-gray-400 text-xs mb-1">Будни</p>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {pkg.priceWeekday}
                    <span className="text-gray-500 text-base font-normal"> ₽</span>
                  </p>
                </div>
                <div className="px-4">
                  <p className="text-gray-400 text-xs mb-1">Выходные</p>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    {pkg.priceWeekend}
                    <span className="text-gray-500 text-base font-normal"> ₽</span>
                  </p>
                </div>
              </div>
              {pkg.note && (
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300">
                  <Check className="w-4 h-4" />
                  {pkg.note}
                </p>
              )}
            </m.div>
          ))}
        </div>

        {/* Что входит — единый блок для всех тарифов, без повторов */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-2xl border border-blue-500/20 bg-slate-900/50 p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-5 text-center">
            В каждый тариф входит
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {packageFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-xs mt-5 text-center">
            Для тарифов «Лайт» и «Стандарт» указана цена за 8 игровых зон — 9-ю и 10-ю можно приобрести дополнительно.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl px-6 py-5">
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
