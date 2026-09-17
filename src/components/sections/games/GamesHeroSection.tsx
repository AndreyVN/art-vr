'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { Gamepad2, Users, Layers } from 'lucide-react';
import { games, genreLabels } from '@/lib/games-data';
import { plural } from '@/lib/utils';

const genreCount = Object.keys(genreLabels).length;

const stats = [
  {
    icon: Gamepad2,
    value: `${games.length}`,
    label: `${plural(games.length, 'игра', 'игры', 'игр')} в каталоге`,
  },
  {
    icon: Layers,
    value: `${genreCount}`,
    label: `${plural(genreCount, 'жанр', 'жанра', 'жанров')} — от шутеров до аттракционов`,
  },
  { icon: Users, value: '10', label: 'игровых зон в клубе' },
];

export function GamesHeroSection() {
  return (
    <section className="relative pt-32 pb-14 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950/40 to-violet-950/30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Крошки — заодно очевидный путь назад на главную. */}
        <nav aria-label="Хлебные крошки" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Главная
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300">Каталог игр</li>
          </ol>
        </nav>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              Каталог игр ART-VR
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10">
            Шутеры и хорроры, спорт и головоломки, симуляторы и аттракционы — от спокойного
            погружения для новичка до командных боёв на все 10 игровых зон. Не знаете, что выбрать? Скажите
            администратору, кто и с каким опытом играет, — подберём.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl px-6 py-5 flex items-center justify-center gap-4"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white leading-tight">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
