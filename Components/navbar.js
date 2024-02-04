import React from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <header className=" shadow-md w-full">
      <div className="flex container flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="flex ml-40 ">
          <Image
            src="/logo-new.svg"
            alt="Logo"
           
            width="140"
            height="85"
            position="relative"
            priority
          />

          <div className="flex gap-1 items-center ml-4">
            <IoMdMenu color="#00D094" />
            <span className="mr-4 text-[#00D094]">Category</span>
          </div>
        </div>

        <div className="relative md:flex-none w-96 order-2 sm:order-1 flex justify-center ml-1 py-4 sm:py-0 ">
          <input
            type="text"
            placeholder="If you’re wondering whether to buy it or not"
            className="pl-8 pr-4 py-2 border border-gray-200 rounded-md  focus:outline-none focus:border-TestValley-700 w-full"
          />
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
          />
        </div>

        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-3">
            <Image
              src="/home-event.svg"
              alt="home-event"
              width={28}
              height={28}
            />
            |<span className="text-gray-600">Login/Sign up</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
