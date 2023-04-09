import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const DocUpload = () => {
  const [faceImage, setfaceImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handlefaceImageChange = (e) => {
    setfaceImage(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageChange2 = (e) => {
    setSelectedImage2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    const formData = new FormData();
    formData.append("aadhar_proof", selectedImage2);
    formData.append("pan_proof", selectedImage2);
    formData.append("face_image", faceImage);

    // const { data } = await axios.post(
    //   "http://99ab-34-90-64-81.ngrok-free.app/validate",
    //   formData
    // );
    const handlefaceImageSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", faceImage);
      const { data } = await axios.post(
        "http://127.0.0.1:5000/query",
        formData
      );
      console.log(data);
      if(data[1]<0.7){
        const formd = new FormData();
        formd.append("file",faceImage)
        // const { userData } = await axios.post("http://localhost:5001/createUser",{
        //   photo:""
        // })
        // console.log("userData",userData)
        formd.append("id",userData._id)
        const imageURI = await axios.post("http://127.0.0.1:5000/uploadImage",formd)
        
        const response = await axios.put("http://localhost:5001/updateUser",{ photo:imageURI })
        console.log(response);
  
        const formdata = new FormData();
        formdata.append("image",selectedImage);
        formdata.append("id",user._id);
        const { addData } = await axios.post("http://127.0.0.1:5000/add",formdata)
        console.log(addData)
      }
      else{
        const { userData } = await axios.get("http://localhost:5001/getUser/"+data[0])
        console.log(userData)
      }
    };

    console.log(data);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Upload Documents" />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="flex-1 items-center justify-between space-y-5 border-r">
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
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="mb-4 h-50 w-auto object-contain"
                  />
                )}
                {!selectedImage && (
                  <div className="mx-auto flex h-50 w-[400px] items-center justify-center rounded-xl border border-gray-2 bg-slate-200 dark:bg-slate-700">
                    <CloudArrowUpIcon className="h-18 w-18" />
                  </div>
                )}
                <button
                  type="submit"
                  onClick={handlefaceImageSubmit}
                  className="mx-auto w-2/3 rounded-lg bg-slate-300 py-2 px-4 text-lg font-bold hover:bg-blue-500 dark:border-white dark:bg-slate-800  dark:hover:bg-slate-600"
                >
                  Verify Employee Image
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 items-center justify-between space-y-5 border-r">
            <h1 className="mb-2 text-lg font-bold text-slate-500">
              Upload PAN Card
            </h1>
            <div className="flex flex-col space-y-10">
              <label
                htmlFor="image-upload-1"
                className="mx-auto w-fit cursor-pointer rounded-lg bg-blue-200 px-3 py-1 text-lg hover:bg-blue-100 dark:text-black"
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
                <div className="mx-auto flex h-50 w-5/6 items-center justify-center rounded-xl border border-gray-2 bg-slate-200 dark:bg-slate-700">
                  <CloudArrowUpIcon className="h-18 w-18" />
                </div>
              )}

              <button
                type="submit"
                className="mx-auto w-2/3 rounded-lg bg-slate-300 py-2 px-4 text-lg font-bold hover:bg-blue-500 dark:border-white dark:bg-slate-800  dark:hover:bg-slate-600"
              >
                Verify PAN Card
              </button>
            </div>
          </div>
          <div className="flex-1 items-center justify-between space-y-5">
            <h1 className="mb-2  ml-3 text-lg font-bold text-slate-500">
              Upload Aadhar
            </h1>
            <div className="flex flex-col space-y-10">
              <label
                htmlFor="image-upload-2"
                className="mx-auto w-fit cursor-pointer rounded-lg bg-blue-200 px-3 py-1 text-lg hover:bg-blue-100 dark:text-black"
              >
                Select Image
              </label>
              <input
                id="image-upload-2"
                type="file"
                accept="image/*"
                onChange={handleImageChange2}
                className="hidden"
              />
              {selectedImage2 && (
                <img
                  src={selectedImage2}
                  alt="Selected"
                  className="mb-4 h-50 w-auto object-contain"
                />
              )}
              {!selectedImage2 && (
                <div className="mx-auto flex h-50 w-5/6 items-center justify-center rounded-xl border border-gray-2 bg-slate-200 dark:bg-slate-700">
                  <CloudArrowUpIcon className="h-18 w-18" />
                </div>
              )}
              <button
                type="submit"
                className="mx-auto w-2/3 rounded-lg bg-slate-300 py-2 px-4 text-lg font-bold hover:bg-blue-500 dark:border-white dark:bg-slate-800  dark:hover:bg-slate-600"
              >
                Verify Aadhar Card
              </button>
            </div>
          </div>
        </div>
        {/* <button
          type="submit"
          className="mx-auto mt-5 flex w-2/4 items-center justify-center rounded-xl bg-slate-200 py-2 px-4 text-2xl font-black hover:bg-blue-200"
        >
          Verify
        </button> */}
      </form>
    </DefaultLayout>
  );
};

export default DocUpload;
