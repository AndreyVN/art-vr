import { Star, Quote } from 'lucide-react';
import type { Review } from '@/lib/reviews-data';

/** Карточка отзыва. Аватар — кружок с первой буквой имени (без фото).
 *  clamp — обрезать текст до нескольких строк (для тизера на главной). */
export function ReviewCard({ review, clamp = false }: { review: Review; clamp?: boolean }) {
  const initial = review.author.trim().charAt(0).toUpperCase();
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {initial}
        </span>
        <div className="min-w-0">
          <h3 className="text-white font-bold truncate">{review.author}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-500 text-xs">{review.date}</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote className="absolute -top-1 -left-1 w-7 h-7 text-pink-500/20" />
        <p className={`text-gray-300 leading-relaxed pl-5 ${clamp ? 'line-clamp-6' : ''}`}>
          {review.text}
        </p>
      </div>
    </div>
  );
}
