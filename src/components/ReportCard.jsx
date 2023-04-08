import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// const Card = ({ name, del, description, imageUrl }) => {
const ReportCard = ({ name, description, imageUrl }) => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-md">
      <img
        className="h-50 w-50 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-gray-900 text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="h-fit w-fit cursor-pointer rounded-lg bg-red-500 p-2 hover:bg-red-400">
          <TrashIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};
export default ReportCard;
