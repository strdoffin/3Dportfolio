"use client";

import React, { useState } from "react";
import Card from "../Card";

export default function ProjectBox() {
    const Imgpath = [
        { path: "/asset/gauze-01.jpg" },
        { path: "/asset/fusion-10.jpg" },
        { path: "/asset/roseate-02.jpg" },
        { path: "/asset/Laphuphu.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Imgpath.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + Imgpath.length) % Imgpath.length
        );
    };

    return (
        <div className="w-full md:h-80 md:w-full aspect-video col-span-2  relative ">
            <h1>Projects</h1>
            <div>
                <div className="flex relative h-full overflow-hidden items-center p-2">
                    <div 
                        className="flex transition-transform duration-500 gap-6"
                        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
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
