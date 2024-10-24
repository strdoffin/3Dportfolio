"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProjectBox() {
    const [page, setPage] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(false); // State for fading effect

    const Imgpath = [
        { path: "/asset/gauze-01.jpg" },
        { path: "/asset/fusion-10.jpg" },
        { path: "/asset/roseate-02.jpg" },
    ];

    const handleNext = () => {
        setFade(true); // Trigger fade out
        setTimeout(() => {
            setPage((prevPage) => (prevPage + 1) % Imgpath.length);
            setFade(false); // Trigger fade in
        }, 300); // Wait for fade-out duration
    };

    const handlePrev = () => {
        setFade(true); // Trigger fade out
        setTimeout(() => {
            setPage((prevPage) => (prevPage - 1 + Imgpath.length) % Imgpath.length);
            setFade(false); // Trigger fade in
        }, 300); // Wait for fade-out duration
    };

    return (
        <div className="w-full md:h-72 md:w-full aspect-video col-span-2">
            <h1>Project</h1>
            <div className="shadow-ani backdrop-blur-lg bg-transparent border-2 rounded-3xl h-full w-full relative">
                <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <Image
                        src={Imgpath[page].path}
                        fill
                        alt="image"
                        className="rounded-3xl transition duration-300 ease-in-out transform hover:brightness-50"
                    />
                </div>
            </div>
            <div className="flex justify-end w-full gap-1 p-2">
                <button
                    onClick={handlePrev}
                    className="hover:cursor-pointer flex justify-center items-center rounded-full w-8 aspect-square bg-transparent border-2 border-white active:bg-white transition-all"
                >
                    &lt;
                </button>
                <button
                    onClick={handleNext}
                    className="hover:cursor-pointer flex justify-center items-center rounded-full w-8 aspect-square bg-transparent border-2 border-white active:bg-white transition-all"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
