import { Star } from "lucide-react";
import React from "react";

function CarDetails() {
  return (
    <div className="px-64 py-4 pt-20 flex flex-col gap-6">
      {/* Car Heading and Reating */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium ">Tata Punch EV</h1>
        <div className="flex items-center border gap-1 ">
          <span className="bg-cyangreen p-1">
            <Star className="text-white  fill-white" />
          </span>
          <h2 className="text-cyangreen ">
            4.7 <span className="text-sm text-gray-500">User Rating(74)</span>
          </h2>
          <p className="text-blue-600 text-sm mx-4 font-medium">Rate & Win</p>
        </div>
      </div>

    {/* About Car */}
      <p className="text-sm text-gray-600">The price of Tata Punch EV, a Compact SUV, ranges from Rs. 10.99 - 15.49 Lakh. It is available in 20 variants. Punch EV comes with 6 airbags. Tata Punch EV has a ground clearance of 190 mm and is available in 5 colours. Users have reported a driving range of 378.6 Km for Punch EV.</p>
    </div>
  );
}

export default CarDetails;
