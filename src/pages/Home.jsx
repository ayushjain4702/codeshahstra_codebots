import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
// import Hero from "../images/cover/cover-hero2.jpg";
import Hero from "../images/cover/new.gif";
import logo from "../images/logo/logov.png";
import Cover from "../images/cover/cover-hero2.jpg";

const Home = () => {
  const [sign, setSign] = useState(false);
  return (
    <div className="border-strok h-screen rounded-sm border bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-2/3">
          <div className="h-full w-full">
            <div className="relative h-screen w-full bg-black">
              <div className="absolute left-0 h-full w-10">
                <img
                  className="absolute top-70 bottom-0 -rotate-90"
                  src={logo}
                  alt="Hero"
                />
              </div>
              <img
                className="h-full w-full object-cover opacity-40"
                src={Cover}
                alt="Hero"
              />
            </div>
            {/* <img className="dark:hidden" src={LogoDark} alt="Logo" /> */}
          </div>
        </div>
        {/* <button className="h-50 bg-black">show</button> */}
      </div>
    </div>
  );
};

export default Home;
