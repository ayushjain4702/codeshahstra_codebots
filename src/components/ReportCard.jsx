import { FlagIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// const Card = ({ name, del, description, imageUrl }) => {
const ReportCard = ({ name, contact, imageUrl }) => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-md">
      <img
        className="h-50 w-50 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-gray-900 text-lg font-semibold">
          <span className="text-black">Name : </span>
          {name}
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          <span className="text-black">Contact : </span>
          {contact}
        </p>
        <div className="mt-5 flex gap-5">
          <div className="h-fit w-fit cursor-pointer rounded-lg bg-red-500 p-2 hover:bg-red-400">
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div className="h-fit w-fit cursor-pointer rounded-lg bg-orange-500 p-2 hover:bg-orange-400">
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div className="h-fit w-fit cursor-pointer rounded-lg bg-yellow-500 p-2 hover:bg-yellow-400">
            <FlagIcon className="h-5 w-5 text-white " />
          </div>
          <div className="h-fit w-fit cursor-pointer rounded-lg bg-green-500 p-2 hover:bg-green-400">
            <FlagIcon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportCard;
