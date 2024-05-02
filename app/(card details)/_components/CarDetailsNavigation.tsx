import { carDetailsNavbarItems } from "@/constants";
import Link from "next/link";
import React from "react";

function CarDetailsNavigation() {
  return (
    <div className="flex border-b py-4 gap-8 uppercase text-sm font-medium text-gray-500">
      {carDetailsNavbarItems.map((item) => (
        <Link key={item} href={"#" + item}>
          {item}
        </Link>
      ))}
    </div>
  );
}

export default CarDetailsNavigation;
