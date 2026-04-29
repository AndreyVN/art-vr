'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { Sofa, Check } from 'lucide-react';

export function LoungeSection() {
  return (
    <section id="lounge" className="py-20 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <Image
                src="/images/3c1820e16e305ba38219cc1a204269028d09024b.png"
                alt="Зона отдыха ART-VR"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Sofa className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Зона{' '}
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                  отдыха
                </span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              Комфортная зона отдыха с неоновой подсветкой и современным дизайном — идеальное
              место для перерыва между игровыми сессиями или празднования с друзьями.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-2">Вместительный стол</h4>
                <p className="text-gray-400">Большой деревянный стол на 16 человек для вашего праздника</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-2">Игровая зона</h4>
                <p className="text-gray-400">PlayStation 5, большой экран и весёлые настольные игры.</p>
              </div>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-blue-500" />
                Атмосферная неоновая подсветка
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-pink-500" />
                Возможность принести свои угощения
              </li>
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
