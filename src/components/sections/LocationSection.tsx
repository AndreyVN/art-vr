'use client';

import { m } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Как нас{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              найти?
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Мы находимся в центре Омска</p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e3b3e3f3f3f3f3f3f3f3f3f3f3f3f3f&amp;source=constructor"
                width="100%"
                height="400"
                loading="lazy"
                className="w-full h-[400px]"
                title="Карта расположения ART-VR"
              />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Адрес</h3>
                  <p className="text-gray-300 text-lg">улица 10 лет Октября, 40</p>
                  <p className="text-gray-400">Омск, Россия</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
                  <a
                    href="tel:+79609900050"
                    className="text-gray-300 text-lg hover:text-pink-400 transition-colors"
                  >
                    +7 (960) 990-00-50
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Режим работы</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Пн-Пт: 12:00 – 21:00</p>
                    <p>Сб-Вс: 11:00 – 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://yandex.ru/maps/?text=Омск+ул.+10+лет+Октября+40"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Построить маршрут
            </a>
          </m.div>
        </div>
      </div>
    </section>
  );
}
