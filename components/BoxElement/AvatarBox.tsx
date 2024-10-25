import Title from "../title";
import { Boxes } from "lucide-react";
export default function AboutSection() {
    return (
        <div className="w-full h-80">
            <div className="flex items-center text-xl"><span><Boxes size={30} strokeWidth={1}/></span>Avatar</div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full ">
                <Title />
            </div>
        </div>
    );
}
