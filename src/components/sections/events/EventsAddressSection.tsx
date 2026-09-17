'use client';

import { m } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const cards = [
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    iconBg: 'linear-gradient(135deg,#f6339a,#155dfc)',
    cardBg: 'linear-gradient(135deg,#2b7fff,#f6339a)',
    title: 'Адрес',
    lines: ['улица 10 лет Октября, 40', 'Омск, Россия'],
  },
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    iconBg: 'linear-gradient(135deg,#2b7fff,#9810fa)',
    cardBg: 'linear-gradient(135deg,#2b7fff,#f6339a)',
    title: 'Телефон',
    lines: ['+7 (960) 990-00-50'],
    href: 'tel:+79609900050',
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    iconBg: 'linear-gradient(135deg,#ad46ff,#e60076)',
    cardBg: 'linear-gradient(135deg,#2b7fff,#f6339a)',
    title: 'Режим работы',
    lines: ['Пн-Пт: 12:00 – 21:00', 'Сб-Вс: 11:00 – 21:00'],
  },
];

export function EventsAddressSection() {
  return (
    <section id="events-address" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-white">Как нас </span>
            <span style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              найти?
            </span>
          </h2>
          <p style={{ color: '#99a1af' }}>Мы находимся в центре Омска</p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <m.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px]"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=73.368782%2C54.990692&z=16&pt=73.368782,54.990692,pm2rdm"
              width="100%"
              height="100%"
              style={{ border: 'none', minHeight: 320 }}
              title="ART-VR на карте"
              loading="lazy"
            />
          </m.div>

          {/* Info cards */}
          <m.div
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: card.cardBg, opacity: 1 }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: card.iconBg }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  {card.href ? (
                    <a href={card.href} className="text-white font-bold hover:opacity-80 transition-opacity">
                      {card.lines[0]}
                    </a>
                  ) : (
                    card.lines.map((line) => (
                      <p key={line} className="text-white/80 text-sm">{line}</p>
                    ))
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://yandex.ru/maps/?rtext=~54.990692,73.368782&rtt=auto"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-5 flex items-center justify-center gap-3 text-white font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)' }}
            >
              <Navigation className="w-5 h-5" />
              Построить маршрут
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
}
