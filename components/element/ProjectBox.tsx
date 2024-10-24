"use client";

import React, { useState, TouchEvent, MouseEvent } from "react";
import Card from "../Card";

// Define the type for the image paths
interface ImgPath {
    path: string;
}

export default function ProjectBox() {
    const Imgpath: ImgPath[] = [
        { path: "/asset/gauze-01.jpg" },
        { path: "/asset/fusion-10.jpg" },
        { path: "/asset/roseate-02.jpg" },
        { path: "/asset/Laphuphu.png" },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);
    const [endX, setEndX] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Imgpath.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + Imgpath.length) % Imgpath.length
        );
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleSwipe();
        setIsDragging(false);
        setEndX(0); // Reset endX
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        setEndX(e.clientX);
    };

    const handleMouseUp = () => {
        handleSwipe();
        setIsDragging(false);
        setEndX(0); // Reset endX
    };

    const handleSwipe = () => {
        const distance = startX - endX;
        if (distance > 50) {
            nextSlide(); // Swipe left
        } else if (distance < -50) {
            prevSlide(); // Swipe right
        }
    };

    return (
        <div className="w-full md:h-80 md:w-full aspect-video col-span-2 relative">
            <h1>Projects</h1>
            <div>
                <div
                    className="flex relative h-full overflow-hidden items-center p-2"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => {
                        if (isDragging) {
                            handleMouseUp(); // End drag if mouse leaves
                        }
                    }}
                >
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
