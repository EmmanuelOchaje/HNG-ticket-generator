import Tile1 from "./Tile-1";
import Tile2 from "./Tile-2";
import Tile3 from "./Tile-3";

const TicketSelection = ({ step, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="flex justify-center p-4 rounded-2xl w-fit mx-auto border-[#0E464F] border bg-[#041E23]">
      <div className="w-[500px]">
        {/* tiles */}
        <div>
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
    </div>
  );
};

export default TicketSelection;
