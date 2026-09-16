'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'motion/react';
import { Gamepad2, Zap, Star, ArrowRight } from 'lucide-react';

const games = [
  {
    title: 'Beat Saber',
    description: 'Рубите блоки под ритмичную музыку световыми мечами',
    icon: Zap,
    image: '/images/48e9f8881018421f7221465dbc16d193250e6121.png',
  },
  {
    title: 'Half-Life: Alyx',
    description: 'Погрузитесь в легендарную вселенную Half-Life',
    icon: Gamepad2,
    image: '/images/fc29836454966999055c07e483c739b0c33046d8.png',
  },
  {
    title: 'Minecraft VR',
    description: 'Создавайте и исследуйте мир в виртуальной реальности',
    icon: Gamepad2,
    image: '/images/68957fe6056b1b2787331f5576e1810237fbbf44.png',
  },
  {
    title: 'Arizona Sunshine',
    description: 'Шутер с полным погружением в VR',
    icon: Star,
    image: '/images/442f4e52463a34c48b3a3584a38cf7bd41080d4a.png',
  },
  {
    title: 'Elven Assassin',
    description: 'Приключенческая игра с элементами фэнтези',
    icon: Gamepad2,
    image: '/images/34423ea5900d34a2d97c6c8497a7577e0721f534.png',
  },
  {
    title: 'Pavlov VR',
    description: 'Тактический шутер с реалистичным оружием',
    icon: Gamepad2,
    image: '/images/13ae498535f40f6760487f99086b909c7103670a.png',
  },
  {
    title: 'I Am Cat',
    description: 'Весёлый симулятор кота с открытым миром',
    icon: Gamepad2,
    image: '/images/4ce604d209daf1ffbcc226aaff6a59f58482aabb.png',
  },
  {
    title: 'Propagation VR',
    description: 'Хоррор-игра с напряжённой атмосферой',
    icon: Gamepad2,
    image: '/images/40e0f4e7068b7e3f4e9ec9eb23bff97262cfd557.png',
  },
];

export function GamesSection() {
  return (
    <section id="games" className="py-20 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Популярные{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              игры
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Более 60 игр в нашем каталоге — от головоломок до экшена
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/20 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/games"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2 group"
          >
            Весь каталог игр
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
