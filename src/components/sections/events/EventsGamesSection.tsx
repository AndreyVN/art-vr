'use client';

import { ArrowRight } from 'lucide-react';

const games = [
  { name: 'Beat Saber', desc: 'Рубите блоки под ритмичную музыку световыми мечами', color: '#ff006b' },
  { name: 'Half-Life: Alyx', desc: 'Погрузитесь в легендарную вселенную Half-Life', color: '#2b7fff' },
  { name: 'Minecraft VR', desc: 'Создавайте и исследуйте мир в виртуальной реальности', color: '#00b4d8' },
  { name: 'Arizona Sunshine', desc: 'Шутер с полным погружением в VR', color: '#f6339a' },
  { name: 'Elven Assassin', desc: 'Приключенческая игра с элементами фэнтези', color: '#7928ca' },
  { name: 'Pavlov VR', desc: 'Тактический шутер с реалистичным оружием', color: '#ad46ff' },
  { name: 'I Am Cat', desc: 'Веселый симулятор кота с открытым миром', color: '#2b7fff' },
  { name: 'Propagation VR', desc: 'Хоррор-игра с напряженной атмосферой', color: '#ff006b' },
];

const initials = (name: string) =>
  name.split(/[\s:]+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export function EventsGamesSection() {
  return (
    <section id="events-games" className="py-20" style={{ backgroundColor: '#020618' }}>
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
            <div
              key={game.name}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ backgroundColor: '#0f1629', border: `1px solid ${game.color}44` }}
            >
              <div
                className="h-24 flex items-center justify-center text-2xl font-black text-white"
                style={{ background: `linear-gradient(135deg,${game.color}33,${game.color}11)`, borderBottom: `2px solid ${game.color}` }}
              >
                <span
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ background: game.color }}
                >
                  {initials(game.name)}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold text-white">{game.name}</h3>
                <p className="text-sm" style={{ color: '#a0aec0' }}>{game.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(90deg,#2b7fff,#ad46ff)' }}
          >
            Полный список игр (60+)
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
