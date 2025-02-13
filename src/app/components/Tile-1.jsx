"use client";
import { Road_Rage } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const roadRage = Road_Rage({
  weight: "400",
  variable: "--road-rage",
  subsets: ["latin"],
});

const Tile1 = ({ handleNextStep }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("Regular");

  const handleSelect = (num) => {
    setSelectedNumber(num);
    setIsOpen(false);
  };

  const handleSubmit = () => {
    if (selectedTicket && selectedNumber > 0) {
      handleNextStep();
    } else {
      alert("Please select a ticket type and number.");
    }
  };

  const tickets = [
    { type: "Regular", price: "Free" },
    { type: "VIP", price: "$50" },
    { type: "VVIP", price: "$150" },
  ];

  return (
    <div className="bg-[#08252B] border-[#0E464F] p-4 sm:p-6 border rounded-2xl w-full max-w-[95%] sm:max-w-[500px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Ticket Selection</h2>
        <p className="text-sm sm:text-lg">Step 1/3</p>
      </div>
      <hr className="border-[#0E464F] border-[1.5px] my-2" />

      {/* Event Info */}
      <div className="bg border-[#0E464F] rounded-2xl p-3 sm:p-4 text-center">
        <h2
          className={`text-xl sm:text-3xl md:text-5xl ${roadRage.className} font-semibold`}
        >
          Techember Fest '25
        </h2>
        <p className="text-xs sm:text-sm mt-2">
          Join us for an unforgettable experience at [location]! Secure a spot
          today.
        </p>
        <p className="text-xs sm:text-sm mt-1">
          📍[Event Location] || March 15th, 2025
        </p>
      </div>
      <hr className="border-[#0E464F] border-[1.5px] my-4" />

      {/* Ticket Selection */}
      <p className="text-sm sm:text-base">Select Ticket Type:</p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className={`p-3 cursor-pointer flex-1 text-center border border-[#0E464F] rounded-xl transition-all ${
              selectedTicket === ticket.type
                ? "bg-[#0E464F] text-white"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedTicket(ticket.type)}
          >
            <p className="text-base sm:text-lg font-medium">{ticket.price}</p>
            <p className="text-xs sm:text-sm">{ticket.type} Access</p>
            <p className="text-[10px] sm:text-xs">20 Left!</p>
          </div>
        ))}
      </div>

      {/* Number of Tickets */}
      <div className="relative mt-4">
        <p className="text-sm sm:text-base">Number of Tickets</p>
        <div
          className="flex justify-between items-center border border-[#0E464F] rounded-md p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedNumber}</span>
          <FaChevronDown />
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full mt-1 border border-[#0E464F] bg-[#08252b] rounded-md shadow-md z-50">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="p-2 cursor-pointer hover:bg-[#0E464F] text-center"
                onClick={() => handleSelect(num)}
              >
                {num}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4">
        <button className="p-2 rounded-xl w-full border border-[#0E464F]">
          Cancel
        </button>
        <button
          className="p-2 rounded-xl w-full border border-[#0E464F] bg-[#24A0B5]"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tile1;
