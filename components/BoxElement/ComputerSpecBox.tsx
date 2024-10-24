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
    <div className="w-full h-80 col-span-1">
      <div className="flex items-center text-xl ">
        <span><Laptop size={30} strokeWidth={1.5} /></span>Com-Spec
      </div>
      <div className="shadow-ani backdrop-blur-lg bg-transparent border-2 rounded-3xl h-full px-12 justify-around flex flex-col overflow-y-auto max-h-full">
        {comspec.map((item, index) => (
          <ul key={index} className="list-disc space-y-2">
            {Object.entries(item).map(([key, value]) => (
              <li key={key} className="break-words max-lg:text-sm">
                {value}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
