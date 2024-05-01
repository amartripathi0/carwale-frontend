import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full">
        <div className="h-3/5 w-full relative">
            <Image 
            src={"https://imgd.aeplcdn.com/0x0/cw/static/landing-banners/homepage-m-2021.jpg?v=19042022"}
            height={2000}
            width={2000}
            className="h-full w-full object-cover"
            alt="homepage"
            />
            <div className="absolute bottom-6 left-1/4 flex flex-col items-center gap-6 w-1/2 text-white">
                <h2 className="text-3xl font-semibold">FIND THE RIGHT CAR</h2>
                  <div className="flex justify-between h-10 w-full">
                    <select name="" id="" defaultValue={"New"} className="bg-[#E1E1E1] w-28 text-[#535F71] px-4">
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                    </select>

                    <div className="flex w-full bg-white items-center text-sm px-4 gap-4">
                      <Search className="text-black"/>
                      <input type="text" placeholder="Type to select a car name, e.g MG Gloster" className="w-full h-full outline-none text-[#535F71]" />
                    </div>
                    <button className="w-40 bg-[#E53012] border-2 border-white">Search</button>
                  </div>
                  <div className="flex justify-between text-xs w-full">
                      <p>e.g. MG Gloster</p>
                      <p>New Car Discounts | Help Me Find A Car | Sell My Car</p>

                  </div>
            </div>
        </div>
      </div>
    </main>
  );
}
