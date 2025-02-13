"use client";
import { useState } from "react";
import Image from "next/image";
import download from "../assets/images/download.png";
import Form from "./Form";
import Tile3 from "./Tile-3"; // Import Tile3

const Tile2 = ({ handlePreviousStep }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    ticketType: "",
    ticketsAmount: 1,
  });
  const [showTicketPage, setShowTicketPage] = useState(false); // State to control which page is shown

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleGoToTicket = () => {
    setShowTicketPage(true); // Show Tile3 when the button is clicked
  };

  // If the showTicketPage state is true, render Tile3 with user information
  if (showTicketPage) {
    return <Tile3 userInfo={userInfo} selectedImage={selectedImage} />;
  }

  return (
    <div className="bg-[#08252B] border-[#0E464F] border rounded-2xl p-4">
      {/* ticket details */}
      <div className="flex mx-6 justify-between">
        <h2 className="text-3xl">Ticket Details</h2>
        <p className="mt-2">Step 2/3</p>
      </div>
      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-4" />

      <div className="bg-[#052228] p-2 border rounded-2xl border-[#0E464F]">
        <h2 className="my-2">Upload Profile Photo</h2>

        {/* chat */}
        <div className="bg-[#02191D] mx-2">
          <div
            className="bg-[#0E464F] w-[50%] py-10 rounded-xl mx-auto h-[200px] flex flex-col items-center justify-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <div className="w-fit mx-auto my-2">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  width={80}
                  height={80}
                  className="rounded-lg"
                  alt="Preview"
                />
              ) : (
                <Image
                  src={download}
                  width={30}
                  height={30}
                  alt="Download Icon"
                />
              )}
            </div>
            <p className="text-center mx-4 text-white">
              Drag & drop or click to upload
            </p>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>

      <hr className="mx-2 border-[#0E464F] border-[1.5px] my-2" />

      {/* form */}
      <Form
        setUserInfo={setUserInfo}
        handlePreviousStep={handlePreviousStep}
        handleGoToTicket={handleGoToTicket}
      />
    </div>
  );
};

export default Tile2;
