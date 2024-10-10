import RenderModel from "@/components/RenderModel";
import { Rabbit } from "@/public/model/Rabbit";

export default function Title() {
    return (
        <>
            <div className="relative w-full h-screen overflow-x-hidden">

                <div className="w-full h-full">
                    <RenderModel>
                        <Rabbit />
                    </RenderModel>
                </div>
                <div className="absolute w-full z-10 bottom-5 flex justify-center">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-center">
                        Hi! , I&apos;m Yossawat Imjai
                    </h1>
                </div>
            </div>
        </>
    );
}
