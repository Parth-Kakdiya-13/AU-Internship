import React, { useEffect } from "react";
import "./InfiniteScroll.css";

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
            <h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>

            {/* <div className="scroller" data-speed="fast">
                <ul className="tag-list scroller__inner">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>SSG</li>
                    <li>webdev</li>
                    <li>animation</li>
                    <li>UI/UX</li>
                </ul>
            </div> */}

            <div className="scroller" data-direction="right" data-speed="fast">
                <div className="scroller__inner">
                    <img src="https://i.pravatar.cc/150?img=1" alt="Avatar 1" />
                    <img src="https://i.pravatar.cc/150?img=2" alt="Avatar 2" />
                    <img src="https://i.pravatar.cc/150?img=3" alt="Avatar 3" />
                    <img src="https://i.pravatar.cc/150?img=4" alt="Avatar 4" />
                    <img src="https://i.pravatar.cc/150?img=5" alt="Avatar 5" />
                    <img src="https://i.pravatar.cc/150?img=6" alt="Avatar 6" />
                </div>
            </div>

        </div>
    );
};

export default InfiniteScroll;
