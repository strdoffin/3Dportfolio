import Title from "../title";

export default function HeroSection() {
    return (
        <section id="hero" className="p-5 scroll-mt-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-0 gap-y-10 md:gap-10 md:grid-rows-2 ">
                <div className="w-full h-72 md:h-72 md:w-full aspect-video ">
                    <h1>Avatar</h1>
                    <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full">
                        <Title />
                    </div>
                </div>
                <div className="w-full md:h-72 md:w-full aspect-video col-span-3">
                    <h1>Certificate</h1>
                    <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full">
                        
                    </div>
                </div>
                <div className="w-full md:h-72 md:w-full aspect-video col-span-2">
                    <h1>About Me</h1>
                    <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full">
                        
                    </div>
                </div>
                <div className="w-full md:h-72 md:w-full aspect-video col-span-2">
                    <h1>Project</h1>
                    <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full">
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
