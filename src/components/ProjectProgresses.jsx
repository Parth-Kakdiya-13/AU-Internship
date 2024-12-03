import React, { useState } from 'react';
import { projectData } from '../data';
import { AnimatePresence, motion } from 'framer-motion';

export const ProjectProgresses = () => {
    // State to track expanded items
    const [expandedItems, setExpandedItems] = useState([]);

    // Handle click for a specific item
    function clickHandler(identifier) {
        setExpandedItems((prev) => {
            if (prev.includes(identifier)) {
                // If the item is already expanded, remove it
                return prev.filter((item) => item !== identifier);
            } else {
                // Otherwise, add it to the expanded items
                return [...prev, identifier];
            }
        });
    }

    return (
        <div className="flex">
            <div className='w-[0.1rem] border-dashed border-l-2 border-black h-auto relative left-[85px] top-[6rem] max-[1100px]:left-[40px] max-sm:hidden'>

            </div>
            <div className='w-full flex flex-col'>
                {projectData.map((item) => {
                    const isExpanded = expandedItems.includes(item.projectTitle); // Check if this item is expanded
                    return (
                        <div>
                            <div className='w-2 h-2 rounded-full bg-red-500 relative top-[6rem] left-[80px] max-[1100px]:left-[35px] max-sm:hidden'></div>
                            <div key={item.projectTitle} className='mt-5 w-4/5 mx-auto max-sm:w-full'>
                                <span className='uppercase bg-white p-2 border border-gray-300 relative  rounded-t-xl ml-10 text-gray-500'>Module {item.module}</span>
                                <div className="my-3">
                                    <div
                                        className="p-3 rounded-full border border-gray-300 flex justify-between items-center cursor-pointer bg-white z-[100]"
                                        onClick={() => clickHandler(item.projectTitle)}
                                    >
                                        <div className="flex">
                                            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                            <div className="pl-3 flex flex-col justify-center">
                                                <h2 className="uppercase text-green-600">{item.projectTitle}</h2>
                                                <p className="capitalize font-semibold text-black">{item.projectDescription}</p>
                                            </div>
                                        </div>
                                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2, type: 'spring', stiffness: 300 }} className='text-black'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="m11.808 14.77l-3.715-4.458A.8.8 0 0 1 8.708 9h6.584a.8.8 0 0 1 .614 1.312l-3.714 4.458a.25.25 0 0 1-.384 0"
                                                />
                                            </svg>
                                        </motion.span>
                                    </div>

                                    {/* Render additional content only for expanded items */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <div className="w-full p-5 rounded-b-3xl border border-gray-300 border-b flex gap-5 flex-col justify-between items-center -mt-12 -z-[10] relative bg-white">
                                                <div className='mt-10'>
                                                    {item.projects.map((project) => {
                                                        return <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.2 }} className='w-[full]  mx-auto p-5 rounded-3xl border border-gray-300 my-3'>
                                                            <h1 className='capitalize font-semibold text-gray-800'>{project.title}</h1>
                                                            <p className='text-gray-400'>{project.description}</p>
                                                        </motion.div>
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
