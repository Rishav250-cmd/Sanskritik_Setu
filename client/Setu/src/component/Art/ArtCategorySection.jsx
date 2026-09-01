import React from 'react'
import { categories } from '../../data/artData'
import ExpandableArtCard from './ExpandableArtCard'

function ItemGrid({ items, title }) {
  if (!items?.length) return null
  return (
    <div className="mt-6">
      {title && <h4 className="text-sm tracking-[0.2em] text-amber-200/80 font-semibold mb-4">{title}</h4>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-black/30 overflow-hidden hover:border-amber-200/40 transition-colors"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <p className="text-white font-semibold text-sm">{item.name}</p>
              <p className="text-amber-200/70 text-xs mt-0.5">{item.region}</p>
              {item.material && <p className="text-white/50 text-xs mt-1">{item.material}</p>}
              <p className="text-white/60 text-xs mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArtCategorySection() {
  return (
    <section className="px-5 sm:px-10 lg:px-20 py-20 space-y-10">
      <header className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Explore the Traditions</h2>
        <p className="mt-3 text-white/60">
          Four windows into India's living artistic heritage — tap a card to go deeper.
        </p>
      </header>

      {categories.map((cat) => (
        <ExpandableArtCard
          key={cat.id}
          eyebrow={cat.number}
          title={cat.title}
          subtitle={cat.tagline}
          image={cat.image}
          alt={`${cat.title} — ${cat.tagline}`}
        >
          <p className="text-white/70 leading-relaxed max-w-3xl">{cat.description}</p>

          {cat.items && <ItemGrid items={cat.items} />}
          {cat.music && <ItemGrid items={cat.music} title="Folk Music" />}
          {cat.dance && <ItemGrid items={cat.dance} title="Folk Dance" />}

          <a
            href="#explore-by-state"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-amber-200 hover:text-amber-100 transition-colors"
          >
            Explore regional traditions →
          </a>
        </ExpandableArtCard>
      ))}
    </section>
  )
}

export default ArtCategorySection
