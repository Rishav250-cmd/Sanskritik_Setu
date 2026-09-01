import React from 'react'
import India from '../component/Home/indiaimg.png'
import India2 from '../component/Home/indiaimg2.png'
import Footer from './Footer.jsx'


function TraditionCard({ title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_30px_-8px_rgba(232,185,35,0.35)] backdrop-blur-sm transition-all hover:border-[#E8B923]/40 hover:bg-white/[0.07] hover:shadow-[0_14px_36px_-6px_rgba(232,185,35,0.5)]">
      <h3 className="font-serif text-xl sm:text-2xl text-[#E8B923]">{title}</h3>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/70">{description}</p>
    </div>
  )
}
const imgs = [
  '/images/Andhrapradesh.jpg',
  '/images/arunachal.jpg',
  '/images/assam.jpg',
'/images/sikkim.jpg',
'/images/tamilnadu.jpg']

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="font-serif text-2xl sm:text-3xl text-[#E8B923] md:text-4xl">{value}</p>
      <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/50">{label}</p>
    </div>
  )
}

function RegionCard({ name, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_10px_30px_-8px_rgba(232,185,35,0.35)] transition-all hover:shadow-[0_14px_36px_-6px_rgba(232,185,35,0.5)]">
      <span className="text-xs uppercase tracking-widest text-[#E8B923]/80">Region</span>
      <h3 className="mt-2 font-serif text-2xl sm:text-3xl">{name}</h3>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/60">{description}</p>
      <div className="mt-5 h-px w-10 bg-[#E8B923]/60 transition-all duration-300 group-hover:w-20" />
    </div>
  )
}

function GalleryTile({ src, alt, span }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 ${span || ''}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full min-h-[160px] object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  )
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <div className="grid min-h-fit md:min-h-[90vh] w-full grid-cols-1 gap-10 md:gap-2 px-4 py-24 md:px-0 md:py-0 text-white md:grid-cols-2">
  <div className="flex items-center justify-center order-2 md:order-1">
    <div className="w-full max-w-xl md:pl-4 lg:pl-32 lg:pt-16">
      {/* Eyebrow badge */}
      <div className="mb-5 flex justify-center md:justify-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E8B923]/30 bg-[#E8B923]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#E8B923]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E8B923] animate-pulse" />
          Incredible India
        </span>
      </div>

      {/* Image with glow behind it */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-[#E8B923]/20 blur-[80px]" />
        <img
          src={India}
          alt="india"
          className="w-full h-auto max-w-lg sm:max-w-xl md:max-w-2xl mx-auto md:mx-0 md:-ml-2 lg:-ml-4 drop-shadow-[0_15px_35px_rgba(232,185,35,0.25)]"
        />
      </div>

      {/* Text with accent line */}
      <div className="mt-4 md:mt-8 lg:mt-12 flex flex-col items-center gap-3 md:flex-row md:items-start">
        <div className="hidden h-auto w-px self-stretch bg-gradient-to-b from-[#E8B923] via-[#E8B923]/40 to-transparent md:block" />
        <p className="text-sm sm:text-base text-center md:text-left leading-relaxed text-white/80">
          Discover Indias vibrant culture, timeless heritage, and artistic traditions.
          Explore diverse traditions, local arts, crafts, festivals, stories, and architecture.
          Celebrate our rich heritage, preserve its legacy, and connect with the culture of India.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start">
        <button className="w-full sm:w-auto rounded-full bg-[#E8B923] px-7 py-3 text-sm font-medium text-[#0A0E27] shadow-[0_8px_25px_-6px_rgba(232,185,35,0.6)] transition-transform hover:scale-105">
          Explore Culture
        </button>
        <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10">
          Learn More
        </button>
      </div>
    </div>
  </div>

        <div className="flex items-center justify-center order-1 md:order-2 lg:pt-16">
          <img
            src={India2}
            alt="india2"
            className="w-[80%] max-w-[500px] h-auto md:h-[600px] md:w-[500px] rounded-3xl md:rounded-4xl object-cover shadow-[6px_10px_20px_20px_rgba(0,0,0,0.35)] md:shadow-[10px_20px_30px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>

      {/* Featured traditions */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 text-white">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Featured Traditions</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          Four threads running through thousands of years of living culture.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <TraditionCard
            title="Festivals"
            description="From Diwali's lamps to Holi's colour, celebrations that mark the turning of every season."
          />
          <TraditionCard
            title="Crafts"
            description="Hand-block printing, Pashmina weaving, and Dhokra casting passed down through generations."
          />
          <TraditionCard
            title="Architecture"
            description="Temple spires, Mughal domes, and stepwells carved to hold both water and light."
          />
          <TraditionCard
            title="Cuisine"
            description="Regional spice traditions shaped by geography, climate, and centuries of trade."
          />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-white/[0.03] py-10 sm:py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 text-white md:grid-cols-4">
          <Stat value="5000+" label="Years of history" />
          <Stat value="28" label="States & 8 UTs" />
          <Stat value="1600+" label="Languages spoken" />
          <Stat value="40+" label="UNESCO sites" />
        </div>
      </section>

      {/* Explore by region */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 text-white">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Explore by Region</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          Every direction tells a different story — pick a corner of the map to start.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          <RegionCard
            name="North"
            description="Himalayan foothills, Mughal monuments, and the plains of the Ganges."
          />
          <RegionCard
            name="South"
            description="Dravidian temple towns, backwaters, and centuries-old classical arts."
          />
          <RegionCard
            name="East"
            description="Terracotta temples, tea gardens, and river-delta traditions."
          />
          <RegionCard
            name="West"
            description="Desert forts, coastal trade towns, and vibrant textile crafts."
          />
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20 text-white">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Glimpses</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/60">
          A few frames from the country, before you go looking for the rest.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          <GalleryTile src={imgs[0]} alt="India scenery" span="col-span-2 row-span-2 md:col-span-2 md:row-span-2" />
          <GalleryTile src={imgs[1]} alt="India culture" />
          <GalleryTile src={imgs[2]} alt="India heritage" />
          <GalleryTile src={India2} alt="India architecture" />
          <GalleryTile src={imgs[4]} alt="India craft" />
        </div>
      </section>

      {/* Quote block */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 text-center text-white">
        <p className="font-serif text-lg sm:text-2xl italic leading-relaxed text-white/90 md:text-3xl">
          "India is, the cradle of the human race, the birthplace of human speech, the mother
          of history, the grandmother of legend, and the great-grandmother of tradition."
        </p>
        <p className="mt-6 text-xs uppercase tracking-widest text-[#E8B923]/80">Mark Twain</p>
      </section>
      {/* Closing CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24 text-center text-white">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Begin your journey</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
          One story leads to another. Start with a festival, a craft, or a corner of the
          country you've never seen — and see where it takes you.
        </p>
        <button className="mt-8 rounded-full bg-[#E8B923] px-8 py-3 text-sm font-medium text-[#0A0E27] transition-transform hover:scale-105">
          Explore Culture
        </button>
      </section>

      <Footer />
    </div>
  )
}

export default Home