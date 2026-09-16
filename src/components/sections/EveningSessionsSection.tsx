'use client';

import { m } from 'motion/react';
import { Gamepad2, Users, Tv, Trophy, Clock, Calendar } from 'lucide-react';

const highlights = [
  {
    icon: Gamepad2,
    title: '60+ игр',
    description: 'Чтоб скучать не пришлось',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    iconGradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'До 10 игровых зон',
    description: 'Приходите большой компанией',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    iconGradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Tv,
    title: 'PS5 для смены темпа',
    description: 'Отдохните от VR',
    border: 'border-pink-500/20 hover:border-pink-500/40',
    iconGradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: Trophy,
    title: 'Настолки',
    description: 'Если захочется отдохнуть',
    border: 'border-purple-500/20 hover:border-purple-500/40',
    iconGradient: 'from-purple-500 to-blue-500',
  },
];

export function EveningSessionsSection() {
  return (
    <section id="evening-sessions" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Вечерние{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              сеансы
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            3 часа игрового времени с 21:00 до 00:00
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-purple-900/30 via-slate-900 to-blue-900/30 border-2 border-purple-500/50 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl px-6 py-3 mb-4">
                  <p className="text-purple-300 text-sm font-semibold mb-1">💰 СПЕЦИАЛЬНАЯ ЦЕНА</p>
                  <div className="flex items-end justify-center gap-3">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      1200
                    </span>
                    <span className="text-gray-300 text-2xl mb-2">₽</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">с человека</p>
                </div>
                <p className="text-purple-300 font-semibold text-lg">🕘 21:00 - 00:00</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 border ${item.border} rounded-xl p-5 transition-all`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${item.iconGradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-yellow-300 font-semibold mb-1">⏰ Важно!</h4>
                    <p className="text-gray-300">Бронируйте время за 2-3 часа до визита</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-purple-500/30 rounded-xl p-5 text-center mb-8">
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">Минимальное бронирование:</span>{' '}
                  от 3х игровых зон
                </p>
              </div>

              <div className="text-center">
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Забронировать вечерний сеанс
                </button>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
