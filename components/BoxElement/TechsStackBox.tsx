import { SquareChevronRight } from "lucide-react";

export default function TechStackBox() {
    return (
        <div className="w-full h-80 xl:col-span-2">
            <div className="flex items-center text-xl"><span><SquareChevronRight size={30} strokeWidth={1.5}/></span>Tech-Stack</div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full ">
                
            </div>
        </div>
    );
}
