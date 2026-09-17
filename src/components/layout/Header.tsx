'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/** Пункт меню ведёт либо на отдельную страницу (href), либо на секцию главной (id). */
type NavLink = { label: string; href?: string; id?: string };

const navLinks: NavLink[] = [
  { label: 'Игры', href: '/games' },
  { label: 'Цены', id: 'pricing' },
  { label: 'Мероприятия', href: '/events' },
  { label: 'Фото', id: 'gallery' },
  { label: 'Сертификаты', href: '/sertifikaty' },
  { label: 'Оборудование', href: '/oborudovanie' },
  { label: 'Отзывы', id: 'reviews' },
  { label: 'Контакты', id: 'location' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenu();
  };

  /** На главной секции скроллятся, с других страниц — переход на якорь главной. */
  const sectionLink = (id: string, label: string, className: string) =>
    isHome ? (
      <button key={id} onClick={() => scrollToSection(id)} className={className}>
        {label}
      </button>
    ) : (
      <Link key={id} href={`/#${id}`} onClick={closeMenu} className={className}>
        {label}
      </Link>
    );

  const navItem = (className: string) => (link: NavLink) =>
    link.href ? (
      <Link
        key={link.href}
        href={link.href}
        onClick={closeMenu}
        aria-current={pathname === link.href ? 'page' : undefined}
        className={`${className} ${pathname === link.href ? 'text-white' : ''}`}
      >
        {link.label}
      </Link>
    ) : (
      sectionLink(link.id as string, link.label, className)
    );

  const bookingClass =
    'px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all whitespace-nowrap';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            ART-VR
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map(navItem('text-gray-300 hover:text-white transition-colors'))}
            {sectionLink('contact', 'Забронировать', bookingClass)}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden text-white"
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-blue-500/20">
            <div className="flex flex-col gap-4">
              {navLinks.map(navItem('text-gray-300 hover:text-white transition-colors text-left'))}
              {sectionLink('contact', 'Забронировать', `${bookingClass} text-left`)}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
