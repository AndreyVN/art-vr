'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/lib/events-content';


export function EventsFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="events-faq" className="py-10 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <m.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wide"
            style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
        </m.div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={{ y: 16 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl text-left transition-all"
                style={{
                  background: open === i ? 'rgba(246,51,154,0.08)' : 'rgba(255,255,255,0.04)',
                  border: open === i ? '1px solid rgba(246,51,154,0.3)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-white font-medium">{faq.q}</span>
                <span className="flex-shrink-0 text-pink-400">
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pt-3 pb-5 rounded-b-2xl -mt-2" style={{ background: 'rgba(246,51,154,0.04)', border: '1px solid rgba(246,51,154,0.15)', borderTop: 'none' }}>
                      <p className="text-sm leading-relaxed" style={{ color: '#99a1af' }}>{faq.a}</p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
