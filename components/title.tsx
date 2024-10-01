
import RenderModel from "@/components/RenderModel";
import { Rabbit } from "@/public/model/Rabbit";
import Image from "next/image";

export default function Title() {
    return (
        <>
            <div className="relative w-full h-screen overflow-x-hidden">
                <div className="absolute flex flex-col">
                    <Image width={2000} height={200} src="/asset/PORTFOLIO.svg" alt="PORTFOLIO" className="relative top-10 -left-96"/>
                    <Image width={2000} height={200} src="/asset/subline.svg" alt="subline" className="relative top-16"/>
                    <Image width={2000} height={200} src="/asset/PORTFOLIO.svg" alt="PORTFOLIO" className="relative -bottom-20 left-96"/>
                </div>
                <div className="w-full h-screen">
                    <RenderModel>
                        <Rabbit />
                    </RenderModel>
                </div>

                <div className="absolute w-full z-10 bottom-5 flex justify-center">
                    <h1 className="text-5xl">Hi! , I&apos;m Yossawat Imjai</h1>
                </div>
            </div>

        </>

    );
}
