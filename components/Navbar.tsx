// const navItem = {
//     home: {
//         name: "home",
//         href: "#hero",
//     },
//     profile: {
//         name: "profile",
//         href: "#profile",
//     },
//     project: {
//         name: "project",
//         href: "#project",
//     },
// }

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
        <div className="w-full md:w-[500px] p-5 sticky mt-5 z-10">
            <div className="shadow-lg shadow-white w-full bg-transparent backdrop-blur-lg h-14 rounded-xl border-2 border-gray-500 flex justify-center px-2 items-center ">
                <h1 className="text-2xl">Yossawat&apos;s Portfolio</h1>
            </div>
        </div>
    </div>
  )
}
