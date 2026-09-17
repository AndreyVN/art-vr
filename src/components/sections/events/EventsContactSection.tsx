'use client';

import { m } from 'motion/react';
import { Phone, MessageCircle, Calendar, MapPin } from 'lucide-react';

export function EventsContactSection() {
  return (
    <section id="events-contact" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Забронировать{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              мероприятие
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — ответим и поможем всё организовать
          </p>
        </m.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <m.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a
              href="tel:+79609900050"
              className="flex items-center gap-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-blue-500/60 rounded-2xl p-6 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Позвонить</p>
                <p className="text-white text-xl font-bold">+7 (960) 990-00-50</p>
              </div>
            </a>

            <a
              href="https://wa.me/79609900050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-500/60 rounded-2xl p-6 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/30">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                <p className="text-white text-xl font-bold">Написать в WhatsApp</p>
              </div>
            </a>

            <div className="flex items-center gap-5 bg-slate-800/50 border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Адрес</p>
                <p className="text-white font-semibold">г. Омск, ул. 10 лет Октября, 40</p>
                <p className="text-gray-400 text-sm mt-1">Пн–Пт: 12:00–21:00 · Сб–Вс: 11:00–21:00</p>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ x: 30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-purple-400" />
              Оставить заявку
            </h3>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const phone = (e.currentTarget.elements.namedItem('phone') as HTMLInputElement)?.value;
                window.location.href = `tel:${phone}`;
              }}
            >
              <div>
                <label className="block text-gray-400 text-sm mb-2">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Иван Иванов"
                  className="w-full bg-slate-800/70 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-slate-800/70 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Тип мероприятия</label>
                <select
                  name="type"
                  className="w-full bg-slate-800/70 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-gray-300 outline-none transition-colors"
                >
                  <option value="">Выберите тип</option>
                  <option>Корпоратив</option>
                  <option>День рождения</option>
                  <option>Вечеринка</option>
                  <option>Выпускной</option>
                  <option>Турнир</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Количество человек</label>
                <input
                  type="number"
                  name="people"
                  placeholder="10"
                  min="1"
                  className="w-full bg-slate-800/70 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/40 transition-all"
              >
                Отправить заявку
              </button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
