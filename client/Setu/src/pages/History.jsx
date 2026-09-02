import React from 'react'

const eraLinks = [
  { id: 'ancient', label: 'ANCIENT' },
  { id: 'medieval', label: 'MEDIEVAL' },
  { id: 'modern', label: 'MODERN' },
  { id: 'contemporary', label: 'CONTEMPORARY' },
]

const eras = [
  {
    id: 'ancient',
    eyebrow: 'CHAPTER 1',
    title: 'Ancient India',
    dates: 'Prehistoric era to 700 CE',
    intro:
      'From the earliest human settlements to the Gupta era, Ancient India laid the foundations of the subcontinent’s culture, philosophy, religions, and systems of governance.',
    milestones: [
      {
        title: 'Indus Valley Civilization',
        dates: 'c. 3300–1300 BCE',
        text: 'One of the world’s earliest urban civilizations, known for carefully planned cities, drainage systems, craft traditions, and long-distance trade.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIDyOfYKPU0F8dt6XnxMK7kapI9tmm-yxV03BemsborpsydUePqm4vwBm&s=10',
      },
      {
        title: 'Vedic Period',
        dates: 'c. 1500–500 BCE',
        text: 'A formative age for Vedic literature, social thought, and the rise of Buddhism and Jainism.',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rigveda_MS2097.jpg',
      },
      {
        title: 'Mauryan Empire',
        dates: 'c. 321–185 BCE',
        text: 'Ashoka’s Mauryan Empire unified much of the subcontinent and is remembered for its ideas of ethical rule and Buddhist patronage.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZeZfkKsulLuso_CG8ugZonoumg7S9BiHoi8m1eR4SghtZiuu0V_GdCU&s=10',
      },
      {
        title: 'Gupta Empire',
        dates: 'c. 320–550 CE',
        text: 'Often called a golden age, this period saw major achievements in mathematics, astronomy, literature, art, and classical learning.',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nalanda.jpg',
      },
    ],
  },
  {
    id: 'medieval',
    eyebrow: 'CHAPTER 2',
    title: 'Medieval India',
    dates: '700 CE to 1857 CE',
    intro:
      'Regional kingdoms, new political powers, and cultural exchange shaped a period of remarkable artistic, architectural, and social transformation.',
    milestones: [
      {
        title: 'Delhi Sultanate',
        dates: '1206–1526 CE',
        text: 'A succession of dynasties that established new systems of administration in northern India and contributed to a rich Indo-Islamic cultural legacy.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqtC1-ZSeWa7-lWPp7VC_R8-IfUMg5HEEsmGDp1S-rnyUuyz0ToBYnsg&s=10',
      },
      {
        title: 'Mughal Empire',
        dates: '1526–1857 CE',
        text: 'Beginning with Babur’s victory at Panipat, the Mughal era fostered influential court culture, art, and architecture, including the Taj Mahal and Red Fort.',
        image: 'https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg',
      },
      {
        title: 'Maratha and Sikh Powers',
        dates: '17th–19th centuries',
        text: 'The rise of the Maratha Empire and Sikh confederacies reshaped political power across large parts of India.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPt3PUpE1RMsA3s84F1MUzeJWxaEMayJggDYW3kVl1XJSgaQQ8UZ6ia7Mc&s=10',
      },
    ],
  },
  {
    id: 'modern',
    eyebrow: 'CHAPTER 3',
    title: 'Modern India',
    dates: '1857 CE to 1947 CE',
    intro:
      'Colonial rule, reform movements, and a powerful freedom struggle culminated in the birth of an independent democratic nation.',
    milestones: [
      {
        title: 'British Crown Rule',
        dates: '1858 onwards',
        text: 'Following the 1857 uprising, rule passed from the East India Company to the British Crown, intensifying both colonial control and resistance.',
        image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/3/1425403168342/e0a149be-2fe6-4483-9961-e23f175618ba-1595x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=683616de106bc8bdbfdd32a1a23416e4',
      },
      {
        title: 'National Movement',
        dates: '1885–1947',
        text: 'The Indian National Congress and mass movements led by Mahatma Gandhi transformed the struggle for self-rule.',
        image: 'https://charkhatales.com/cdn/shop/articles/celebrating-151-years-of-mahatma-gandhi-8916873.jpg?v=1769280122',
      },
      {
        title: 'Independence and Partition',
        dates: '15 August 1947',
        text: 'India became independent in 1947, marking the beginning of a new national journey amid the immense human consequences of Partition.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqK_l-eb3lcC2jMdfQ3Uj03SkaNUPW9zUsPdCdVgy9yegyXpGhIfvrz8&s=10',
      },
    ],
  },
  {
    id: 'contemporary',
    eyebrow: 'CHAPTER 4',
    title: 'Contemporary India',
    dates: '1947 CE to present',
    intro:
      'Independent India’s story is one of nation-building, democratic governance, economic change, and an expanding place in the world.',
    milestones: [
      {
        title: 'The Republic of India',
        dates: '26 January 1950',
        text: 'The Constitution of India came into force, establishing India as a sovereign democratic republic.',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rashtrapati Bhavan Wide New Delhi India.jpg',
      },
      {
        title: 'Economic Liberalization',
        dates: '1991',
        text: 'Economic reforms opened India more fully to global markets and accelerated new industries and opportunities.',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bombay-Stock-Exchange.jpg',
      },
      {
        title: 'India Today',
        dates: 'Present day',
        text: 'India continues to shape its future through scientific achievement, space exploration, technology, cultural influence, and democratic debate.',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/India Gate in New Delhi 03.jpg',
      },
    ],
  },
]

function History() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-20 text-white sm:px-6 lg:px-10">
      <section className="mx-auto max-w-6xl pt-8 overflow-hidden rounded-[2rem] border border-white/15 bg-black/35 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <div className="sticky top-0 z-30 border-b border-white/10 bg-black/70 px-3 py-3 backdrop-blur-md sm:px-6">
          <nav aria-label="History eras" className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {eraLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-[10px] font-semibold tracking-[0.14em] text-white/80 transition hover:border-[#ffc46b]/50 hover:bg-[#b3401f]/30 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <header className="border-b border-white/10 px-5 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-[10px] font-semibold tracking-[0.24em] text-[#ffc46b]">A JOURNEY THROUGH TIME</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">History of India</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Explore the major eras that shaped India—from its earliest civilizations to the dynamic nation it is today.
          </p>
        </header>

        <div className="divide-y divide-white/10">
          {eras.map((era) => (
            <section id={era.id} key={era.id} className="scroll-mt-16 px-5 py-10 sm:px-10 sm:py-14">
              <div className="border-l-2 border-[#ffc46b] pl-4">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#ffc46b]">{era.eyebrow}</p>
                <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">{era.title}</h2>
                <p className="mt-1 text-sm text-white/55">{era.dates}</p>
              </div>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-white/75 sm:text-base">{era.intro}</p>

              <div className="mt-7 space-y-4">
                {era.milestones.map((milestone, index) => (
                  <article
                    key={milestone.title}
                    className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:p-5 md:grid-cols-[1fr_11rem] md:items-center"
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-base font-semibold text-white sm:text-lg">{milestone.title}</h3>
                        <span className="text-xs font-medium text-[#ffc46b]">{milestone.dates}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/70">{milestone.text}</p>
                      <span className="mt-4 inline-block text-[10px] font-semibold tracking-[0.16em] text-white/50">
                        {String(index + 1).padStart(2, '0')} / {era.eyebrow}
                      </span>
                    </div>

                    {milestone.image && (
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="h-36 w-full rounded-xl border border-white/10 object-cover md:h-28"
                        loading="lazy"
                      />
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-xs italic text-white/50">
          History of India — a continuing story of many cultures, ideas, and people.
        </footer>
      </section>
    </main>
  )
}

export default History