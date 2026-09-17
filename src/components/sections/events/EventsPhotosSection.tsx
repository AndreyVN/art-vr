'use client';

import Image from 'next/image';

// Фото клуба (4, 6, 9, 18, 21 из подборки), подходящие под тему мероприятий:
// компания в зале, большой зал, праздничный торт, зона PS5, лаунж для праздников.
const photos = [
  { src: '/images/gallery/play-group.jpg', alt: 'Компания играет в VR-шлемах в игровом зале', w: 1448, h: 1086 },
  { src: '/images/gallery/hall-players.jpg', alt: 'Игроки в VR-шлемах в большом зале клуба', w: 1600, h: 876 },
  { src: '/images/gallery/party-cake.jpg', alt: 'Праздничный торт со свечами на дне рождения в клубе', w: 1122, h: 1402 },
  { src: '/images/gallery/ps5-games.jpg', alt: 'Зона PlayStation 5 с играми на большом экране', w: 1600, h: 1200 },
  { src: '/images/gallery/lounge.jpg', alt: 'Лаунж-зона клуба со столом для праздников', w: 1600, h: 1200 },
];

export function EventsPhotosSection() {
  return (
    <section id="events-photos" className="py-20" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Фото с </span>
            <span style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              мероприятий
            </span>
          </h2>
          <p className="text-lg" style={{ color: '#a0aec0' }}>
            Как проходят праздники и вечеринки в ART-VR
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
          {photos.map((p) => (
            <div
              key={p.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              style={{ border: '1px solid rgba(246,51,154,0.15)' }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
