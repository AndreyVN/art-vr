import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { games } from '@/lib/games-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/games`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/games/dlya-detey`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${site.url}/events`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/foto`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${site.url}/sertifikaty`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${site.url}/oborudovanie`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${site.url}${site.rules.page}`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    // Каждая игра — отдельный адрес, иначе поиск видит только один общий каталог.
    ...games.map((game) => ({
      url: `${site.url}/games/${game.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
