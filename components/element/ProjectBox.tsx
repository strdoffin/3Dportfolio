"use client";

import React, { useState, useEffect } from "react";
import Card from "../Card";


type ImagePath = {
    path: string;
};

export default function ProjectBox() {
    const Imgpath: ImagePath[] = [
        { path: "/asset/gauze-01.jpg" },
        { path: "/asset/fusion-10.jpg" },
        { path: "/asset/roseate-02.jpg" },
        { path: "/asset/Laphuphu.png" },
        { path: "/asset/IotSmartFarm.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const nextSlide = () => {
        // Move to the next slide if not at the last slide
        if (currentIndex < Imgpath.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        // Move to the previous slide if not at the first slide
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Define the event type for the scroll event
    const handleScroll = (event: WheelEvent) => {
        if (isHovered) {
            if (event.deltaY > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [isHovered, currentIndex]);

    return (
        <div
            className="w-full md:h-80 md:w-full aspect-video col-span-2 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h1>Projects</h1>
            <div>
                <div className="flex relative h-full overflow-hidden items-center p-2">
                    <div
                        className="flex transition-transform duration-[1000ms] gap-6"
                        style={{ transform: `translateX(-${currentIndex * 15}%)` }}
                    >
                        {Imgpath.map((img, index) => (
                            <Card key={index} image={img.path} />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-[40%] p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
                    >
                        &#10094;
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-[40%] p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
                    >
                        &#10095; 
                    </button>
                </div>
            </div>
        </div>
    );
}
