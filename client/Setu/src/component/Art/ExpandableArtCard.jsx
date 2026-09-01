import React, { useId, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import useReveal from '../../hooks/useReveal'

/**
 * Generic expandable card: large image, eyebrow/number, title, subtitle,
 * a +/- toggle, and a smoothly animated content panel.
 */
function ExpandableArtCard({ eyebrow, title, subtitle, image, alt, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelRef = useRef(null)
  const contentId = useId()
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/40 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative h-64 sm:h-80 md:h-[26rem] w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        {eyebrow && (
          <span className="absolute top-5 left-5 text-xs tracking-[0.25em] text-amber-200/90 font-semibold">
            {eyebrow}
          </span>
        )}
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70"
      >
        <span>
          <span className="block text-lg sm:text-2xl font-semibold text-white tracking-tight">{title}</span>
          {subtitle && <span className="block mt-1 text-sm text-white/60">{subtitle}</span>}
        </span>
        <span className="shrink-0 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition-colors group-hover:border-amber-200/60">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        id={contentId}
        ref={panelRef}
        style={{
          maxHeight: open ? panelRef.current?.scrollHeight ?? 2000 : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div
          className={`px-5 sm:px-7 pb-7 pt-1 border-t border-white/10 transition-all duration-500 ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default ExpandableArtCard
