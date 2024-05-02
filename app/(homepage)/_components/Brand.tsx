import { BrandType as BrandProps } from "@/types/brand";
import Image from "next/image";
import React from "react";

function Brand({ label, imgSrc }: BrandProps) {
  return (
    <div className="border flex-center flex-col w-1/6 h-32 gap-2">
      <Image
        src={imgSrc}
        height={2000}
        width={2000}
        alt={label + "-logo"}
        className="h-1/2 w-1/2 object-contain"
      />
      <h1 className="text-xs font-medium text-gray-600">{label}</h1>
    </div>
  );
}

export default Brand;
