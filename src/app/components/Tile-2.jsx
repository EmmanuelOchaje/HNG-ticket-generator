"use client";
import { useState } from "react";
import Image from "next/image";
import download from "../assets/images/download.png";
import Form from "./Form";
import Tile3 from "./Tile";

const Tile2 = ({ handlePreviousStep, step }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    ticketType: "",
    ticketsAmount: 1,
  });
  const [showTicketPage, setShowTicketPage] = useState(false);
  const progressWidth = `${(step / 3) * 100}%`;

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
    setShowTicketPage(true);
  };

  if (showTicketPage) {
    return <Tile3 userInfo={userInfo} selectedImage={selectedImage} />;
  }

  return (
    <div className="bg-[#08252B] border-[#0E464F] border rounded-2xl p-4 sm:p-6 w-full max-w-[95%] sm:max-w-[500px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl">Ticket Details</h2>
        <p className="text-sm sm:text-lg mt-2">Step 2/3</p>
      </div>
      {/* progress bar */}
      <div className="w-full h-2 my-4 bg-[#0E464F] rounded-full overflow-hidden">
        <div
          className="h-full rounded-2xl bg-[#24A0B5] transition-all duration-300"
          style={{ width: progressWidth }}
        ></div>
      </div>
      {/* <hr className="border-[#0E464F] border-[1.5px] my-2" /> */}

      <div className="bg-[#052228] p-3 sm:p-4 border rounded-2xl border-[#0E464F]">
        <h2 className="text-sm sm:text-base my-2">Upload Profile Photo</h2>
        <div className="bg-[#02191D] rounded-xl">
          <div
            className="bg-[#0E464F] w-[50%] max-w-[300px] sm:max-w-[400px] py-10 rounded-xl mx-auto flex flex-col items-center justify-center cursor-pointer"
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
            <p className="text-center mx-4 text-white text-xs sm:text-sm">
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
      <hr className="border-[#0E464F] border-[1.5px] my-4" />
      <Form
        setUserInfo={setUserInfo}
        handlePreviousStep={handlePreviousStep}
        handleGoToTicket={handleGoToTicket}
      />
    </div>
  );
};

export default Tile2;
