import { Laptop } from "lucide-react";

type Spec = {
    name?: string;
    cpu?: string;
    gpu?: string;
    display?:string;
    memory?: string;
    storage?: string;
    os?: string;
};

export default function ComputerSpecBox() {
    const comspec: Spec[] = [
        { name: "Acer Nitro 5 AN515-R0CJ" },
        { cpu: "AMD Ryzen 5 5600H" },
        { gpu: "NVIDIA RTX 3050 Laptop" },
        { display : "15.6 inch Full HD IPS 144Hz"},
        { memory: "16GB DDR4" },
        { storage: "512GB SSD" },
        { os: "Windows 11" },
    ];

    return (
        <div className="w-full h-80 xl:col-span-1">
            <div className="flex items-center text-lg sm:text-xl">
                <span>
                    <Laptop size={30} strokeWidth={1.5} />
                </span>
                <span className="ml-2">Com-Spec</span>
            </div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent border-2 rounded-3xl h-full overflow-auto max-h-full flex  p-4 sm:p-4 scrollbar-hide">
                <div className="w-full mb-4">
                    <div className="w-full h-48">

                    </div>
                    {comspec.map((item, index) => (
                        <ul
                            key={index}
                            className=" flex flex-col px-4 "
                        >
                            {Object.entries(item).map(([key, value]) => (
                                <li
                                    key={key}
                                    className="break-words text-sm"
                                >
                                    <strong>
                                        {key.toUpperCase()}: <br className="hidden xl:inline"/>
                                    </strong>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}
