import { FlagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Swal from "sweetalert2";

const ReportCard = ({ name, contact, imageUrl }) => {
  const [selectedFlag, setSelectedFlag] = useState(null);

  const handleFlagClick = (flagName) => {
    setSelectedFlag(flagName);
  };

  const handleOk = async () => {
    const { value: text } = await Swal.fire({
      title: `Flagged as ${selectedFlag}`,
      input: "textarea",
      inputLabel: "Reason",
      inputPlaceholder: "Type your reason here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },

      showCancelButton: true,
    });
    if (text) {
      Swal.fire("Flag updated !!");
    }
  };

  return (
    <div className="relative flex overflow-hidden rounded-lg bg-white shadow-md dark:bg-[#fff9] ">
      <img
        className="h-50 w-50 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4 font-semibold">
        <h3 className="text-lg text-slate-700">
          <span className="text-black">Name : </span>
          {name}
        </h3>
        <p className="mt-2 text-lg text-slate-700">
          <span className="text-black">Contact : </span>
          {contact}
        </p>
        <div className="mt-5 flex gap-5">
          <div
            className={`h-fit w-fit cursor-pointer rounded-lg ${
              selectedFlag === "red"
                ? "border-2 border-slate-400 bg-red-400"
                : "bg-red-500 hover:bg-red-400"
            } p-2`}
            onClick={() => handleFlagClick("red")}
          >
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div
            className={`h-fit w-fit cursor-pointer rounded-lg ${
              selectedFlag === "orange"
                ? "border-2 border-slate-400 bg-orange-400"
                : "bg-orange-500 hover:bg-orange-400"
            } p-2`}
            onClick={() => handleFlagClick("orange")}
          >
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div
            className={`h-fit w-fit cursor-pointer rounded-lg ${
              selectedFlag === "yellow"
                ? "border-2 border-slate-400 bg-yellow-400"
                : "bg-yellow-500 hover:bg-yellow-400"
            } p-2`}
            onClick={() => handleFlagClick("yellow")}
          >
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div
            className={`h-fit w-fit cursor-pointer rounded-lg ${
              selectedFlag === "green"
                ? "border-2 border-slate-400 bg-green-400"
                : "bg-green-500 hover:bg-green-400"
            } p-2`}
            onClick={() => handleFlagClick("green")}
          >
            <FlagIcon className="h-5 w-5 text-white" />
          </div>
        </div>
        <div
          className={`absolute right-3 bottom-3 mt-3 flex w-20 cursor-pointer justify-center rounded-lg bg-blue-600 py-1 text-lg font-bold text-white ${
            selectedFlag ? "" : "cursor-not-allowed opacity-40"
          }`}
          onClick={handleOk}
          disabled={!selectedFlag}
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
