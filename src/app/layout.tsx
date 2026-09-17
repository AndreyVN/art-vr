import type { Metadata } from 'next';
import { MotionProvider } from '@/components/MotionProvider';
import '../styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://art-vr.ru'),
  title: 'ART-VR — Клуб виртуальной реальности в Омске',
  description:
    '10 игровых зон с VR шлемами Meta Quest 3 последнего поколения, более 70 игр. Идеально для корпоративов, дней рождения и отдыха с друзьями. Омск, ул. 10 лет Октября, 40.',
  keywords: [
    'VR клуб',
    'виртуальная реальность',
    'Омск',
    'ART-VR',
    'VR игры',
    'Meta Quest 3',
    'корпоратив',
    'день рождения',
    'Beat Saber',
    'Half-Life Alyx',
  ],
  authors: [{ name: 'ART-VR' }],
  creator: 'ART-VR',
  openGraph: {
    title: 'ART-VR — Клуб виртуальной реальности в Омске',
    description:
      '10 игровых зон, VR шлемы Meta Quest 3, более 70 игр. Корпоративы, дни рождения, вечерние сеансы.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ART-VR',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://art-vr.ru',
  },
  other: {
    'yandex-verification': '',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
