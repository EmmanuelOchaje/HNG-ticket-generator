"use client";
import React from "react";
import Image from "next/image";
import bckgrd from "../assets/images/bg.png";
import user from "../assets/images/user.png";

const Tile3 = ({ userInfo, selectedImage }) => {
  return (
    <div className="">
      <div className="flex mx-6 justify-between">
        <h2 className="text-3xl">Ready!</h2>
        <p className="mt-2">Step 3/3</p>
      </div>
      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-2" />
      <h2 className="w-fit mx-auto text-4xl font-semibold">
        Your Ticket is booked!
      </h2>
      <p className="w-fit mx-auto my-2">
        You can download or check your email for a copy
      </p>

      <div className="relative">
        {/* Background Image */}
        <div className="mx-auto w-fit relative">
          <Image src={bckgrd} width={400} height={100} alt="Background" />
        </div>

        {/* Ticket Details Overlay */}
        <div className="absolute top-[2%] m-4 left-[10%] right-[10%] border rounded-2xl p-3 border-[#24A0B5]">
          <div className="p-2">
            <h2 className="text-3xl w-fit mx-auto font-semibold">
              Techember Fest "25
            </h2>
            <p className="w-fit my-2 mx-auto max-w-[300px] text-center">
              📍04 Rumens Road, Ikoyi, Lagos
            </p>
            <p className="w-fit mx-auto max-w-[300px] text-center">
              March 15, 2025 | 7:00 PM
            </p>
          </div>

          {/* User Image */}
          <div className="w-[200px] mx-auto my-2">
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
            <div className="w-fit mx-auto">
              <div className="flex w-fit mx-auto">
                <div className="p-2 border-[#12464E] w-[50%] mx-auto border-b border-r">
                  <p className="text-gray-500 mb-2">Enter your name</p>
                  <p>{userInfo.name}</p>
                </div>
                <div className="p-2 border-[#12464E] w-[50%] border-b">
                  <p className="text-gray-500 mb-2">Enter your email</p>
                  <p className="line-clamp-1 text-wrap">{userInfo.email}</p>
                </div>
              </div>
              <div className="flex w-fit mx-auto">
                <div className="p-2 border-[#12464E] w-[50%] mx-auto border-b border-r">
                  <p className="text-gray-500 mb-2">Ticket Type</p>
                  <p>{userInfo.ticketType}</p>
                </div>
                <div className="p-2 border-[#12464E] w-[50%] border-b">
                  <p className="text-gray-500 mb-2">Number of Tickets</p>
                  <p>{userInfo.ticketsAmount}</p>
                </div>
              </div>
            </div>

            {/* Special Request */}
            <div className="px-4">
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
      <div className="flex justify-evenly gap-4 my-4">
        <button className="rounded-xl p-2 w-full border-[#24A0B5] border text-[#24A0B5]">
          Book Another Ticket
        </button>
        <button className="rounded-xl p-2 w-full bg-[#24A0B5]">
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Tile3;
