import Link from "next/link";

type carVariantsType = {
  variantName: string;
  description: string;
  price: string;
};

const carVariants: carVariantsType[] = [
  {
    variantName: "Punch EV Smart 3.3",
    description: "25 kWh, Electric, Automatic, 315 ",
    price: "10.99",
  },
  {
    variantName: "Punch EV Smart 3.3",
    description: "25 kWh, Electric, Automatic, 315 ",
    price: "10.99",
  },
  {
    variantName: "Punch EV Smart 3.3",
    description: "25 kWh, Electric, Automatic, 315 ",
    price: "10.99",
  },
  {
    variantName: "Punch EV Smart 3.3",
    description: "25 kWh, Electric, Automatic, 315 ",
    price: "10.99",
  },
];
function CarVariants({
  sectionBio,
  heading,
}: {
  sectionBio: string;
  heading: string;
}) {
  return (
    <div className="flex gap-4" id="variants">
      {/* Left */}
      <div className="flex flex-col gap-4 w-3/4">
        <h1 className="text-xl font-medium ">{heading}</h1>
        <p className="text-sm text-gray-500">{sectionBio}</p>
        <div className="p-4 flex flex-col border gap-4">
          <div className="border-b flex justify-between text-gray-400 py-4 font-semibold">
            <h1>Variants</h1>
            <h1>Ex-Showroom price</h1>
            <h1>Compare</h1>
          </div>

          {carVariants.map((eachCarVariant) => (
            <CarVariant key={eachCarVariant.variantName} {...eachCarVariant} />
          ))}

            <Link href={"#"} className="text-blue-500 flex-center">View More Vairiants</Link> 

        </div>
      </div>

      {/* Right */}
      <div></div>
    </div>
  );
}

export default CarVariants;

function CarVariant({ variantName, description, price }: carVariantsType) {
  return (
    <div className="flex justify-between border-b py-2">
      <div>
        <h1 className="text-gray-600 font-normal">{variantName}</h1>
        <p className="text-gray-500 text-ellipsis">{description}</p>
      </div>

      <p className="font-medium text-gray-700 ">Rs. {price} Lakh</p>
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 justify-end">
            <p className="text-xs text-gray-400">Add to compare</p>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex text-blue-500 font-medium text-sm gap-2">
            <Link href={"#"}>Show price in my city</Link> |
            <Link href={"#"}>Get Offers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
