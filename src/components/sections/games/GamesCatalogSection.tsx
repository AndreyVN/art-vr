'use client';

import { useMemo, useState } from 'react';
import { m } from 'motion/react';
import { Search, X } from 'lucide-react';
import { games, genreLabels, platformLabels, type GameGenre, type GamePlatform } from '@/lib/games-data';
import { GameCard } from './GameCard';

const genreOrder = Object.keys(genreLabels) as GameGenre[];
const platformOrder = Object.keys(platformLabels) as GamePlatform[];

export function GamesCatalogSection() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState<GameGenre | 'all'>('all');
  const [platform, setPlatform] = useState<GamePlatform | 'all'>('all');
  const [coopOnly, setCoopOnly] = useState(false);

  const genreCounts = useMemo(() => {
    const counts = {} as Record<GameGenre, number>;
    for (const g of games) counts[g.genre] = (counts[g.genre] ?? 0) + 1;
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter((g) => {
      if (genre !== 'all' && g.genre !== genre) return false;
      if (platform !== 'all' && !g.platforms.includes(platform)) return false;
      if (coopOnly && g.maxPlayers < 2) return false;
      // Ищем по названию и жанру: поиск по описанию даёт слишком много ложных совпадений.
      if (q && !g.title.toLowerCase().includes(q) && !genreLabels[g.genre].toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [query, genre, platform, coopOnly]);

  const resetAll = () => {
    setQuery('');
    setGenre('all');
    setPlatform('all');
    setCoopOnly(false);
  };

  const isFiltered = query !== '' || genre !== 'all' || platform !== 'all' || coopOnly;

  return (
    <section id="catalog" className="py-16 bg-slate-900">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="mb-8 space-y-5">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти игру по названию или жанру"
              aria-label="Поиск по каталогу игр"
              className="w-full bg-slate-800/60 border border-cyan-500/20 rounded-full pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterChip active={genre === 'all'} count={games.length} onClick={() => setGenre('all')}>
              Все жанры
            </FilterChip>
            {genreOrder.map((key) => (
              <FilterChip
                key={key}
                active={genre === key}
                count={genreCounts[key] ?? 0}
                onClick={() => setGenre(key)}
              >
                {genreLabels[key]}
              </FilterChip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <FilterChip active={platform === 'all'} onClick={() => setPlatform('all')}>
              Любая платформа
            </FilterChip>
            {platformOrder.map((key) => (
              <FilterChip key={key} active={platform === key} onClick={() => setPlatform(key)}>
                {platformLabels[key]}
              </FilterChip>
            ))}
            <FilterChip active={coopOnly} onClick={() => setCoopOnly(!coopOnly)}>
              Для компании
            </FilterChip>
          </div>

          {coopOnly && (
            <p className="text-gray-500 text-sm">
              Показаны игры, для которых в каталоге указано число игроков. Если нужной нет в списке —
              спросите администратора, многие игры на автономных шлемах тоже поддерживают компанию.
            </p>
          )}

          <div className="flex items-center gap-4 text-gray-400">
            <span>
              Найдено: <span className="text-white font-semibold">{filtered.length}</span>
            </span>
            {isFiltered && (
              <button
                onClick={resetAll}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <X className="w-4 h-4" />
                Сбросить фильтры
              </button>
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <m.div
            key={`${genre}-${platform}-${coopOnly}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </m.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-4">
              По этому запросу игр не нашлось — попробуйте другой фильтр.
            </p>
            <button
              onClick={resetAll}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/40 transition-all"
            >
              Показать все игры
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count?: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-all border ${
        active
          ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-transparent'
          : 'bg-slate-800/60 text-gray-300 border-cyan-500/20 hover:border-cyan-500/50 hover:text-white'
      }`}
    >
      {children}
      {count !== undefined && (
        <span className={active ? 'ml-1.5 text-white/70' : 'ml-1.5 text-gray-500'}>{count}</span>
      )}
    </button>
  );
}
