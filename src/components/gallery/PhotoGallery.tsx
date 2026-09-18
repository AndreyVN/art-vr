'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { m, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryPhoto } from '@/lib/gallery-data';

/** Масонри-сетка фотографий с лайтбоксом (стрелки/Esc, блокировка прокрутки). */
export function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    // Пока открыт лайтбокс, страница под ним не должна прокручиваться.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setOpenIndex(index)}
            className="group relative block w-full mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-blue-500/20 hover:border-pink-500/50 transition-all cursor-zoom-in"
            aria-label={`Открыть фото: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр фотографии"
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <m.figure
              key={current.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                priority
              />
              <figcaption className="text-center text-gray-400 mt-4">
                {current.alt}
                <span className="text-gray-600 ml-2">
                  {(openIndex ?? 0) + 1} / {photos.length}
                </span>
              </figcaption>
            </m.figure>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
