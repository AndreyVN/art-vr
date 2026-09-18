// Галерея «Фото в клубе» ART-VR. Оригиналы клуба, ресайз до 1600px по длинной стороне.

export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Показывать в тизере на главной (иначе — только на странице /foto). */
  home?: boolean;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: '/images/gallery/play-hero.jpg',
    alt: 'Гость в VR-шлеме играет под неоновым логотипом ART-VR',
    width: 1087,
    height: 1447,
  },
  {
    src: '/images/gallery/play-girl.jpg',
    alt: 'Девушка в VR-шлеме с контроллером у неоновой стены ART-VR',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/party-cake.jpg',
    alt: 'Праздничный торт со свечами на дне рождения в клубе ART-VR',
    width: 1122,
    height: 1402,
  },
  {
    src: '/images/gallery/hall-players.jpg',
    alt: 'Игроки в VR-шлемах в большом зале клуба с неоновой подсветкой',
    width: 1600,
    height: 876,
    home: true,
  },
  {
    src: '/images/gallery/play-solo.jpg',
    alt: 'Гость в VR-шлеме играет в игровом зале клуба',
    width: 1086,
    height: 1448,
  },
  {
    src: '/images/gallery/play-friends.jpg',
    alt: 'Двое друзей играют в VR-шлемах у неонового логотипа ART-VR',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/play-hall.jpg',
    alt: 'Гость в VR-шлеме в зале с неоновой подсветкой',
    width: 900,
    height: 1600,
  },
  {
    src: '/images/gallery/hall-neon.jpg',
    alt: 'Игровой зал клуба ART-VR с неоновой подсветкой по периметру',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/play-pair.jpg',
    alt: 'Двое гостей в VR-шлемах во время игры',
    width: 900,
    height: 1600,
  },
  {
    src: '/images/gallery/play-group.jpg',
    alt: 'Компания играет в VR-шлемах в игровом зале',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/play-teen.jpg',
    alt: 'Подросток играет в VR с контроллерами в руках',
    width: 1086,
    height: 1448,
  },
  {
    src: '/images/gallery/headsets-neon.jpg',
    alt: 'Беспроводные шлемы Meta Quest 3 под неоновым логотипом ART-VR',
    width: 1600,
    height: 1200,
  },
  {
    src: '/images/gallery/lounge.jpg',
    alt: 'Лаунж-зона клуба со столом для праздников и PlayStation 5',
    width: 1600,
    height: 1200,
    home: true,
  },
  {
    src: '/images/gallery/play-action.jpg',
    alt: 'Гость в VR-шлеме в динамичной игре с разведёнными руками',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/play-neon.jpg',
    alt: 'Гости в VR-шлемах у неонового логотипа ART-VR',
    width: 1448,
    height: 1086,
  },
  {
    src: '/images/gallery/play-duo.jpg',
    alt: 'Двое гостей играют в VR-шлемах в игровом зале',
    width: 1600,
    height: 900,
    home: true,
  },
  {
    src: '/images/gallery/hall-interior.jpg',
    alt: 'Интерьер игрового зала с неоновой подсветкой',
    width: 1600,
    height: 1200,
    home: true,
  },
  {
    src: '/images/gallery/ps5-pad.jpg',
    alt: 'Геймпад PlayStation 5 в зоне отдыха клуба',
    width: 1280,
    height: 960,
  },
];
