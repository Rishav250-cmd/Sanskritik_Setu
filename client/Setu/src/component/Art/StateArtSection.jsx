import React, { useId, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { artByState } from '../../data/artData'
import useReveal from '../../hooks/useReveal'

function StateCard({ state }) {
  const [open, setOpen] = useState(false)
  const contentId = useId()
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="relative h-40 sm:h-48 w-full overflow-hidden">
        <img
          src={state.image}
          alt={`Artistic heritage of ${state.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-white font-semibold text-lg tracking-tight">{state.name}</h3>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
      >
        <span className="text-sm text-white/60 line-clamp-1">{state.blurb}</span>
        <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/80">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      {open && (
        <div id={contentId} className="px-4 pb-4 pt-1 border-t border-white/10 space-y-2 text-sm animate-[fadeIn_0.4s_ease-out]">
          <p className="text-white/70">
            <span className="text-amber-200/80 font-medium">Craft — </span>
            {state.craft}
          </p>
          <p className="text-white/70">
            <span className="text-amber-200/80 font-medium">Music & Dance — </span>
            {state.musicDance}
          </p>
          <p className="text-white/70">
            <span className="text-amber-200/80 font-medium">Textile — </span>
            {state.textile}
          </p>
        </div>
      )}
    </div>
  )
}

function StateArtSection() {
  return (
    <section id="explore-by-state" className="px-5 sm:px-10 lg:px-20 py-20">
      <header className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Explore by State</h2>
        <p className="mt-3 text-white/60">
          India is not one artistic tradition — it is thousands of regional stories told through paint, craft,
          rhythm, movement, thread and fabric. Browse all 28 states below.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {artByState.map((state) => (
          <StateCard key={state.name} state={state} />
        ))}
      </div>
    </section>
  )
}

export default StateArtSection
