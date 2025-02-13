"use client";
import Navbar from "./components/Navbar";
import TicketSelection from "./components/TicketSelection";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <div className="">
      <Navbar />
      <TicketSelection step={step} handleNextStep={handleNextStep} />
    </div>
  );
}
