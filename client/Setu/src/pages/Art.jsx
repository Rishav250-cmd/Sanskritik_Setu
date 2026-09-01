import React from 'react'
import ArtHero from '../component/Art/ArtHero'
import ArtCategorySection from '../component/Art/ArtCategorySection'
import StateArtSection from '../component/Art/StateArtSection'

function Art() {
  return (
    <main className="content text-white">
      <ArtHero />
      <ArtCategorySection />
      <StateArtSection />
    </main>
  )
}
export default Art
