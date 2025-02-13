"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Tile1 = ({ handleNextStep }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState("Regular");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSelect = (num) => {
    setSelectedNumber(num);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleSubmit = () => {
    // Basic validation
    if (selectedTicket && selectedNumber > 0) {
      setIsFormValid(true);
      handleNextStep(); // Trigger the next step
    } else {
      setIsFormValid(false);
      alert("Please select a ticket type and number.");
    }
  };

  const tickets = [
    { type: "Regular", price: "Free" },
    { type: "VIP", price: "$50" },
    { type: "VVIP", price: "$150" },
  ];

  return (
    <div className="bg-[#08252B] border-[#0E464F] p-4 border rounded-2xl">
      {/* ticket select */}
      <div className="flex mx-6 justify-between">
        <h2 className="text-3xl">Ticket Selection</h2>
        <p className="mt-2">Step 1/3</p>
      </div>
      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-2" />
      {/* header */}
      <div className="bg-[#0c333b] border-[#0E464F] rounded-2xl p-2 border">
        <h2 className="text-3xl w-fit mx-auto my-2 font-semibold">
          Techember Fest "25
        </h2>
        <p className="w-fit mx-auto max-w-[300px] my-2 text-center">
          Join us for an unforgettable experience at [location]! Secure a spot
          today.
        </p>
        <p className="w-fit mx-auto max-w-[300px] text-center">
          📍[Event Location] || March 15th, 2025
        </p>
      </div>
      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-4" />

      <p>Select Ticket Type: </p>
      {/* ticket type */}
      <div className="border rounded-2xl bg-[#052228] flex flex-col md:flex-row border-[#0E464F] p-2">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className={`p-2 cursor-pointer w-full border-[#0E464F] m-2 rounded-xl border text-center ${
              selectedTicket === ticket.type
                ? "bg-[#0E464F] text-white"
                : "bg-transparent"
            }`}
            onClick={() => setSelectedTicket(ticket.type)}
          >
            <p className="font-medium text-xl rounded-lg">{ticket.price}</p>
            <p>{ticket.type} Access</p>
            <p className="text-[12px]">20 Left!</p>
          </div>
        ))}
      </div>

      {/* Number of tickets */}
      <div className="relative">
        <p>Number of Tickets</p>
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
                className="p-2 cursor-pointer"
                onClick={() => handleSelect(num)}
              >
                {num}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Next button */}
      <div className="md:flex gap-6 gap-y-4 borde border-[#0E464F] my-4 py- rounded-xl">
        <button className="p-2 rounded-xl w-full my-1 border border-[#0E464F] px-10">
          Cancel
        </button>
        <button
          className="p-2 rounded-xl border w-full my-1 border-[#0E464F] bg-[#24A0B5] px-10"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Tile1;
