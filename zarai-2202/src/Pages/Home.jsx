import React from 'react'
import AllRoutes from '../Components/AllRoutes'
import Carousel, { CarouselOne, CarouselTwo } from '../Components/Crousels'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Carousel/>
     <CarouselOne/>
     <CarouselTwo/>
    </div>
  )
}

export default Home
