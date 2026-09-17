'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { Gift, Sparkles } from 'lucide-react';

const nominals = ['1200', '2400', '3600'];

export function CertificatesSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="certificates" className="py-20 bg-slate-950">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-pink-900/20 via-slate-900 to-blue-900/20 border-2 border-pink-500/40 rounded-3xl p-6 md:p-12 shadow-2xl shadow-pink-500/20 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Gift className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Подарочные{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                    сертификаты
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Дарите нереальные эмоции в виртуальной реальности своим близким
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {nominals.map((nominal, index) => (
                    <m.div
                      key={nominal}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-900/70 border border-blue-500/20 rounded-2xl p-3 sm:p-5 hover:border-pink-500/50 transition-all"
                    >
                      <Sparkles className="w-5 h-5 text-pink-400 mx-auto mb-3" />
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                          {nominal}
                        </span>
                        <span className="text-gray-400 text-sm sm:text-lg mb-0.5">₽</span>
                      </div>
                    </m.div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all inline-flex items-center gap-2"
                >
                  <Gift className="w-5 h-5" />
                  Заказать сертификат
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <Image
                  src="/images/gift-certificates.jpg"
                  alt="Подарочные сертификаты ART-VR номиналом 1200, 2400 и 3600 рублей"
                  width={960}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
