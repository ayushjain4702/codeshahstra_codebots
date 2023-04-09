import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
// import { CloudinaryUploader } from 'cloudinary-react';
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const VerifyEmployee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [empDesc, setEmpDesc] = useState({});
  // const dotenv = require("dotenv");
  // dotenv.config();
  // const cloudinary = require("cloudinary").v2;

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  // Configuration
  // const uploadImage = () => {
  //   cloudinary.config({
  //     cloud_name: "dkztkxu2e",
  //     api_key: "149847993328722",
  //     api_secret: "R7Bh81ZjUqI3IMhTWQIb0x5VPGM"
  //   });
  //   // const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})
  //   const res = cloudinary.uploader.upload(selectedImage, {
  //     public_id: "kevin",
  //   });
  //   res
  //     .then((data) => {
  //       console.log(data);
  //       console.log(data.secure_url);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // Generate
  //   const url = cloudinary.url("kevin", {
  //     width: 50,
  //     height: 50,
  //     Crop: "fill",
  //   });
  //   // The output url
  //   console.log(url);
  // };
  // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
  const handleSubmit = async (e) => {
    e.preventDefault();
    // uploadImage();
    // Add code to handle form submission here
    const formData = new FormData();
    // formData.append("id_proof", selectedImage2);
    formData.append("file", selectedImage);
    // selectedImage.save("../../backend/Images")
    const { data } = await axios.post("http://127.0.0.1:5000/query",formData)

    console.log(data)
    // const obj = JSON.parse(JSON.stringify(data))
    // console.log(obj["score"])  


    if(data[1]<0.7){
      const formd = new FormData();
      formd.append("file",selectedImage)
      const { userData } = await axios.post("http://localhost:5001/createUser",{
        photo:""
      })
      console.log("userData",userData)
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

    
    // const { data } = await axios.post(
    //   // "http://99ab-34-90-64-81.ngrok-free.app/validate",
    //   "http://127.0.0.1:5000/query",
    //   formData
    // );
    // console.log(data);
  };
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Verify Employee" />

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
          <div className="flex-1 items-center justify-between space-y-5"></div>
        <button
          type="submit"
          className="mx-auto mt-10 flex w-1/4 items-center justify-center rounded-xl bg-slate-200 py-2 px-4 text-2xl font-black hover:bg-blue-200 dark:bg-slate-700 dark:text-white"
        >
          Verify
        </button>
      </form>
      {/* <CloudinaryUploader
        cloudName="dkztkxu2e"
        apiKey="149847993328722"
        apiSecret="R7Bh81ZjUqI3IMhTWQIb0x5VPGM"
        // uploadPreset="your_upload_preset"
        buttonText="Upload Image"
        onSuccess={(response) => console.log(response)}
        onFailure={(error) => console.error(error)}
      /> */}
      {/* <div class="mb-2 md:w-2/4">
        <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font">Tailwind-Alpine File Input Preview</h2>
        <p class="text-slate-400 text-lg font-thin">Show instant thumbnail preview with multiple file support</p>

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
    </DefaultLayout>*/}
    </DefaultLayout>
  );
};

export default VerifyEmployee;
