import { Laptop } from "lucide-react";
type Spec = {
    name?: string;
    cpu?: string;
    gpu?: string;
    memory?: string;
    storage?: string;
    os?: string;
};

export default function ComputerSpecBox() {
    const comspec: Spec[] = [
        { name: "Acer Nitro 5 AN515-R0CJ" },
        { cpu: "AMD Ryzen 5 5600H" },
        { gpu: "NVIDIA RTX 3050 Laptop" },
        { memory: "16GB DDR4" },
        { storage: "512GB SSD" },
        { os: "Windows 11" },
    ];

    return (
        <div className="w-full h-80 xl:col-span-2">
            <div className="flex items-center text-xl ">
                <span>
                    <Laptop size={30} strokeWidth={1.5} />
                </span>
                Com-Spec
            </div>
            <div className="shadow-ani backdrop-blur-lg bg-transparent border-2 rounded-3xl h-full overflow-auto max-h-full flex items-center">
                <div className="w-full xl:flex xl:flex-row pt-32 xl:pt-0 items-center ">
                    <div className="w-full h-[250px] xl:w-1/2 bg-white p-6 flex items-center justify-center shadow-lg">
                        <p className="text-center text-gray-500 text-lg">Laptop Image or Spec Details</p>
                    </div>
                    <div className="w-full xl:w-1/2 pl-10">
                        {comspec.map((item, index) => (
                            <ul
                                key={index}
                                className="list-disc flex flex-col "
                            >
                                {Object.entries(item).map(([key, value]) => (
                                    <li
                                        key={key}
                                        className="break-words max-lg:text-sm my-2"
                                    >
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
