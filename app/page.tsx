import RenderModel from "@/components/RenderModel";
import { Rabbit } from "@/public/model/Rabbit";

export default function page() {
  return (
        <div className="w-full h-screen">
            
            <RenderModel>
                <Rabbit />
            </RenderModel>
        </div>
  )
}
