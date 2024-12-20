"use client";

import React, { useState } from "react";
import Card from "../Card";

// Define a type for the image paths
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

    const [currentIndex, setCurrentIndex] = useState<number>(0); // Set type for currentIndex

    const nextSlide = () => {
        // Move to the next slide, wrap around to the first slide if at the last slide
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Imgpath.length);
    };

    const prevSlide = () => {
        // Move to the previous slide, wrap around to the last slide if at the first slide
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Imgpath.length) % Imgpath.length);
    };

    return (
        <div className="w-full md:h-80 md:w-full aspect-video col-span-2 relative">
            <h1>Projects</h1>
            <div>
                <div className="flex relative h-full overflow-hidden items-center p-2">
                    <div
                        className="flex transition-transform duration-[1000ms] gap-6"
                        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
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
