import Tile1 from "./Tile-1";
import Tile2 from "./Tile-2";
import Tile3 from "./Tile-3";

const TicketSelection = ({ step, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="flex justify-center p-4 sm:p-6 rounded-2xl w-full max-w-[95%] sm:max-w-[500px] mx-auto border-[#0E464F] border bg-[#041E23]">
      <div className="w-full sm:w-[400px] md:w-[500px]">
        {/* Tiles */}
        {step === 1 && (
          <Tile1
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 2 && (
          <Tile2
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 3 && <Tile3 handlePreviousStep={handlePreviousStep} />}
      </div>
    </div>
  );
};

export default TicketSelection;
