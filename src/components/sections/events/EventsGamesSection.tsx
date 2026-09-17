'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const games = [
  { name: 'Beat Saber', desc: 'Рубите блоки под ритмичную музыку световыми мечами', color: '#ff006b', image: '/images/games/beat-saber.jpg' },
  { name: 'Gorilla Tag', desc: 'Догонялки в VR: прыгайте и лазайте по локациям большой компанией', color: '#2b7fff', image: '/images/games/gorilla-tag.jpg' },
  { name: 'Minecraft VR', desc: 'Создавайте и исследуйте мир в виртуальной реальности', color: '#00b4d8', image: '/images/games/minecraft.jpg' },
  { name: 'Arizona Sunshine', desc: 'Шутер с полным погружением в VR', color: '#f6339a', image: '/images/games/arizona-sunshine.jpg' },
  { name: 'Elven Assassin', desc: 'Приключенческая игра с элементами фэнтези', color: '#7928ca', image: '/images/games/elven-assassin.jpg' },
  { name: 'Pavlov VR', desc: 'Тактический шутер с реалистичным оружием', color: '#ad46ff', image: '/images/games/pavlov-vr.jpg' },
  { name: 'I Am Cat', desc: 'Веселый симулятор кота с открытым миром', color: '#2b7fff', image: '/images/games/i-am-cat.jpg' },
  { name: 'Roblox', desc: 'Тысячи миров и мини-игр — играйте вместе с друзьями', color: '#ff006b', image: '/images/games/roblox.jpg' },
];

export function EventsGamesSection() {
  return (
    <section id="events-games" className="py-10" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Популярные </span>
            <span style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              игры
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#a0aec0' }}>
            Более 70 игр в нашем каталоге — от головоломок до экшена
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {games.map((game) => (
            <Link
              key={game.name}
              href="/games"
              className="group rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
              style={{ backgroundColor: '#0f1629', border: `1px solid ${game.color}44` }}
            >
              <div className="relative aspect-[460/215] overflow-hidden bg-slate-900">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: game.color }} />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold text-white">{game.name}</h3>
                <p className="text-sm" style={{ color: '#a0aec0' }}>{game.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/games"
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(90deg,#2b7fff,#ad46ff)' }}
          >
            Весь каталог игр
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
