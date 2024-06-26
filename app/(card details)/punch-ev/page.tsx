import React from "react";
import CarOverview from "../_components/overview";
import CarVariants from "../_components/CarVariants";

function CarDetails() {
  return (
    <div className="px-64 py-4 pt-20 flex flex-col gap-6">
      <CarOverview
        carName="Tata Punch EV"
        rating={4.7}
        bio=" The price of Tata Punch EV, a Compact SUV, ranges from Rs. 10.99 - 15.49
      Lakh. It is available in 20 variants. Punch EV comes with 6 airbags.
      Tata Punch EV has a ground clearance of 190 mm and is available in 5
      colours. Users have reported a driving range of 378.6 Km for Punch EV."
        minPrice={10.99}
        maxPrice={15.49}
      />

      <CarVariants
        heading={"Tata Punch EV Price"}
        sectionBio={
          "Tata Punch EV price for the base model starts at Rs. 10.99 Lakh and the top model price goes upto Rs. 15.49 Lakh (Avg. ex-showroom). Punch EV price for 20 variants is listed below. "
        }
      />
    </div>
  );
}

export default CarDetails;
