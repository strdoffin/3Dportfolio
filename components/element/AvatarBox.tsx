import Title from "../title";

export default function AboutSection() {
    return (
        <div className="w-full h-72 md:h-72 md:w-full aspect-video ">
            <h1>Avatar</h1>
            <div className="shadow-ani backdrop-blur-lg bg-transparent  border-2 rounded-3xl h-full">
                <Title />
            </div>
        </div>
    );
}
