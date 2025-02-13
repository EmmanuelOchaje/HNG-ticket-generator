"use client";
import { useState } from "react";
import envelope from "../assets/images/envelope.png";
import Image from "next/image";

const Form = ({ handleGoToTicket, handlePreviousStep, setUserInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shortInfo: "",
  });

  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulating auth check

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.shortInfo.trim())
      newErrors.shortInfo = "Short info is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("You need to log in first!");
      return;
    }

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");

      // Update userInfo in Tile2
      setUserInfo({
        name: formData.name,
        email: formData.email,
        ticketType: "General Admission", // Example value, replace with dynamic data if needed
        ticketsAmount: 1, // Example value, replace with dynamic data if needed
      });

      // Clear form after submission
      setFormData({ name: "", email: "", shortInfo: "" });
      setErrors({});

      // Proceed to ticket if function is provided
      if (handleGoToTicket) handleGoToTicket();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-md rounded-lg bg-transparent">
      <h2 className="text-lg font-semibold mb-4">Submit Your Details</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div>
          <label className="block font-medium">Enter your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md bg-transparent border-[#24A0B5]"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className="block font-medium">Enter your email</label>
          <div className="flex items-center border p-2 rounded-md bg-transparent border-[#24A0B5]">
            <Image src={envelope} width={20} height={20} alt="Envelope Icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none"
              placeholder="hello@example.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Short Info Textarea */}
        <div>
          <label className="block font-medium">About the project</label>
          <textarea
            name="shortInfo"
            value={formData.shortInfo}
            onChange={handleChange}
            className="w-full border p-2 rounded-md bg-transparent border-[#24A0B5]"
            placeholder="Provide a short description"
            rows="3"
          />
          {errors.shortInfo && (
            <p className="text-red-500 text-sm">{errors.shortInfo}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-between gap-4">
          <button
            type="button"
            className="text-gray-700 p-2 rounded-md w-full border border-gray-400"
            onClick={handlePreviousStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="text-white bg-[#24A0B5] p-2 rounded-md w-full"
          >
            Go to my ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
