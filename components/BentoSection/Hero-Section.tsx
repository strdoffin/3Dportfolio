import AboutMeBox from "../BoxElement/AboutMeBox";
import AvatarBox from "../BoxElement/AvatarBox";
import CertificateBox from "../BoxElement/CertificateBox";
import ComputerSpecBox from "../BoxElement/ComputerSpecBox";
import TechStackBox from "../BoxElement/TechsStackBox";
import ProjectBox from "../BoxElement/ProjectBox";

export default function HeroSection() {
    return (
        <section id="hero" className="p-5 xl:px-40 scroll-mt-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                <AvatarBox />
                <AboutMeBox />
                <ComputerSpecBox />
                <TechStackBox />
                <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-10">
                    <ProjectBox />
                    <CertificateBox />
                </div>
            </div>
        </section>
    );
}
