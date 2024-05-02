import { Star } from "lucide-react";
import React from "react";
interface CarOverview {
  carName: string;
  bio: string;
  rating: number;
}
function CarOverview({ carName, bio, rating }: CarOverview) {
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
    </div>
  );
}

export default CarOverview;
