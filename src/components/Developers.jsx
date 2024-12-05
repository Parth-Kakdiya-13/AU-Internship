import React from 'react'
import ramesh from '../assets/ramesh.avif'
import tejas from '../assets/tejas.avif'
import koushik from '../assets/kaushik.avif'
import siddhant from '../assets/sidhant.avif'

export const Developers = () => {
    return (
        <div className='flex flex-col items-center mt-20'>
            <h2 className='text-center text-5xl'>Join the New Era of <span className='text-red-500'> GenAI Engineers</span></h2>
            <p className='text-center text-xl'>Learn from the elite. Break the mold!</p>
            <div className='flex items-start gap-5 justify-center mt-10 max-lg:flex-col'>
                <div>
                    <img src={ramesh} className='w-60 h-auto' />
                    <div>
                        <span className='flex items-center text-red-500 text-xl py-3'>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                            <h2>Sridev Ramesh</h2>
                        </span>
                        <p>Ex-Teaching Fellow, CS50 @<br /> Harvard</p>
                    </div>
                </div>
                <div>
                    <img src={tejas} className='w-60 h-auto' />
                    <div>
                        <span className='flex items-center text-red-500 text-xl py-3'>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                            <h2>Tejas Tholpadi</h2>
                        </span>
                        <p>Co-Founder & Ex-CTO <br />Avalon,
                            Built God in a Box</p>
                    </div>
                </div>
                <div>
                    <img src={koushik} className='w-60 h-auto' />
                    <div>
                        <span className='flex items-center text-red-500 text-xl py-3'>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                            <h2>Koushik Valleri</h2>
                        </span>
                        <p>AI Researchers at AEOS Labs,<br /> Built AlphaCTR, AI projects with<br /> Amazon, Sunfeast, M.S Dhoni</p>
                    </div>
                </div>
                <div>
                    <img src={siddhant} className='w-60 h-auto' />
                    <div>
                        <span className='flex items-center text-red-500 text-xl py-3'>
                            <svg className='' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                            <h2>Siddhant Goswami</h2>
                        </span>
                        <p>Built & scaled 3 products to $10M+<br />
                            Trained 1000+ students in GenAI<br /> and LLMs
                            2 exits to Unacademy</p>
                    </div>
                </div>
            </div>
            <button className='px-5 py-2 rounded-xl bg-black text-white mt-10'>Join Waitlist</button>
        </div>
    )
}
