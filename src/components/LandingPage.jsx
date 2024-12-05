import React from 'react'

export const LandingPage = () => {
    return (
        <div className='flex justify-center items-center flex-col p-44'>
            <h2 className='text-6xl font-semibold'>Become a</h2>
            <h2 className='text-6xl font-semibold text-red-500'>Generative-AI Wizard</h2>
            <p className='py-5'>From Zero to Pro in 6 months.<br />
                NOT another ChatGPT course.</p>
            <button className='px-5 py-2 rounded-xl bg-black text-white'>Join Waitlist</button>
        </div>
    )
}
