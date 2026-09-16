'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Clock, Baby, Youtube, Headset } from 'lucide-react';
import { genreLabels, platformLabels, type Game } from '@/lib/games-data';

export function GameCard({ game }: { game: Game }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = game.description.length > 190;

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all">
      <Link
        href={`/games/${game.slug}`}
        className="relative block aspect-[460/215] overflow-hidden bg-slate-900 group/cover"
        aria-label={`Подробнее об игре ${game.title}`}
      >
        {game.image ? (
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover group-hover/cover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/40 via-slate-900 to-violet-900/40">
            <Headset className="w-10 h-10 text-cyan-400/60" />
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 text-xs font-medium">
            {genreLabels[game.genre]}
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-white mb-3">
          <Link href={`/games/${game.slug}`} className="hover:text-cyan-400 transition-colors">
            {game.title}
          </Link>
        </h3>

        <div className="flex flex-wrap gap-2 mb-3">
          {game.players && (
            <span
              title="Количество игроков"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-slate-900/60 border border-white/10 rounded-lg px-2.5 py-1"
            >
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              {game.players}
            </span>
          )}
          {game.age && (
            <span
              title="Рекомендуемый возраст"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-slate-900/60 border border-white/10 rounded-lg px-2.5 py-1"
            >
              <Baby className="w-3.5 h-3.5 text-violet-400" />
              {game.age}+
            </span>
          )}
          {game.playtime && (
            <span
              title="Длительность сеанса"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-slate-900/60 border border-white/10 rounded-lg px-2.5 py-1"
            >
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {game.playtime} мин
            </span>
          )}
        </div>

        <p
          className={`text-gray-400 text-sm leading-relaxed ${
            expanded || !isLong ? '' : 'line-clamp-4'
          }`}
        >
          {game.description}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="self-start mt-2 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
          >
            {expanded ? 'Свернуть' : 'Подробнее'}
          </button>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {game.platforms.map((p) => (
              <span key={p} className="text-[11px] text-gray-500 border border-white/10 rounded-md px-2 py-0.5">
                {platformLabels[p]}
              </span>
            ))}
          </div>
          {game.youtube && (
            <a
              href={game.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              <Youtube className="w-4 h-4 text-violet-400" />
              Геймплей
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
