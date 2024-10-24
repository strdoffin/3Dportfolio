import RenderModel from "@/components/RenderModel";
import { Rabbit } from "@/public/model/Rabbit";

export default function Title() {
    return (
        <>
            <div className="w-full h-full shadow-lg">
                <RenderModel>
                    <Rabbit />
                </RenderModel>
            </div>
        </>
    );
}
