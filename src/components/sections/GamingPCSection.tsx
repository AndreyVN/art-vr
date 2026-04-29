'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { Monitor, Check } from 'lucide-react';

const specs = [
  { label: 'Высокая производительность', description: 'Мощные видеокарты для VR без задержек' },
  { label: 'Высокое разрешение', description: 'Плавная графика и чёткая картинка в VR' },
];

const features = [
  'Оптимизированы для VR-игр',
  'Регулярное обновление оборудования',
  'Стабильная производительность',
];

export function GamingPCSection() {
  return (
    <section id="gaming-pc" className="py-20 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Игровые{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  ПК
                </span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              Мы используем мощные игровые ПК для максимального погружения в игры. Насладитесь
              высоким разрешением и плавной графикой.
            </p>

            <div className="space-y-4 mb-6">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-4"
                >
                  <h4 className="text-white font-semibold mb-2">{spec.label}</h4>
                  <p className="text-gray-400">{spec.description}</p>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {features.map((f, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-pink-500" />
                  {f}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <Image
                src="/images/faf3c86189e15b9dfa1be04f1dea9c7d9ff09f94.png"
                alt="Игровые ПК"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
