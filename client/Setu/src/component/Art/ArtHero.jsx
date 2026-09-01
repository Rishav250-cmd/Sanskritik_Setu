import React from 'react'
import useReveal from '../../hooks/useReveal'

function ArtHero() {
  const [headingRef, headingVisible] = useReveal()
  const [imgRef, imgVisible] = useReveal()

  return (
    <section className="relative min-h-[92vh] w-full flex flex-col justify-center px-5 sm:px-10 lg:px-20 pt-32 pb-16 overflow-hidden">
      {/* ambient background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-rose-800/10 blur-3xl" />

      <div
        ref={headingRef}
        className={`relative z-10 max-w-4xl transition-all duration-1000 ease-out ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xs sm:text-sm tracking-[0.35em] text-amber-200/80 font-semibold mb-4">
          SANSKRITIK SETU · ART & EXPRESSIONS
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
          Art &amp; Expressions
        </h1>
        <p
          className={`mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed transition-all duration-1000 delay-200 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Where every stroke, rhythm, weave and movement tells a story of India.
        </p>
      </div>

      {/* Layered hero imagery — main frame + floating accents */}
      <div
        ref={imgRef}
        className={`relative z-10 mt-14 h-[22rem] sm:h-[28rem] lg:h-[34rem] w-full max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          imgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
          <img
            src="https://picsum.photos/seed/art-expressions-hero/1600/900"
            alt="A layered composition of Indian folk painting, handwoven textile and traditional dance"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        <img
          src="https://picsum.photos/seed/art-hero-float-1/500/500"
          alt="Close-up of traditional handloom weaving"
          loading="lazy"
          className="hidden md:block absolute -left-10 -bottom-10 h-40 w-40 lg:h-52 lg:w-52 rounded-2xl object-cover border border-white/15 shadow-2xl shadow-black/60 animate-[float_6s_ease-in-out_infinite]"
        />
        <img
          src="https://picsum.photos/seed/art-hero-float-2/500/500"
          alt="A folk dancer mid-performance"
          loading="lazy"
          className="hidden md:block absolute -right-8 -top-10 h-32 w-32 lg:h-44 lg:w-44 rounded-2xl object-cover border border-white/15 shadow-2xl shadow-black/60 animate-[float_7s_ease-in-out_infinite]"
        />
      </div>
    </section>
  )
}

export default ArtHero
