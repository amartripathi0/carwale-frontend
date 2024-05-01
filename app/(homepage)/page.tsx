import { Search } from "lucide-react";
import Image from "next/image";
import FeaturedCarCard from "./_components/FeaturedCarCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-screen w-full">
        <div className="h-3/5 w-full relative">
            <Image 
            src={"https://imgd.aeplcdn.com/0x0/cw/static/landing-banners/homepage-m-2021.jpg?v=19042022"}
            height={2000}
            width={2000}
            className="h-full w-full object-cover"
            alt="homepage"
            />
            {/* FIND THE RIGHT CAR INPUT */}
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

        {/* Featured Cars */}
        <div className="px-60 flex flex-col gap-4 py-6">
          <h1 className="text-2xl font-medium">Featured Cars</h1>
          <div></div>

          <div className="flex gap-4 justify-between w-full">

            <FeaturedCarCard 
                imgSrc="https://imgd.aeplcdn.com/310x174/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                carTitle="Mahindra XUV 3XO"
                price="7.49"
           />
            <FeaturedCarCard 
                imgSrc="https://imgd.aeplcdn.com/310x174/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-2.png?isig=0&q=80"
                carTitle="Toyota Urban Cruiser Taisor"
                price="7.74"
           />
            <FeaturedCarCard 
                imgSrc="https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
                carTitle="Maruti Fronx"
                price="7.51"
           />
          </div>
        </div>


      </div>
    </main>
  );
}
