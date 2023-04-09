import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const VerifyEmployee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [empDesc, setEmpDesc] = useState({});

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    const formData = new FormData();
    formData.append("id_proof", selectedImage2);
    formData.append("face_image", selectedImage);

    const { data } = await axios.post(
      "http://99ab-34-90-64-81.ngrok-free.app/validate",
      formData
    );
    console.log(data);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Verify Employee" />
      <div className="ml-30 flex justify-between">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex flex-col items-center justify-between space-y-5">
              <h1 className="mb-2  text-lg font-bold text-slate-500">
                Upload Employee Image
              </h1>
              <div className="flex flex-col">
                <label
                  htmlFor="image-upload-1"
                  className="mx-auto mb-4 w-fit cursor-pointer rounded-lg bg-blue-200 px-3 py-1 text-lg hover:bg-blue-100 dark:text-black"
                >
                  Select Image
                </label>
                <input
                  id="image-upload-1"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="mb-4 h-50 w-auto object-contain"
                  />
                )}
                {!selectedImage && (
                  <div className="mx-auto flex h-50 w-[400px] items-center justify-center rounded-xl border border-gray-2 bg-slate-200 dark:bg-slate-700">
                    <CloudArrowUpIcon className="h-18 w-18" />
                  </div>
                )}
                {/* <button
                type="submit"
                className="rounded bg-blue-300 py-2 px-4 text-lg font-bold text-white hover:bg-blue-500"
              >
                Upload
              </button> */}
              </div>
            </div>
            <div className="flex-1 items-center justify-between space-y-5"></div>
          </div>
          <button
            type="submit"
            className="mx-auto mt-10 flex w-1/4 items-center justify-center rounded-xl bg-slate-200 py-2 px-4 text-2xl font-bold hover:bg-blue-200 dark:bg-slate-700 dark:text-white"
          >
            Verify
          </button>
        </form>

        <div className="mx-5 mb-2 h-full w-[400px] rounded-lg bg-slate-300 px-5 py-3">
          {!empDesc ? (
            <div className="">
              <h1 className="mb-2 text-lg font-bold text-slate-800">
                Employee Information
              </h1>
              <p className="mt-2 text-lg text-slate-700">
                <span className="text-black">Name : </span>
                Kevin
              </p>
              <p className="mt-2 text-lg text-slate-700">
                <span className="text-black">Address : </span>
                Kevin
              </p>
              <p className="mt-2 text-lg text-slate-700">
                <span className="text-black">Contact : </span>
                Kevin
              </p>
              <p className="mt-2 text-lg text-slate-700">
                <span className="text-black">Aadhar No. : </span>
                Kevin
              </p>
            </div>
          ) : (
            <NavLink to="/docUpload">
              <div className="mx-auto flex items-center justify-center rounded-xl bg-slate-200 py-2 px-4 text-xl font-semibold hover:bg-blue-200 dark:bg-slate-700 dark:text-white">
                Documents Upload
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default VerifyEmployee;
