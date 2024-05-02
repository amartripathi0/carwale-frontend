import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="px-64 bg-[#002B51] text-gray-100 h-[50vh]">
      <div className=" text-xs flex gap-16 py-8 border-b border-gray-600">
        <h3 className="flex gap-4">
          Language: <span>English</span> <span>हिंदी</span>
        </h3>
        |
        <div className="flex gap-28">
          <Link href={"about-us"}>About Us</Link>
          <Link href={"carrers"}>Carrers</Link>
          <Link href={"terms-and-conditions"}>Terms & Conditions</Link>
          <Link href={"advertise"}>Advertise</Link>
        </div>
      </div>

      {/* social links */}
      <div className="flex py-4 border-b border-gray-600">
        <div className="w-1/2 flex flex-col gap-2">
          <p className="uppercase text-sm text-[#6E808C]">Connect with us</p>
          <div className="flex gap-16">
            <span className="rounded-full p-1 border text-xs">
              <Facebook />
            </span>
            <span className="rounded-full p-1 border text-xs">
              <X />
            </span>
            <span className="rounded-full p-1 border text-xs">
              <Youtube />
            </span>
            <span className="rounded-full p-1 border text-xs">
              <Linkedin />
            </span>
            <span className="rounded-full p-1 border text-xs">
              <Instagram />
            </span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <p className="uppercase text-sm text-[#6E808C]">
            DOWNLOAD MOBILE APP
          </p>
          <div className="flex">
            <Image
              src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2"
              height={2000}
              width={2000}
              alt="App store"
              className="w-40 h-10 "
            />
            <Image
              src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2"
              height={2000}
              width={2000}
              alt="Play store"
              className="w-40 h-20"
            />
          </div>
        </div>
      </div>

      <div className="flex py-10 border-b border-gray-600 ">
       
      </div>

      <div className="flex justify-between p-4 text-xs">
        <p>&copy;CarTrade Tech.</p>
        <p>Visitor Agreement & Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
