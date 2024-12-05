import React from 'react'
import ramesh from '../assets/ramesh.avif'
import tejas from '../assets/tejas.avif'
import '../Components/Developer.css'
import kaushik from '../assets/kaushik.avif'
import sidhant from '../assets/sidhant.avif'
const Developer = () => {
  return (
    <div className='container'>
      <div>
        <h1>Join the New Era of <span style={{ "color": "#f25c5c" }}>GenAI Engineers</span></h1>
        <p>Learn from the elite.Breack the mold !</p>
      </div>
      <div className='dev'>
        <div className='singledev'>
          <img className='image' src={ramesh} />
          <p className='name'>  sridev ramesh</p>
          <p className='designation'>FrontEnd Developer</p>
        </div>
        <div className='singledev'>
          <img className='image' src={tejas} />
          <p className='name'>  sridev ramesh</p>
          <p className='designation'>MERN stack developer</p>
        </div>
        <div className='singledev'>
          <img className='image' src={kaushik} />
          <p className='name'>  sridev ramesh</p>
          <p className='designation'>Figma Designer</p>
        </div>
        <div className='singledev'>
          <img className='image' src={sidhant} />
          <p className='name'> sridev ramesh</p>
          <p className='designation'>Backend developer</p>
        </div>
      </div>
      <button className='Waitlist'>Join Wait List</button>
    </div>
  )
}

export default Developer
