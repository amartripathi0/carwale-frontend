import { AlarmClockPlus, Star, Timer } from "lucide-react";
import CarDetailsNavigation from "./CarDetailsNavigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import OrangeButton from "@/components/OrangeButton";

interface CarOverview {
  carName: string;
  bio: string;
  rating: number;
  minPrice: number;
  maxPrice: number;
}
const carImagesUrl = [
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-side-view.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-rear-view-2.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-left-rear-three-quarter.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-left-side-view-2.jpeg?isig=0&q=80",
  "https://imgd.aeplcdn.com/664x374/n/cw/ec/148309/punch-ev-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80",
];
function CarOverview({
  carName,
  bio,
  rating,
  minPrice,
  maxPrice,
}: CarOverview) {
  return (
    <div className="flex flex-col gap-6">
      {/* Car Heading and Reating */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium ">{carName}</h1>
        <div className="flex items-center border gap-1 ">
          <span className="bg-cyangreen p-1">
            <Star className="text-white  fill-white" />
          </span>
          <h2 className="text-cyangreen ">
            {rating}{" "}
            <span className="text-sm text-gray-500">
              User Rating({rating * 10})
            </span>
          </h2>
          <p className="text-blue-600 text-sm mx-4 font-medium">Rate & Win</p>
        </div>
      </div>

      {/* About Car */}
      <p className="text-sm text-gray-600">{bio}</p>

      <CarDetailsNavigation />

      <div className="flex justify-between  items-center w-full border">
        <Carousel className="w-[45%] h-80">
          <CarouselContent>
            {carImagesUrl.map((carImgUrl, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={carImgUrl}
                    height={2000}
                    width={2000}
                    alt="car-image"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex w-full ">
            <div className="border w-1/2 p-4">
              <div>Variant</div>
              <p>Select Variant</p>
            </div>
            <div className="border w-1/2 p-4">
              <div>City</div>
              <p>Show price in my city</p>
            </div>
          </div>

          {/* Price range */}
          <div className="flex items-end gap-4 px-4">
            <h1 className="font-semibold text-2xl text-gray-700">
              Rs. {minPrice}-{maxPrice} Lakh
            </h1>

            <Link href={"#"} className="text-blue-500 text-xs mb-1">
              Punch EV On Road Price
            </Link>
          </div>

          <p className="text-gray-500 px-4 text-sm">
            {" "}
            Ex-Showroom price, Mumbai
          </p>

        {/* EMI Caluctor */}
          <div className="flex justify-between bg-slate-50 p-2 px-8">
            <div>
              <p>Calculate your EMI</p>
              <Link href={"#"} className="text-blue-500 text-xs mb-1">
                EMI Calculator
              </Link>
            </div>

            <button className="px-2 my-1 text-sm font-medium border-[#3AC1B6] border text-[#3AC1B6]">Get EMI Offers</button>
          </div>

          <div className="flex gap-2 font-medium">
            <Timer/>
            Avg. Waiting Period: Upto 27 Weeks
          </div>

          <OrangeButton label="Get Many Offers" additionalStyles="w-3/5 p-3 text-xl"/>
        </div>
      </div>
    </div>
  );
}

export default CarOverview;
