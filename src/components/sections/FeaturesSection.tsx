'use client';

import { m } from 'motion/react';
import { Gamepad2, Users, Clock, Trophy } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: '10+ игровых зон',
    description: 'VR шлемы последнего поколения',
  },
  {
    icon: Users,
    title: 'Мероприятия',
    description: 'Организация корпоративов и праздников',
  },
  {
    icon: Clock,
    title: 'Удобное время',
    description: 'Работаем каждый день до 21:00',
  },
  {
    icon: Trophy,
    title: '70+ игр',
    description: 'Более 70 игр в каталоге',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-2xl p-6 text-center hover:border-pink-500/40 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
