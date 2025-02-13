"use client";
import React from "react";
import Image from "next/image";
import bckgrd from "../assets/images/bg.png";
import user from "../assets/images/user.png";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  weight: "400",
  variable: "--road-rage",
  subsets: ["latin"],
});

const Tile3 = ({ userInfo, selectedImage }) => {
  return (
    <div className="px-4">
      <div className="flex mx-6 justify-between flex-wrap">
        <h2 className="text-3xl sm:text-2xl">Ready!</h2>
        <p className="mt-2 text-sm sm:text-xs">Step 3/3</p>
      </div>
      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-2" />
      <h2 className="w-fit mx-auto text-4xl font-semibold text-center">
        Your Ticket is booked!
      </h2>
      <p className="w-fit mx-auto my-2 text-center text-sm sm:text-xs">
        You can download or check your email for a copy
      </p>

      <div className="relative">
        {/* Background Image */}
        <div className="mx-auto w-full relative">
          <Image
            src={bckgrd}
            layout="responsive"
            width={500}
            height={100}
            alt="Background"
            className="object-cover w-full h-[150px] sm:h-[200px]"
          />
        </div>

        {/* Ticket Details Overlay */}
        <div className="absolute top-[2%] m-4 left-[10%] right-[10%] border rounded-2xl p-3 border-[#24A0B5] sm:left-[5%] sm:right-[5%] sm:top-[5%]">
          <div className="p-2">
            <h2
              className={`${roadRage.className} text-5xl sm:text-4xl w-fit mx-auto font-semibold text-center`}
            >
              Techember Fest "25
            </h2>
            <p className="w-fit my-2 mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              📍04 Rumens Road, Ikoyi, Lagos
            </p>
            <p className="w-fit mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              March 15, 2025 | 7:00 PM
            </p>
          </div>

          {/* User Image */}
          <div className="w-[200px] mx-auto my-2 sm:w-[150px]">
            <Image
              src={selectedImage || user}
              height={200}
              width={200}
              alt="User"
              className="rounded-lg"
            />
          </div>

          {/* User Information */}
          <div className="bg-[#08343C] p-1 rounded-2xl">
            <div className="w-fit mx-auto my-4">
              <div className="flex flex-wrap justify-between mx-auto">
                <div className="p-2 border-[#12464E] w-[48%] mx-auto border-b border-r sm:w-[48%]">
                  <p className="text-gray-500 mb-2 text-sm">Enter your name</p>
                  <p>{userInfo.name}</p>
                </div>
                <div className="p-2 border-[#12464E] w-[48%] border-b sm:w-[48%]">
                  <p className="text-gray-500 mb-2 text-sm">Enter your email</p>
                  <p className="line-clamp-1 text-wrap text-sm">
                    {userInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mx-auto">
                <div className="p-2 border-[#12464E] w-[48%] mx-auto border-b border-r sm:w-[48%]">
                  <p className="text-gray-500 mb-2 text-sm">Ticket Type</p>
                  <p>{userInfo.ticketType}</p>
                </div>
                <div className="p-2 border-[#12464E] w-[48%] border-b sm:w-[48%]">
                  <p className="text-gray-500 mb-2 text-sm">
                    Number of Tickets
                  </p>
                  <p>{userInfo.ticketsAmount}</p>
                </div>
              </div>
            </div>

            {/* Special Request */}
            <div className="px-4 my-4 text-sm sm:text-xs">
              <p className="text-gray-500">Special request?</p>
              <p className="text-balance text-[13px] w-fit mx-auto">
                Nil? Or the user's sad story they write in there gets this whole
                space. Max of three rows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-evenly gap-4 my-4 flex-wrap">
        <button className="rounded-xl p-2 w-full sm:w-[48%] border-[#24A0B5] border text-[#24A0B5]">
          Book Another Ticket
        </button>
        <button className="rounded-xl p-2 w-full sm:w-[48%] bg-[#24A0B5]">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Tile3;
