import AboutMeBox from "../BoxElement/AboutMeBox";
import AvatarBox from "../BoxElement/AvatarBox";
import CertificateBox from "../BoxElement/CertificateBox";
import ComputerSpecBox from "../BoxElement/ComputerSpecBox";
import TechStackBox from "../BoxElement/TechsStackBox";
import ProjectBox from "../BoxElement/ProjectBox";

export default function HeroSection() {
    return (
        <section id="hero" className="p-5 xl:px-40 scroll-mt-24 w-full">
            <div className="grid grid-cols-4 gap-10 max-md:grid-cols-3 max-sm:grid-cols-1">
                <AvatarBox />
                <AboutMeBox />
                <ComputerSpecBox />
                <TechStackBox />
                <div className="grid grid-cols-4 max-md:col-span-3 max-sm:col-span-1 max-sm:grid-cols-1 col-span-2 gap-10 w-full">
                    <ProjectBox />
                    <CertificateBox />
                </div>
            </div>
        </section>
    );
}
