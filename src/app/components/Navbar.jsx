"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#041e24] border border-[#197686] rounded-3xl p-4 md:px-10 mx-4 md:mx-10 my-4">
      {/* Logo and Header */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
        <h1 className="text-white text-2xl ml-2">ticz</h1>
      </div>

      {/* Links for Large Screens */}
      <ul className="hidden md:flex gap-6 text-white text-lg">
        <li>
          <Link href="/">Events</Link>
        </li>
        <li>
          <Link href="/">My Tickets</Link>
        </li>
        <li>
          <Link href="/">About Project</Link>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-white text-black p-3 w-[150px] rounded-xl">
        MY TICKETS
      </button>
    </nav>
  );
};

export default Navbar;
