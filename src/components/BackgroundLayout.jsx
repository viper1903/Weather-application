import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'

// images import 

import Clear from '../assets/images/clear.jpg'
import Cloudy from '../assets/images/cloudy.jpg'
import Fog from '../assets/images/fog.jpg'
import Rainy from '../assets/images/rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Storm from '../assets/images/storm.jpg'
import Sunny from '../assets/images/sunny.jpg'


const BackgroundLayout = () =>  {

  const {weather} = useStateContext()

  const [image, setImage] = useState(Cloudy)

  useEffect(() => {
    
    if(weather.conditions) {

      let imageString = weather.conditions

      if(imageString.toLowerCase().includes('clear')) {
        setImage(Clear)
      } else if(imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy)
      } else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy)
      } else if(imageString.toLowerCase().includes('snow')) {
        setImage(Snow)
      } else if(imageString.toLowerCase().includes('fog')) {
        setImage(Fog)
      } else if(imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder')) {
        setImage(Storm)
      } else if(imageString.toLowerCase().includes('sunny')) {
        setImage(Sunny)
      }
    }
  }, [weather])

  return (
    <img src= {image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout