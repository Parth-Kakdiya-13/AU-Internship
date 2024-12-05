import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav className='flex px-32 py-5 justify-between sticky max-lg:px-10 max-md:hidden'>
                <h2><span className='text-xl text-red-500 font-semibold'>100x</span>Engineers</h2>
                <ul className='flex gap-5 items-center'>
                    <li className='cursor-pointer hover:text-gray-500'>Overview</li>
                    <li className='cursor-pointer hover:text-gray-500'>Mentors</li>
                    <li className='cursor-pointer hover:text-gray-500'>Curriculum</li>
                    <li className='cursor-pointer hover:text-gray-500'>FAQs</li>
                    <li className='cursor-pointer hover:text-gray-500'>About Us</li>
                    <li className='cursor-pointer hover:text-gray-500'>Contact Us</li>
                    <li><button className='px-5 py-2 rounded-xl bg-black text-white'>Join Waitlist</button></li>
                </ul>
            </nav>
            <div className='bg-red-500 flex items-center justify-between p-3 px-52'>
                <p className='flex items-center gap-3 text-white'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" /></svg>
                    </span>
                    Prilims 22-25 Nov
                </p>
                <p className='text-white'>The 100xEnginners' GENERATIVEAIBUILATION</p>
                <p className='flex items-center text-white'><button className="font-semibold flex items-center justify-center gap-2">Registration Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6" /></svg></button></p>
            </div>
        </div>
    )
}
