import AboutMeBox from "../element/AboutMeBox";
import AvatarBox from "../element/AvatarBox";
import CertificateBox from "../element/CertificateBox";
import ProjectBox from "../element/ProjectBox";

export default function HeroSection() {
    return (
        <section id="hero" className="p-5 scroll-mt-24 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-0 gap-y-10 md:gap-10 md:grid-rows-2 ">
                <AvatarBox />
                <CertificateBox />
                <AboutMeBox />
                <ProjectBox />
            </div>
        </section>
    );
}
