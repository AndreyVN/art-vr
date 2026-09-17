import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileDown, TriangleAlert } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Правила посещения и техника безопасности — VR-клуб ART-VR, Омск',
  description:
    'Правила посещения клуба виртуальной реальности ART-VR в Омске: медицинские противопоказания и ограничения, условия допуска, порядок в клубе и техника безопасности во время игры. Документ в PDF.',
  alternates: { canonical: `${site.url}${site.rules.page}` },
  openGraph: {
    title: 'Правила посещения и техника безопасности — ART-VR',
    description: 'Противопоказания, условия допуска и техника безопасности в клубе виртуальной реальности.',
    type: 'article',
    locale: 'ru_RU',
    siteName: 'ART-VR',
    url: `${site.url}${site.rules.page}`,
  },
};

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: site.url },
    { '@type': 'ListItem', position: 2, name: site.rules.title },
  ],
};

// Текст документа клуба дословно: здесь только разметка — разделы, списки, выделения.

function Lead({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <strong className="text-white font-semibold">{label}</strong> {children}
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">{title}</h2>
      {children}
    </section>
  );
}

function Subsection({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28 mb-7">
      <h3 className="text-lg md:text-xl font-semibold text-pink-400 mb-3">{title}</h3>
      {children}
    </div>
  );
}

const bullets = 'list-disc pl-6 space-y-2 marker:text-pink-400';
const numbers = 'list-decimal pl-6 space-y-2 marker:text-pink-400 marker:font-semibold';

const contents = [
  { id: 'medicine', title: '1. Медицинские противопоказания и ограничения' },
  { id: 'admission', title: '2. Условия допуска и правила поведения' },
  { id: 'safety', title: '3. Техника безопасности во время игры' },
  { id: 'liability', title: '4. Ответственность' },
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Header />

      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <nav aria-label="Хлебные крошки" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300">{site.rules.title}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2">
              ПРАВИЛА ПОСЕЩЕНИЯ И ТЕХНИКА БЕЗОПАСНОСТИ
            </h1>
            <p className="text-lg text-pink-400 mb-6">в клубе виртуальной реальности ART-VR</p>
            <a
              href={site.rules.pdf}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all"
            >
              <FileDown className="w-5 h-5" />
              Скачать PDF
            </a>
          </header>

          <nav
            aria-label="Содержание"
            className="mb-10 rounded-2xl border border-blue-500/20 bg-slate-900/60 p-5"
          >
            <p className="text-sm text-gray-400 mb-2">Содержание</p>
            <ul className="space-y-1.5">
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-pink-400 hover:text-white transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-gray-300 leading-relaxed">
            <div className="mb-10 space-y-4">
              <p>
                Уважаемые гости! Оборудование виртуальной реальности (VR-шлемы, контроллеры и сопутствующие
                устройства) оказывает интенсивное воздействие на зрительные, слуховые и вестибулярные рецепторы
                человека.
              </p>
              <p>
                В соответствии со ст. 7 Закона РФ «О защите прав потребителей» (право потребителя на
                безопасность услуги) и техническими регламентами производителей VR-оборудования, администрация
                клуба устанавливает следующие обязательные правила посещения и техники безопасности.
              </p>
            </div>

            <Section id="medicine" title="1. Медицинские противопоказания и ограничения">
              <Subsection id="contraindications" title="1.1. Категорические противопоказания">
                <p className="mb-3">
                  Сеансы виртуальной реальности строго запрещены для лиц, имеющих следующие заболевания и
                  состояния:
                </p>
                <ul className={bullets}>
                  <li>Эпилепсия (включая фоточувствительную) или наличие эпилептических припадков в анамнезе;</li>
                  <li>
                    Тяжелые нарушения работы вестибулярного аппарата, склонность к сильному укачиванию
                    (кинетоз);
                  </li>
                  <li>Психические расстройства, панические атаки, повышенная тревожность, клаустрофобия;</li>
                  <li>
                    Серьезные заболевания сердечно-сосудистой системы (перенесенный инсульт, инфаркт миокарда,
                    сердечная недостаточность, тяжелые формы артериальной гипертензии, наличие
                    имплантированных кардиостимуляторов или дефибрилляторов);
                  </li>
                  <li>
                    Серьезные нарушения бинокулярного зрения, косоглазие, выраженный астигматизм и иные тяжелые
                    патологии органов зрения.
                  </li>
                </ul>
                <div className="mt-5 flex gap-3 rounded-2xl border border-amber-400/30 bg-amber-400/[0.07] p-4">
                  <TriangleAlert className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-amber-200">Важно:</strong> Администрация вправе отказать в
                    предоставлении услуги при наличии явных признаков или устных сообщений гостя о данных
                    заболеваниях. Расписки об отказе от претензий («под свою ответственность») от лиц с прямыми
                    противопоказаниями не принимаются, так как услуга в данном случае признается небезопасной.
                  </p>
                </div>
              </Subsection>

              <Subsection id="restrictions" title="1.2. Временные ограничения и особенности здоровья">
                <p className="mb-3">
                  Посещение VR-зоны не рекомендуется и может быть ограничено в следующих случаях:
                </p>
                <ul className={bullets}>
                  <li>Беременность (из-за риска падения, стресса или укачивания);</li>
                  <li>Возраст детей до 6 лет;</li>
                  <li>
                    Период применения лекарственных препаратов, влияющих на центральную нервную систему и
                    скорость реакции;
                  </li>
                  <li>
                    Наличие простудных, вирусных заболеваний, а также инфекций глаз или кожи лица (в целях
                    гигиены и безопасности);
                  </li>
                  <li>
                    Головные боли, мигрени, ушные боли, состояние эмоционального потрясения, сильное
                    переутомление или бессонница;
                  </li>
                  <li>
                    Лица с ограниченными возможностями здоровья (ОВЗ) — при наличии особенных ментальных или
                    физических состояний (в т.ч. особенности психического развития, аутизм, синдром Дауна, ДЦП,
                    нарушения работы внутренних органов, иммунитета, речи или слуха) посещение допустимо с
                    соблюдением повышенной осторожности, по усмотрению гостя (или его законных представителей)
                    и, при необходимости, в сопровождении взрослого.
                  </li>
                </ul>
              </Subsection>

              <Subsection id="responsibility" title="1.3. Юридическая ответственность и самочувствие">
                <ol className={numbers}>
                  <li>
                    Гость (или его законный представитель) обязан самостоятельно оценить состояние своего
                    здоровья (а также здоровье опекаемых им несовершеннолетних детей) перед началом сеанса и
                    несет ответственность за сокрытие информации о противопоказаниях.
                  </li>
                  <li>
                    При появлении во время игры любых симптомов недомогания (головокружение, тошнота, нарушение
                    координации, покалывание в мышцах) гость обязан немедленно прекратить сеанс и позвать
                    администратора.
                  </li>
                </ol>
              </Subsection>
            </Section>

            <Section id="admission" title="2. Условия допуска и правила поведения">
              <Subsection title="2.1. Отказ в допуске - к игре не допускаются:">
                <ul className={bullets}>
                  <li>Лица, находящиеся в состоянии алкогольного, наркотического или иного токсического опьянения;</li>
                  <li>Лица в грязной, пачкающей одежде или обуви;</li>
                  <li>Агрессивно настроенные лица, нарушающие общественный порядок.</li>
                </ul>
              </Subsection>

              <Subsection title="2.2. Порядок в клубе - в клубе запрещено:">
                <ul className={bullets}>
                  <li>
                    <Lead label="Курение и алкоголь:">
                      Употреблять алкогольные напитки, а также курить (включая электронные сигареты, вейпы и
                      системы нагревания табака);
                    </Lead>
                  </li>
                  <li>
                    <Lead label="Питание:">Выходить с едой и напитками на игровые зоны;</Lead>
                  </li>
                  <li>
                    <Lead label="Дети:">
                      Оставлять маленьких детей без присмотра. Ответственность за безопасность и поведение
                      несовершеннолетних несут их родители (законные представители);
                    </Lead>
                  </li>
                  <li>
                    <Lead label="Общественный порядок:">
                      Использовать ненормативную лексику, проявлять неуважение или создавать дискомфорт для
                      персонала и других гостей;
                    </Lead>
                  </li>
                  <li>
                    <Lead label="Животные:">Приносить с собой любых домашних животных.</Lead>
                  </li>
                </ul>
              </Subsection>
            </Section>

            <Section id="safety" title="3. Техника безопасности во время игры">
              <ol className={numbers}>
                <li>
                  <Lead label="Зона безопасности:">
                    Не выходите в процессе игры за пределы игровой зоны (обозначается виртуальной сеткой в
                    шлеме).
                  </Lead>
                </li>
                <li>
                  <Lead label="Дистанция:">
                    Запрещено подходить близко к играющим гостям. Игроки в VR-шлеме не видят окружающий
                    реальный мир и могут случайно ударить близко подошедшего.
                  </Lead>
                </li>
                <li>
                  <Lead label="Использование оборудования:">
                    Запрещено самостоятельно надевать, снимать или перемещать VR-шлемы, наушники и контроллеры
                    без разрешения и инструктажа администратора.
                  </Lead>
                </li>
                <li>
                  <Lead label="Сохранность имущества:">
                    Запрещено портить мебель, оборудование, элементы интерьера, прикасаться к элементам
                    электросети, а также вмешиваться в работу ПК, электросети, программного обеспечения и
                    настроек оборудования. Запрещено мусорить в помещениях и на прилегающей территории.
                  </Lead>
                </li>
              </ol>
            </Section>

            <Section id="liability" title="4. Ответственность">
              <ol className={numbers}>
                <li>
                  В случае умышленного или неосторожного повреждения оборудования и имущества клуба по вине
                  гостя, ущерб возмещается гостем (или его законными представителями) в полном объеме в
                  соответствии с законодательством РФ (п.1 ст. 1064 Гражданского кодекса РФ).
                </li>
                <li>
                  Администрация не несет ответственности за неблагоприятные последствия для здоровья гостя,
                  возникшие в результате сокрытия им медицинских противопоказаний или нарушения техники
                  безопасности.
                </li>
              </ol>
            </Section>

            <p className="text-lg text-white font-medium">
              Спасибо за понимание и соблюдение правил! Желаем вам приятного отдыха и ярких впечатлений!
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              На главную
            </Link>
            <a
              href={site.rules.pdf}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Правила в PDF
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
