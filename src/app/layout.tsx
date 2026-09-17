import type { Metadata } from 'next';
import { MotionProvider } from '@/components/MotionProvider';
import '../styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://art-vr.ru'),
  title: 'VR-клуб ART-VR в Омске — виртуальная реальность для детей и взрослых',
  description:
    'Клуб виртуальной реальности в Омске: 10 игровых зон, шлемы Meta Quest 3, более 70 игр. Дни рождения, корпоративы и отдых для детей и взрослых. Ул. 10 лет Октября, 40. Запись: +7 (960) 990-00-50.',
  keywords: [
    'vr клуб омск',
    'клуб виртуальной реальности омск',
    'виртуальная реальность омск',
    'виртуальная реальность для детей омск',
    'vr игры омск',
    'vr арена омск',
    'ART-VR',
    'Meta Quest 3',
    'день рождения в омске',
    'корпоратив в омске',
  ],
  authors: [{ name: 'ART-VR' }],
  creator: 'ART-VR',
  openGraph: {
    title: 'VR-клуб ART-VR в Омске — виртуальная реальность для детей и взрослых',
    description:
      '10 игровых зон, шлемы Meta Quest 3, более 70 игр. Дни рождения, корпоративы и отдых для детей и взрослых. Омск, ул. 10 лет Октября, 40.',
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
