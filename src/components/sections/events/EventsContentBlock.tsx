'use client';

const features = [
  {
    title: 'Современное VR-оборудование',
    text: 'Мы работаем только на актуальном оборудовании Meta Quest 3 и Meta Quest 3S. Беспроводные шлемы последнего поколения дают полную свободу движений — никаких запутанных проводов.',
    badge: 'Meta Quest 3',
    accent: '#f6339a',
  },
  {
    title: 'Игровая зона',
    text: '10 отдельных игровых зон: приходите большой компанией и делитесь на небольшие команды — каждая выбирает свою игру и играет, не мешая другим. В каталоге больше 70 игр, включая большой выбор детских — от весёлых симуляторов до хорроров.',
    badge: null,
    accent: '#2b7fff',
  },
  {
    title: 'Minecraft, Roblox и Gorilla Tag',
    text: 'Наше УТП в Омске: популярные у детей и подростков игры прямо в виртуальной реальности — до 10 человек в одном мире одновременно. Идеально для больших компаний, такого больше нигде в городе нет.',
    badge: 'Только у нас',
    accent: '#22c55e',
  },
  {
    title: 'PlayStation 5',
    text: 'В нашей лаунж-зоне — PS5 с четырьмя джойстиками. В библиотеке — FIFA, Mortal Kombat, METRO, UFC, It Takes Two и другие хиты.',
    badge: null,
    accent: '#ad46ff',
  },
  {
    title: 'Мощные игровые ПК',
    text: 'Зоны работают на связке VR-шлем + мощный ПК: топовая графика и тактические шутеры уровня Pavlov и Arizona Sunshine — куда реалистичнее того, что крутят на обычных VR-аренах. Никаких лагов, фризов и долгих загрузок.',
    badge: null,
    accent: '#ff006b',
  },
  {
    title: 'Зона отдыха с PS5 и настолками',
    text: 'Лаунж-зона с PS5, настолками и диваном. Можно выдохнуть, обсудить прошедший раунд, выпить чай или перекусить пиццей между сессиями.',
    badge: null,
    accent: '#00b4d8',
  },
];

export function EventsContentBlock() {
  return (
    <section id="events-content" className="py-20" style={{ backgroundColor: '#020618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ background: 'linear-gradient(90deg,#f6339a,#2b7fff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Организуем любое мероприятие!
            </span>
          </h2>
          <p className="text-xl text-white">Для этого у нас есть всё необходимое:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl p-8 flex flex-col gap-4"
              style={{
                backgroundColor: '#0f1629',
                borderLeft: `4px solid ${f.accent}`,
                boxShadow: `0 0 24px ${f.accent}22`,
              }}
            >
              {f.badge && (
                <span
                  className="self-start text-xs font-bold px-3 py-1 rounded-full text-white mb-1"
                  style={{ background: `linear-gradient(90deg,#ff006b,#7928ca)` }}
                >
                  {f.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#a0aec0' }}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
