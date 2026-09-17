export const site = {
  name: 'ART-VR',
  url: 'https://art-vr.ru',
  phone: '+7 (960) 990-00-50',
  phoneHref: 'tel:+79609900050',
  email: 'info@art-vr.ru',
  emailHref: 'mailto:info@art-vr.ru',
  address: 'г. Омск, ул. 10 лет Октября, 40',
  city: 'Омск',
  /** Правила посещения: страница с текстом и исходный документ клуба. */
  rules: {
    page: '/pravila',
    pdf: '/docs/art-vr-pravila-poseshcheniya.pdf',
    title: 'Правила посещения и техника безопасности',
  },
  hours: [
    { days: 'Пн-Пт', time: '12:00 – 21:00' },
    { days: 'Сб-Вс', time: '11:00 – 21:00' },
  ],
} as const;
