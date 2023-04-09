import { TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Swal from "sweetalert2";
// const Card = ({ name, del, description, imageUrl }) => {
const Card = ({ name, contact, address, imageUrl }) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-blue-500 text-white px-3 py-1 rounded-lg ml-3 text-lg",
      cancelButton: "bg-red-500 text-white px-3 py-1 rounded-lg text-lg",
    },
    buttonsStyling: false,
  });
  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-md dark:bg-[#fff9]">
      <img
        className="h-50 w-50 object-cover object-center"
        src={imageUrl}
        alt={name}
      />
      <div className="relative w-full p-4 font-semibold">
        <h3 className="text-lg text-slate-700">
          <span className="text-black">Name : </span>
          {name}
        </h3>
        <p className="mt-2 text-lg text-slate-700 ">
          <span className="text-black">Contact : </span>
          {contact}
        </p>
        <p className="mt-2 text-lg text-slate-700">
          <span className="text-black">Address : </span>
          {address}
        </p>
        <div
          onClick={handleDelete}
          className="absolute right-3 bottom-3 h-fit w-fit cursor-pointer rounded-lg bg-red-500 p-2 hover:bg-red-400"
        >
          <TrashIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};
export default Card;
