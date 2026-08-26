import React from 'react'
import India from '../component/Home/indiaimg.png'
import India2 from '../component/Home/indiaimg2.png'

function Home() {
  return (
    <div>
  <div className="grid min-h-[90vh] w-full grid-cols-1 gap-2 text-white md:grid-cols-2">
    <div className="flex items-center justify-center">
      <div className="pl-2 md:pl-4 lg:pl-32">
        <img src={India} alt="india" />
        <p className="pt-4 md:pt-8 lg:pt-12">
          Discover India’s vibrant culture, timeless heritage, and artistic traditions.
          Explore diverse traditions, local arts, crafts, festivals, stories, and architecture.
          Celebrate our rich heritage, preserve its legacy, and connect with the culture of India.
        </p>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src={India2}
        alt="india2"
        className="h-[600px] w-[500px] rounded-4xl shadow-[10px_20px_30px_50px_rgba(0,0,0,0.4)]"
      />
    </div>
  </div>
</div>
  )
}

export default Home
