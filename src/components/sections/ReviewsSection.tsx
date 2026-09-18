'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { reviews, reviewsAggregate } from '@/lib/reviews-data';
import { ReviewCard } from '@/components/reviews/ReviewCard';

const homeReviews = reviews.filter((r) => r.home);

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Отзывы наших{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              гостей
            </span>
          </h2>
          <a
            href={reviewsAggregate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900/70 border border-blue-500/20 rounded-full px-5 py-2.5 hover:border-pink-500/50 transition-all"
          >
            <span className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </span>
            <span className="text-white font-bold">5,0</span>
            <span className="text-gray-400 text-sm">
              {reviewsAggregate.ratingsCount} оценок на {reviewsAggregate.source}
            </span>
          </a>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeReviews.map((review, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard review={review} clamp />
            </m.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/otzyvy"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800/60 border border-blue-500/20 rounded-full text-gray-300 hover:border-pink-500/50 hover:text-white transition-all"
          >
            Все отзывы
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
