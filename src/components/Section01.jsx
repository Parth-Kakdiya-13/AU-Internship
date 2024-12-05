import React from 'react'
import sideImage from '../assets/zGuoY1Y1EMRm5vUcy8CV5exN80.svg'

export const Section01 = () => {
    return (
        <div className='w-3/5 h-[30rem] bg-black rounded-xl p-10 mx-auto flex overflow-hidden'>
            <div>
                <div>
                    <h2 className='text-5xl text-white'>Who is this <span className='text-red-500 font-semibold'>for?</span></h2>
                    <p className='text-white text-xl py-8'>From complete programming noobs to experienced professionals. No prior coding experience required, but surely helpful.</p>
                </div>
                <div>
                    <ul className='flex flex-col items-start gap-5 text-white'>
                        <li className='flex items-center'><span className='flex justify-center items-center rounded-full bg-red-500 w-6 h-6 mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg></span>Looking to upskill in GenAI</li>
                        <li className='flex items-center'><span className='flex justify-center items-center rounded-full bg-red-500 w-6 h-6 mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg></span>Looking to change career paths into GenAI</li>
                        <li className='flex items-center'><span className='flex justify-center items-center rounded-full bg-red-500 w-6 h-6 mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg></span>Looking to build your own GenAI Products</li>
                        <li className='flex items-center'><span className='flex justify-center items-center rounded-full bg-red-500 w-6 h-6 mr-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg></span>Generally curious about this field</li>
                    </ul>
                </div>
            </div>
            <div>
                <img className=' w-screen translate-x-44' src={sideImage} />
            </div>
        </div>
    )
}
