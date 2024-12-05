import React from 'react'
import coding from '../assets/coding.png'

export const Goals = () => {
    return (
        <div className='mt-20'>
            <div className='my-10'>
                <h2 className='text-center text-4xl font-semibold'>Meet your goals with  tailored <span className='text-red-500'>tracks</span>  </h2>
                <p className='text-center text-xl'>Forget the one-size-fits-all approach</p>
            </div>
            <div className='flex items-center gap-5 w-3/5 mx-auto p-10 border-2 rounded-xl bg-white max-lg:flex-col'>
                <img src={coding} />
                <div>
                    <h2 className='text-xl text-gray-500 max-lg:text-center'>For <span className='text-red-500'>Job Seekers</span></h2>
                    <h4 className='text-sm flex items-center pt-5 gap-1 max-lg:justify-center'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z" /></svg>
                        </span>
                        <p className='text-lg'> Get a job in gen-AI</p>
                    </h4>
                    <p className='text-gray-500 py-5'>Build a killer portfolio of Gen-AI products. Get personalised mentoring on interview <br />prep and resume building. Land your dream GenAI job. </p>
                    <ul className='flex items-center gap-5 pt-5 border-t-2 border-dashed border-gray-700 max-lg:flex-col max-lg:items-start' >
                        <li className='flex items-center'>
                            <svg className='w-5 h-5 mr-2 bg-red-500 rounded-full text-white' xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                            <p>Learn the skills</p>
                        </li>
                        <li className='flex items-center'>
                            <svg className='w-5 h-5 mr-2 bg-red-500 rounded-full text-white' xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                            <p>Prep for interviews</p>
                        </li>
                        <li className='flex items-center'>
                            <svg className='w-5 h-5 mr-2 bg-red-500 rounded-full text-white' xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg>
                            <p>Get hired</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
