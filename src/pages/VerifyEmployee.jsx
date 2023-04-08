import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";

const VerifyEmployee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  function handleImageChange(event) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }
  function handleImageChange2(event) {
    setSelectedImage2(URL.createObjectURL(event.target.files[1]));
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Verify Employee" />
      <div className="flex flex-wrap">
        <div className="flex-1 items-center justify-between">
          <h1 className="mb-7 mt-10 text-xl font-bold text-black">
            Upload Your Image
          </h1>
          <div>
            <label
              htmlFor="image-upload"
              className="mb-4 cursor-pointer rounded-lg bg-blue-100 p-3 text-xl"
            >
              Select Image
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="mb-4 h-64 w-64 object-contain"
              />
            )}
            <button className="rounded bg-blue-300 py-2 px-4 text-lg font-bold text-white hover:bg-blue-500">
              Upload
            </button>
          </div>
        </div>
        <div className="flex-1 items-center justify-between">
          <h1 className="mb-7 mt-10 text-xl font-bold text-black">
            Upload Aadhar
          </h1>
          <div>
            <label
              htmlFor="image-upload"
              className="mb-4 cursor-pointer rounded-lg bg-blue-100 p-3 text-xl"
            >
              Select Image
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange2}
              className="hidden"
            />
            {selectedImage2 && (
              <img
                src={selectedImage2}
                alt="Selected"
                className="mb-4 h-64 w-64 object-contain"
              />
            )}
            <button className="rounded bg-blue-300 py-2 px-4 text-lg font-bold text-white hover:bg-blue-500">
              Upload
            </button>
          </div>
        </div>
      </div>
      <button className="mt-5 rounded bg-slate-300 py-2 px-4 text-3xl font-black text-black hover:bg-blue-500">
        Verify
      </button>
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
