
import RenderModel from "@/components/RenderModel";
import { Rabbit } from "@/public/model/Rabbit";
import Image from "next/image";

export default function Title() {
    return (
        <>
            <div className="relative h-screen overflow-x-hidden">
                <div className="absolute inset-0 flex flex-col justify-center ">
                    <Image 
                    src="/asset/PORTFOLIO.svg"
                        width={1250}
                        height={600}
                        alt="subline"
                        className=" absolute top-32 -left-52" />
                    <Image
                        src="/asset/subline.svg"
                        width={2000}
                        height={500}
                        alt="subline"
                        className=" absolute"
                    />
                    <Image 
                    src="/asset/PORTFOLIO.svg"
                        width={1250}
                        height={500}
                        alt="subline"
                        className=" absolute bottom-32 -right-52" />
                </div>
                <div className="absolute w-full z-10 bottom-16 flex justify-center">
                    <h1 className="text-5xl">Hi! , I&apos;m Yossawat Imjai</h1>
                </div>
                <div className="absolute top-0 left-0 w-full h-full ">
                    <RenderModel>
                        <Rabbit />
                    </RenderModel>
                </div>
                
            </div>
        </>

    );
}
