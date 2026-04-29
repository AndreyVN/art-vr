import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              ART-VR
            </span>
            <p className="text-gray-400 mt-4">
              Клуб виртуальной реальности в Омске. Погрузитесь в мир невероятных приключений!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>г. Омск, ул. 10 лет Октября, 40</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+79609900050" className="hover:text-white transition-colors">
                  +7 (960) 990-00-50
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@art-vr.ru" className="hover:text-white transition-colors">
                  info@art-vr.ru
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Время работы</h3>
            <div className="flex items-start gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <div>Пн-Пт: 12:00 – 21:00</div>
                <div>Сб-Вс: 11:00 – 21:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ART-VR. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
