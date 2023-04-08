import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";

const VerifyEmployee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleImageChange2 = (e) => {
    setSelectedImage2(URL.createObjectURL(e.target.files[0]));
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

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="flex-1 items-center justify-between space-y-5">
            <h1 className="mb-2  text-lg font-bold text-slate-500">
              Upload Employee Image
            </h1>
            <div className="flex flex-col">
              <label
                htmlFor="image-upload-1"
                className="mx-auto mb-4 w-fit cursor-pointer rounded-lg bg-blue-200 px-3 py-1 text-lg hover:bg-blue-100"
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
          className="mx-auto mt-5 flex w-2/4 items-center justify-center rounded-xl bg-slate-200 py-2 px-4 text-2xl font-black hover:bg-blue-200"
        >
          Verify
        </button>
      </form>

      {/* <div class="mb-2 md:w-2/4">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font">Tailwind-Alpine File Input Preview</h2>
        <p class="text-slate-400 text-lg font-thin">Show instant thumbnail preview with multiple file support</p>

        <form x-data="activateImagePreview()" class="mt-6">
        
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload single file</label>
          <input class="block w-full h-10.5 leading-9 rounded overflow-hidden text-sm text-gray-900 bg-gray-50 border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="single_file" accept="image/*" @change="showPreview(event, $refs.previewSingle)" type="file"/>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          <div x-ref="previewSingle" class="mt-2"></div>
        </div>
        
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload multiple files</label>
          <input class="block w-full h-10.5 leading-9 rounded overflow-hidden text-sm text-gray-900 bg-gray-50 border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" accept="image/*" @change="showPreview(event, $refs.previewMulti)" type="file" multiple/>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
          <div x-ref="previewMulti" class="flex flex-wrap gap-4 mt-2"></div>
        </div>
        
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-5 py-2.5 text-base">Upload Files</button>

        </form>
      </div> */}
    </DefaultLayout>
  );
};

export default VerifyEmployee;
