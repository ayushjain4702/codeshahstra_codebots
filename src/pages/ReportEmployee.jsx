import React, { useState } from "react";
import Card from "../components/Card";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import ReportCard from "../components/ReportCard";

const ReportEmployees = () => {
  const cardData = [
    {
      name: "Kevin Haria",
      contact: "+91 9987403395",
      address: "504 Dr.R.P.Road, Mumbai, India",
      imageUrl: "https://picsum.photos/id/1001/500/300",
    },
    {
      name: "Jigar Das",
      contact: "+91 9846483211",
      address: "A/702, J.N.Road, Pune, India",
      imageUrl: "https://picsum.photos/id/1002/500/300",
    },
    {
      name: "Ayush Jain",
      contact: "+91 9876543289",
      address: "Bhakti Marg, Kolkata, India",
      imageUrl: "https://picsum.photos/id/1003/500/300",
    },
    {
      name: "Devang Shah",
      contact: "+91 9876533456",
      address: "409, Chellam Street,  Chennai, India",
      imageUrl: "https://picsum.photos/id/1004/500/300",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Report Employees" />
        <div className="grid grid-cols-2 gap-6">
          {cardData.map((card) => (
            <ReportCard key={card.name} {...card} />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default ReportEmployees;
