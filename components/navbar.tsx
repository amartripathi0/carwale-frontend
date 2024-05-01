import { CircleUserRound, Languages, MapPin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLink = [
  {
    label: "New Cars",
    href: "new-cars",
  },
  {
    label: "Used Cars",
    href: "used-cars",
  },
  {
    label: "Reviews & News",
    href: "reviews-and-news",
  },
];
function Navbar() {
  return (
    <nav className="flex w-full px-24 h-14 border">
      {/* left side */}
      <div className="w-1/2 h-full flex justify-between items-center">
        <Image
          src={
            "https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
          }
          width={140}
          height={20}
          alt="carwale-logo"
        />

        {navLink.map((navItem) => (
          <Link
            key={navItem.label}
            href={navItem.href}
            className="hover:border-b-4 hover:border-b-[#00AFA0] uppercase font-semibold text-[#484848]  text-sm border-transparent h-full flex-center"
          >
            {navItem.label}
          </Link>
        ))}
      </div>

      {/* right side */}
      <div className="w-1/2 flex justify-end items-center gap-6 py-1 text-[#484848]">
        <div className="border h-full w-1/2 justify-end rounded-sm flex items-center pr-4 focus-within:border-[#00AFA0]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full px-4 outline-none"
          />
          <Search />
        </div>
        <MapPin />
        <Languages />
        <CircleUserRound />
      </div>
    </nav>
  );
}

export default Navbar;
