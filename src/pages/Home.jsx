import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import { Link, NavLink } from "react-router-dom";
// import Hero from "../images/cover/cover-hero2.jpg";
import Hero from "../images/cover/new.gif";
import logo from "../images/logo/logov.png";
import Cover from "../images/cover/cover-hero2.jpg";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#000]">
      <div className="flex">
        <div className="flex w-2/3 flex-col items-center justify-center">
          <img src={logo} alt="" className="w-[100vh]" />
          <h1 className="mt-5 text-xl text-white">
            Streamline your HR verification process with Validize
          </h1>
          <div className="p-4">
            <NavLink to="/signup">
              <button className="mr-2 mt-14 rounded-lg bg-blue-700 py-2 px-4 text-2xl font-bold text-white opacity-80 hover:bg-blue-700 hover:opacity-95">
                Get Started
              </button>
            </NavLink>
            {/* <button className="mr-2 rounded bg-blue-300 py-2 px-4 text-2xl font-black text-[#000] hover:bg-blue-400">
              Sign Up
            </button> */}
          </div>
        </div>
        <div className="w-1/3">
          <img src={Hero} alt="Hero" className="h-screen w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
