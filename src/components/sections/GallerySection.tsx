'use client';

import Link from 'next/link';
import { m } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { galleryPhotos } from '@/lib/gallery-data';
import { PhotoGallery } from '@/components/gallery/PhotoGallery';

const homePhotos = galleryPhotos.filter((p) => p.home);

export function GallerySection() {
  return (
    <section id="gallery" className="py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Фото в{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              клубе
            </span>
          </h2>
        </m.div>

        <PhotoGallery photos={homePhotos} />

        <div className="text-center mt-8">
          <Link
            href="/foto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800/60 border border-blue-500/20 rounded-full text-gray-300 hover:border-pink-500/50 hover:text-white transition-all"
          >
            Смотреть все фото
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
