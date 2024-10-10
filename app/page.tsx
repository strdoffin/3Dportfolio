import Title from "@/components/title";

export default function Page() {
    return (
        <section className="max-h-[1000px] w-full bg-no-repeat max-sm:bg-center bg-cover bg-[url('/asset/Group4.svg')] ">
            <div>
                <Title />
                <section className="w-full h-screen">test scroll</section>
            </div>
        </section>
    );
}
