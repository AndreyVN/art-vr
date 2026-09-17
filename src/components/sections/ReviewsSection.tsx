'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Павел Соболев',
    avatar: 'https://images.unsplash.com/photo-1760574755798-325e4efec716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzQ5MjAwN3ww&ixlib=rb-4.1.0&q=80&w=400',
    border: 'border-blue-500/20',
    avatarBorder: 'border-pink-500/50',
    quoteColor: 'text-pink-500/20',
    text: 'Отличное место для отдыха с друзьями! Современное оборудование, огромный выбор игр. Особенно понравился Beat Saber. Персонал очень дружелюбный и помогает разобраться новичкам. Обязательно вернусь!',
  },
  {
    name: 'Сергей Козырев',
    avatar: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzQ3MzE2Mnww&ixlib=rb-4.1.0&q=80&w=400',
    border: 'border-pink-500/30',
    avatarBorder: 'border-blue-500/50',
    quoteColor: 'text-blue-500/20',
    text: 'Провели корпоратив в ART-VR и все были в восторге! Организация на высшем уровне, удобная зона отдыха, отличный сервис. Half-Life: Alyx просто поразила реалистичностью. Рекомендую для любых мероприятий!',
  },
  {
    name: 'Юлия К.',
    avatar: 'https://images.unsplash.com/photo-1748344386932-f0b9c7b925e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzQyODA4OHww&ixlib=rb-4.1.0&q=80&w=400',
    border: 'border-blue-500/20',
    avatarBorder: 'border-purple-500/50',
    quoteColor: 'text-purple-500/20',
    text: 'Праздновали день рождения сына в ART-VR. Дети в полном восторге! Шлемы Meta Quest 3 удобные даже для детей, игры интересные и разнообразные. Зона отдыха просторная, можно принести свой торт. Спасибо за праздник!',
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Отзывы наших{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              гостей
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Что говорят о нас наши клиенты</p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br from-slate-800 to-slate-900 border ${review.border} rounded-2xl p-6 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/20 transition-all`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={64}
                  height={64}
                  className={`rounded-full object-cover border-2 ${review.avatarBorder}`}
                />
                <div>
                  <h3 className="text-white font-bold text-lg">{review.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className={`absolute -top-2 -left-2 w-8 h-8 ${review.quoteColor}`} />
                <p className="text-gray-300 leading-relaxed pl-6">{review.text}</p>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">Присоединяйтесь к сотням довольных гостей!</p>
        </m.div>
      </div>
    </section>
  );
}
