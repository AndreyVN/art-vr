'use client';

import { m } from 'motion/react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              цены
            </span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Будние</h3>
              <p className="text-gray-400">(1 игровая зона)</p>
            </div>
            <div className="space-y-4">
              {[{ time: '30 мин', price: '400' }, { time: '60 мин', price: '600' }].map((item) => (
                <div
                  key={item.time}
                  className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg">{item.time}</span>
                    <span className="text-3xl font-bold text-white">
                      {item.price}
                      <span className="text-xl text-gray-400">₽</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/50 transition-all"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">Выходные</h3>
              <p className="text-gray-400">(1 игровая зона)</p>
            </div>
            <div className="space-y-4">
              {[{ time: '30 мин', price: '500' }, { time: '60 мин', price: '800' }].map((item) => (
                <div
                  key={item.time}
                  className="bg-slate-800/50 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg">{item.time}</span>
                    <span className="text-3xl font-bold text-white">
                      {item.price}
                      <span className="text-xl text-gray-400">₽</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
