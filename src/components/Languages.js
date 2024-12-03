import React from 'react'
import '../Components/languages.css'
import civitai from '../assets/civitai.avif'
import replicate from '..//assets/replicate.svg'
import api from '../assets/api.svg'
import pythn from '../assets/pythn.svg'
import openai from '../assets/openai.svg'
import auto11 from '../assets/auto11.svg'
export const Languages = () => {
  return (
    <div className='container'>
      <div>
        <h1 style={{"margin-top":"80px"}}>What will you <span style={{ "color": "#f25c5c" }}>master</span></h1>
        <p>Through these tools and frameworks,learn the most important skill - to think like an engineer !</p>
      </div>
      <marquee style={{"display":"flex"}}  className='marq'>
      <div className='icons'>
        <div className='lang'>
          <img className='pic' src={openai} />
          <p> > Open ai</p>
      </div>
      <div className='lang'>
        <img className='pic' src={civitai} />
        <p>> civitai</p>
      </div>
      <div className='lang'>
        <img className='pic' src={replicate} />
        <p>> replicate</p>
      </div>
      <div className='lang'>
        <img className='pic'  src={api} />
        <p>> Api </p>
      </div>
      <div className='lang'>
        <img className='pic' src={pythn} />
        <p>> python</p>
      </div>
      <div className='lang'>
        <img className='pic' src={auto11} />
        <p>> auto1111</p>
      </div>
     

      </div>
      </marquee>
    </div>  
  )
}
