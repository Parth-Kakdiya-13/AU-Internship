import React from "react";

const Main = () => {
    return (
        <div className="w-full m-0 p-0">
            {/* Reset margin for body */}
            <nav className="bg-gray-100">
                <div className="flex items-center justify-between py-4">
                    <p className="text-lg font-bold px-5">
                        <span className="text-red-600">100x</span>Engineers
                    </p>
                    <button className="lg:hidden flex items-center text-gray-800">
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                    <div className="flex gap-5">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Overview
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Mentors
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Curriculum
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            FAQs
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            About Us
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            <div className="bg-red-500 text-center py-2">
                <span>Prelims 22-25 Nov</span> | The 100xEngineers’ GENERATIVE AI BUILDATHON{" "}
                <a href="#" className="text-blue-500 hover:underline ml-2">
                    Register Now →
                </a>
            </div>

            <div className="py-8 bg-white">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-black">
                        Become a <br />
                        <span className="text-red-600">Generative-AI Wizard</span>
                    </h1>
                    <p className="mt-4 text-lg text-black">
                        From Zero to Pro in 6 months.
                        <br />
                        NOT another ChatGPT course.
                    </p>
                    <p className="mt-2 text-gray-600">
                        <i>Next Cohort begins </i>
                        <span className="font-bold">in January</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
