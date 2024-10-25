import { CircleUserRound } from "lucide-react";
export default function AboutMeBox() {
    return (
        <div className="w-full h-80 xl:col-span-2">
            <div className="flex items-center text-xl"><span><CircleUserRound size={30} strokeWidth={1.5}/></span>Whoami?</div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full"></div>
        </div>
    );
}
