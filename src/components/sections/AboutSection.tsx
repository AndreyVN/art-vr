'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const highlights = [
  '10 игровых зон с VR шлемами Meta Quest 3',
  'Более 70 игр на любой вкус',
  'PlayStation 5 с большим экраном',
  'Уютная зона отдыха до 16 человек',
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 border-t border-white/10 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              О нашем{' '}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                клубе
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              ART-VR — это современный клуб виртуальной реальности в Омске, оснащённый самым
              передовым оборудованием для максимального погружения в игровые миры.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              У нас вы найдёте 10 игровых зон с VR шлемами последнего поколения, более 70 игр на
              любой вкус, а также возможность провести незабываемый корпоратив или праздник.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/oborudovanie"
              className="inline-flex items-center gap-2 mt-8 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
            >
              Подробнее об оборудовании
              <ArrowRight className="w-4 h-4" />
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
              <Image
                src="/images/8ca7e77fc2a53d7a3c2ca2e4b96e3b582b1832a2.png"
                alt="Интерьер ART-VR"
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
