import React, { useEffect } from "react";
import "./InfiniteScroll.css";
import api from '../assets/api.svg'
import auto from '../assets/auto11.svg'
import civitai from '../assets/civitai.avif'
import github from '../assets/githb.avif'
import openai from '../assets/openai.svg'
import pylogo from '../assets/pythn.svg'
import replicate from '../assets/replicate.svg'

const InfiniteScroll = () => {
    useEffect(() => {
        // If user hasn't opted for reduced motion, add animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    const addAnimation = () => {
        const scrollers = document.querySelectorAll(".scroller");
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", "true");

            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", "true");
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    };

    return (
        <div>
            <div className="text-center mt-20">
                <h2 className="text-5xl">What will you <span className="text-red-500"> master?</span></h2>
                <p className="text-xl">Through these tools and frameworks, learn the most important skill - to <br /> think like an engineer!</p>
            </div>
            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner">
                    <img src={api} alt="logo" />
                    <img src={auto} alt="logo" />
                    <img src={civitai} alt="logo" />
                    <img src={github} alt="logo" />
                    <img src={openai} alt="logo" />
                    <img src={pylogo} alt="logo" />
                    <img src={replicate} alt="logo" />
                </div>
            </div>

        </div>
    );
};

export default InfiniteScroll;
