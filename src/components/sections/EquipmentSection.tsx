'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { Headset, Check } from 'lucide-react';

const specs = [
  { label: '4K+ разрешение', description: 'Кристально чистое изображение для полного погружения' },
  { label: 'Лёгкая посадка', description: 'Лёгкий и удобный шлем, который идеально сидит на голове.' },
];

const features = [
  { color: 'text-pink-500', label: 'Беспроводная свобода движений' },
  { color: 'text-purple-500', label: 'Точное отслеживание рук' },
  { color: 'text-pink-500', label: 'Комфортная посадка' },
  { color: 'text-purple-500', label: 'Регулярная дезинфекция' },
];

export function EquipmentSection() {
  return (
    <section id="equipment" className="py-20 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Headset className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Meta Quest{' '}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  3
                </span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg mb-6">
              Мы используем самые современные VR гарнитуры Meta Quest 3 — флагманские шлемы
              виртуальной реальности с передовой технологией смешанной реальности и невероятной
              производительностью.
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
                  <Check className={`w-5 h-5 ${f.color}`} />
                  {f.label}
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
                src="/images/06e99ebbb88b9407e15e2acff9b57377812d10ab.png"
                alt="Meta Quest 3 шлемы"
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
