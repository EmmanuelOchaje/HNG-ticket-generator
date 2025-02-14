"use client";
import React from "react";
import Image from "next/image";
import bckgrd from "../assets/images/bg.png";
import user from "../assets/images/user.png";
import barcode from "../assets/images/bar-code.svg";

const Tile3 = ({ userInfo, selectedImage, step }) => {
  const progressWidth = `${(step / 3) * 100}%`;

  return (
    <div className="px-4">
      <div className="flex mx-6 justify-between flex-wrap">
        <h2 className="text-xl md:text-3xl sm:text-2xl">Ready!</h2>
        <p className="md:mt-2 mt-1 text-sm sm:text-xs">Step 3/3</p>
      </div>
      {/* progress bar */}
      <div className="w-full h-2 my-4 bg-[#0E464F] rounded-full overflow-hidden">
        <div
          className="h-full rounded-2xl bg-[#24A0B5] transition-all duration-300"
          style={{ width: progressWidth }}
        ></div>
      </div>
      {/* <hr className="mx-2 border-[#0E464F] border-[1.5px] my-2" /> */}
      <h2 className="w-fit mx-auto text-xl md:text-4xl font-semibold text-center">
        Your Ticket is booked!
      </h2>
      <p className="w-fit mx-auto my-2 text-center text-sm sm:text-xs">
        You can download or check your email for a copy
      </p>

      {/* Background Image */}
      <div className="bg-image p-4 pt-1">
        {/* Ticket Details Overlay */}
        <div className="border border-[#12464E] w-fit mx-auto mt-3 m-20 rounded-2xl p-2">
          <div className="p-1">
            <h2
              className={`font-road-rage text-2xl sm:text-4xl w-fit mx-auto font-normal text-center`}
            >
              Techember Fest "25
            </h2>
            <p className="w-fit my-1 sm:my-2 mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              📍04 Rumens Road, Ikoyi, Lagos
            </p>
            <p className="w-fit mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              March 15, 2025 | 7:00 PM
            </p>
          </div>

          <div className="w-[120px] mx-auto my-2 sm:w-[150px] md:w-[200px]">
            <Image
              src={selectedImage || user}
              height={200}
              width={200}
              alt="User"
              className="rounded-lg"
            />
          </div>
          {/* info */}
          <div className="flex m-2 mt-4 justify-center">
            <div className="w-fit bg-[#08343C] p-2 rounded-2xl">
              <div className="flex flex-wrap justify-between mx-auto">
                <div className=" border-[#12464E] w-[50%] p-2 border-b border-r">
                  <p className="text-gray-500 mb-2 text-sm">Enter your name</p>
                  <p>{userInfo.name}</p>
                </div>
                <div className=" border-[#12464E] w-[50%] p-2 border-b">
                  <p className="text-gray-500 mb-2 text-sm">Enter your email</p>
                  <p className="line-clamp-1 text-wrap text-sm">
                    {userInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mx-auto">
                <div className=" border-[#12464E] w-[50%] p-2 mx-auto border-b border-r">
                  <p className="text-gray-500 mb-2 text-sm">Ticket Type</p>
                  <p>{userInfo.ticketType}</p>
                </div>
                <div className=" border-[#12464E] w-[50%] p-2 border-b">
                  <p className="text-gray-500 mb-2 text-sm">
                    Number of Tickets
                  </p>
                  <p>{userInfo.ticketsAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image src={barcode} width={300} height={200} />
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-evenly gap-4 my-4 flex-wrap">
        <button className="rounded-xl p-2 w-full sm:w-[48%] border-[#24A0B5] border text-[#24A0B5]">
          Book Another Ticket
        </button>
        <button className="rounded-xl p-2 w-full sm:w-[48%] bg-[#24A0B5]">
          Download Ticket
        </button>
      </div> */}
    </div>
  );
};

export default Tile3;

/* <div className="w-fit mx-auto sm:my-4">
              <div className="flex flex-wrap justify-between mx-auto">
                <div className=" border-[#12464E] w-[%] mx-auto border-b border-r sm:w-[%]">
                  <p className="text-gray-500 mb-2 text-sm">Enter your name</p>
                  <p>{userInfo.name}</p>
                </div>
                <div className=" border-[#12464E] w-[%] border-b sm:w-[%]">
                  <p className="text-gray-500 mb-2 text-sm">Enter your email</p>
                  <p className="line-clamp-1 text-wrap text-sm">
                    {userInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mx-auto">
                <div className=" border-[#12464E] w-[%] mx-auto border-b border-r sm:w-[%]">
                  <p className="text-gray-500 mb-2 text-sm">Ticket Type</p>
                  <p>{userInfo.ticketType}</p>
                </div>
                <div className=" border-[#12464E] w-[%] border-b sm:w-[%]">
                  <p className="text-gray-500 mb-2 text-sm">
                    Number of Tickets
                  </p>
                  <p>{userInfo.ticketsAmount}</p>
                </div>
              </div>
            </div> */

/* <div className="bg-[#08343C] p-1 w-[300px] mx-auto border rounded-2xl">
            {/* Special Request 
            <div className="p- my-4 text-sm sm:text-xs">
            <p className="text-gray-500">Special request?</p>
            <p className="text-center w-[200px] text-[13px] w- mx-auto">
              Nil? Or the user's sad story they write in there gets this whole
              space. Max of three rows.
            </p>
          </div>
        </div> */

/*  <div className="border border-[#24A0B5] m- rounded-2xl">
          <div className="p-2">
            <h2
              className={`${roadRage.className} text-2xl sm:text-4xl w-fit mx-auto font-semibold text-center`}
            >
              Techember Fest "25
            </h2>
            <p className="w-fit my-1 sm:my-2 mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              📍04 Rumens Road, Ikoyi, Lagos
            </p>
            <p className="w-fit mx-auto max-w-[300px] text-center text-sm sm:text-xs">
              March 15, 2025 | 7:00 PM
            </p>
          </div>

          {/* User Image 
          

          {/* User Information 
        </div> */

/* <div>
          <div className="flex flex-wrap justify-between mx-auto">
            <div className=" border-[#12464E] border-b border-r">
              <p className="text-gray-500 mb-2 text-sm">Enter your name</p>
              <p>{userInfo.name}</p>
            </div>
            <div className=" border-[#12464E] border-b">
              <p className="text-gray-500 mb-2 text-sm">Enter your email</p>
              <p className="line-clamp-1 text-wrap text-sm">{userInfo.email}</p>
            </div>
          </div>
        </div> */
