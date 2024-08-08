import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/wave_hand.png'
import hero_image from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow-icon.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>
    NEW ARRIVALS ONLY
</h2>
<div>
    <div className='hero-hand-icon'>
        <p>New</p>
        <img src={hand_icon} alt="" className='hand_icon'/>
    </div>
    <p>Collections</p>
    <p>For Everyone</p>
</div>
<div className='hero-latest-btn'>
    <div>Latest Collection</div>
    <img src= {arrow_icon} alt=" "></img>
</div>


        </div>

            <div className='hero-right'>
<img src={hero_image} alt="" className='hero-image'/>
           
        </div>
        </div>
  )
}
