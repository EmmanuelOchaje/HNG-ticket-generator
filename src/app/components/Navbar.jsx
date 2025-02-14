"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import ticz from "../assets/images/ticz.png";
import arrow from "../assets/images/arrow.png";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      {/* Navbar Container */}
      <nav className="flex items-center justify-between w-full max-w-[1200px] bg-[#041e24] border border-[#197686] rounded-3xl p-4 md:px-10 mx-4 md:mx-10 my-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="ml-2">
            <Image src={ticz} alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* Navigation Links (Only for md and larger screens) */}
        <ul className="hidden md:flex gap-6 text-white text-lg">
          <li>
            <Link href="/">Events</Link>
          </li>
          <li>
            <Link href="/" className="font-jejumyeongjo">
              My Tickets
            </Link>
          </li>
          <li>
            <Link href="/">About Project</Link>
          </li>
        </ul>

        {/* Button (Always Visible) */}
        <button className="bg-white text-black p-2 flex md:p-3 w-[100px] md:w-[150px] rounded-xl text-sm md:text-base">
          MY TICKETS
          <Image src={arrow} className="my-auto ml-2" width={20} height={20} />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
