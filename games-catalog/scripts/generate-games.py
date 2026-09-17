# -*- coding: utf-8 -*-
"""Собирает каталог игр клуба ART-VR из games.json (папка games-catalog).

На сайт попадают только игры со статусом published, по убыванию popularity.
Остальные остаются в списке с причиной в поле status.

Результат — games-data.ts и games-summary.ts рядом с games.json: при размещении на сайте
их кладут в src/lib, а папку images — в public (пути картинок начинаются с /images/games).

  python scripts/generate-games.py              # пересобрать games-data.ts
  python scripts/generate-games.py --download   # плюс скачать недостающие обложки:
                                                # image_source -> карточка 460×215,
                                                # cover_source -> страница игры 600×750
Обычно запускать отдельно не нужно — это делает scripts/sync-games.py.
"""
import io
import json
import os
import re
import sys
import urllib.request
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAMES_JSON = os.path.join(ROOT, 'games.json')
# Папка каталога играет роль public/: картинка /images/games/x.jpg лежит в images/games/x.jpg.
PUBLIC_DIR = ROOT
IMG_DIR = os.path.join(PUBLIC_DIR, 'images', 'games')
OUT_DIR = ROOT
COVER_SIZE = (460, 215)
# Обложка на странице игры — формат 4:5, ближе к квадрату. Источник — вертикальная
# обложка библиотеки Steam; cover_source = "blur" — собрать из широкой обложки на размытом фоне,
# cover_focus — что сохранить при обрезке по высоте (0 — верх, 0.5 — центр, 1 — низ).
TALL_DIR = os.path.join(IMG_DIR, 'covers')
TALL_SIZE = (600, 750)

GENRE_LABELS = {
    'shooter': 'Шутеры и бои',
    'horror': 'Хорроры',
    'quest': 'Приключения и квесты',
    'sport': 'Спорт',
    'rhythm': 'Ритм и музыка',
    'sim': 'Симуляторы',
    'party': 'Настолки и стратегии',
    'relax': 'Аттракционы и релакс',
}

PLATFORM_LABELS = {'pc': 'ПК-VR', 'standalone': 'На шлемах'}


def max_players(players):
    nums = [int(n) for n in re.findall(r'\d+', players or '')]
    return max(nums) if nums else 0


def fetch_image(url):
    from PIL import Image

    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    raw = urllib.request.urlopen(req, timeout=90).read()
    return Image.open(io.BytesIO(raw)).convert('RGB')


def save_jpeg(img, path):
    img.save(path, 'JPEG', quality=86, optimize=True, progressive=True)


def download_cover(game):
    """Скачивает обложку и приводит её к размеру карточек каталога."""
    from PIL import Image, ImageOps

    img = fetch_image(game['image_source'])
    if img.size != COVER_SIZE:
        img = ImageOps.fit(img, COVER_SIZE, Image.LANCZOS)
    save_jpeg(img, os.path.join(IMG_DIR, game['slug'] + '.jpg'))
    return '/images/games/' + game['slug'] + '.jpg'


def download_tall_cover(game):
    """Обложка для страницы игры 600×750: из вертикального арта или из широкой обложки."""
    from PIL import Image, ImageFilter, ImageOps

    if game['cover_source'] == 'blur':
        wide = Image.open(os.path.join(PUBLIC_DIR, game['image'].lstrip('/'))).convert('RGB')
        img = ImageOps.fit(wide, TALL_SIZE).filter(ImageFilter.GaussianBlur(28))
        img = Image.blend(img, Image.new('RGB', TALL_SIZE, (2, 6, 23)), 0.35)
        fg = wide.resize((TALL_SIZE[0], round(wide.height * TALL_SIZE[0] / wide.width)), Image.LANCZOS)
        img.paste(fg, (0, (TALL_SIZE[1] - fg.height) // 2))
    else:
        # cover_focus: какую часть по высоте сохранить при обрезке (0 — верх, 1 — низ).
        focus = float(game.get('cover_focus', 0.5))
        src = fetch_image(game['cover_source'])
        if src.width < TALL_SIZE[0] or src.height < TALL_SIZE[1]:
            print('ВНИМАНИЕ %s: исходник %dx%d меньше %dx%d, обложка будет мыльной'
                  % (game['slug'], src.width, src.height, TALL_SIZE[0], TALL_SIZE[1]))
        img = ImageOps.fit(src, TALL_SIZE, Image.LANCZOS, centering=(0.5, focus))
    save_jpeg(img, os.path.join(TALL_DIR, game['slug'] + '.jpg'))
    return '/images/games/covers/' + game['slug'] + '.jpg'


def exists(public_path):
    return bool(public_path) and os.path.exists(os.path.join(PUBLIC_DIR, public_path.lstrip('/')))


def esc(s):
    return s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', ' ')


def main():
    data = json.load(io.open(GAMES_JSON, encoding='utf-8'))
    games = data['games']

    if '--download' in sys.argv:
        os.makedirs(TALL_DIR, exist_ok=True)
        changed = False
        for g in games:
            if g['status'] not in ('published', 'draft'):
                continue
            jobs = []
            if g.get('image_source') and not exists(g.get('image')):
                jobs.append(('image', 'обложка', download_cover))
            if g.get('cover_source') and not exists(g.get('cover')):
                jobs.append(('cover', 'обложка страницы', download_tall_cover))
            for key, label, fn in jobs:
                if key == 'cover' and not exists(g.get('image')) and g['cover_source'] == 'blur':
                    print('ОШИБКА %s: для cover_source="blur" нужна широкая обложка' % g['slug'])
                    continue
                try:
                    g[key] = fn(g)
                    changed = True
                    print('%s: %s' % (label, g['slug']))
                except Exception as exc:
                    print('ОШИБКА %s %s: %s' % (label, g['slug'], exc))
        if changed:
            io.open(GAMES_JSON, 'w', encoding='utf-8', newline='\n').write(
                json.dumps(data, ensure_ascii=False, indent=2) + '\n')

    items = []
    for g in games:
        if g['status'] != 'published':
            continue
        if not g.get('description'):
            print('ПРОПУЩЕНА %s: нет описания' % g['title'])
            continue
        for key in ('image', 'cover'):
            if g.get(key) and not exists(g[key]):
                print('ВНИМАНИЕ %s: нет файла %s' % (g['title'], g[key]))
        if g['genre'] not in GENRE_LABELS:
            raise SystemExit('%s: неизвестный раздел %r' % (g['title'], g['genre']))
        items.append(dict(g, maxPlayers=max_players(g.get('players'))))
    # Порядок каталога: сначала популярные (поле popularity, 0–100), при равенстве — по алфавиту.
    items.sort(key=lambda x: (-int(x.get('popularity') or 0), x['title'].lower()))

    out = ['// Каталог игр клуба ART-VR. Сгенерировано из games.json скриптом',
           '// scripts/generate-games.py — правки вносите в games.json.',
           '',
           'export type GameGenre =',
           '  | ' + '\n  | '.join("'%s'" % k for k in GENRE_LABELS),
           '  ;',
           '',
           'export type GamePlatform = %s;' % ' | '.join("'%s'" % k for k in PLATFORM_LABELS),
           '',
           'export interface Game {',
           '  title: string;',
           '  slug: string;',
           '  description: string;',
           '  genre: GameGenre;',
           '  platforms: GamePlatform[];',
           '  players: string;',
           '  age: string;',
           '  playtime: string;',
           '  maxPlayers: number;',
           '  /** Популярность 0–100: каталог отсортирован по ней. */',
           '  popularity: number;',
           '  image?: string;',
           '  /** Обложка 600×750 для страницы игры. */',
           '  cover?: string;',
           '  youtube?: string;',
           '}',
           '',
           'export const genreLabels: Record<GameGenre, string> = {']
    for k, v in GENRE_LABELS.items():
        out.append("  %s: '%s'," % (k, v))
    out += ['};', '', 'export const platformLabels: Record<GamePlatform, string> = {']
    for k, v in PLATFORM_LABELS.items():
        out.append("  %s: '%s'," % (k, v))
    out += ['};', '', 'export const games: Game[] = [']

    for it in items:
        out.append('  {')
        out.append("    title: '%s'," % esc(it['title']))
        out.append("    slug: '%s'," % it['slug'])
        out.append("    description:\n      '%s'," % esc(it['description']))
        out.append("    genre: '%s'," % it['genre'])
        out.append('    platforms: [%s],' % ', '.join("'%s'" % p for p in it['platforms']))
        out.append("    players: '%s'," % esc(it.get('players', '')))
        out.append("    age: '%s'," % esc(it.get('age', '')))
        out.append("    playtime: '%s'," % esc(it.get('playtime', '')))
        out.append('    maxPlayers: %d,' % it['maxPlayers'])
        out.append('    popularity: %d,' % int(it.get('popularity') or 0))
        if it.get('image'):
            out.append("    image: '%s'," % it['image'])
        if it.get('cover') and it.get('image'):
            out.append("    cover: '%s'," % it['cover'])
        if it.get('youtube'):
            out.append("    youtube: '%s'," % it['youtube'])
        out.append('  },')
    out += ['];', '']
    io.open(os.path.join(OUT_DIR, 'games-data.ts'), 'w',
            encoding='utf-8', newline='\n').write('\n'.join(out))

    # Отдельная сводка, чтобы главная не тянула весь каталог в клиентский бандл.
    counts = Counter(x['genre'] for x in items)
    summary = ['// Сводка по каталогу игр. Сгенерировано вместе с games-data.ts.',
               '',
               'export const catalogSummary = {',
               '  total: %d,' % len(items),
               '  coop: %d,' % sum(1 for x in items if x['maxPlayers'] > 1),
               '  byGenre: [']
    for key, label in GENRE_LABELS.items():
        summary.append("    { label: '%s', count: %d }," % (label, counts.get(key, 0)))
    summary += ['  ],', '} as const;', '']
    io.open(os.path.join(OUT_DIR, 'games-summary.ts'), 'w',
            encoding='utf-8', newline='\n').write('\n'.join(summary))

    hidden = Counter(g['status'] for g in games if g['status'] != 'published')
    print('В каталоге: %d игр (%d на шлемах). В списке: %d, скрыто: %s' % (
        len(items), sum(1 for x in items if 'standalone' in x['platforms']), len(games),
        ', '.join('%s %d' % kv for kv in sorted(hidden.items()))))


if __name__ == '__main__':
    main()
