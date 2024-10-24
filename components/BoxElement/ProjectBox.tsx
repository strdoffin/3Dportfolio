import { AppWindowMac } from "lucide-react";

export default function ProjectBox() {
    return (
        <div className="w-full h-80 col-span-2 max-sm:col-span-1">
            <div className="flex items-center text-xl"><span><AppWindowMac size={30} strokeWidth={1.5}/></span>Projects</div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full ">
                
            </div>
        </div>
    );
}
