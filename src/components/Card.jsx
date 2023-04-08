import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
// const Card = ({ name, del, description, imageUrl }) => {
const Card = ({ name, contact, imageUrl }) => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-md">
      <img
        className="h-50 w-50 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="relative w-full p-4">
        <h3 className="text-gray-900 text-lg font-semibold">
          <span className="text-black">Name : </span>
          {name}
        </h3>
        <p className="text-gray-600 mt-2 text-lg">
          <span className="text-black">Contact : </span>
          {contact}
        </p>
        <p className="text-gray-600 mt-2 text-lg">
          <span className="text-black">Address : </span>
          {contact}
        </p>
        <div className="absolute right-3 bottom-3 h-fit w-fit cursor-pointer rounded-lg bg-red-500 p-2 hover:bg-red-400">
          <TrashIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};
export default Card;
