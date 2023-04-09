import React, { useState } from "react";
import Card from "../components/Card";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";

const MyEmployees = () => {
  const cardData = [
    {
      name: "Kevin",
      contact: "Description 1",
      imageUrl: "https://picsum.photos/id/1003/500/300",
    },
    {
      name: "Devang",
      contact: "Description 2",
      imageUrl: "https://picsum.photos/id/1004/500/300",
    },
    {
      name: "Ayush",
      contact: "Description 3",
      imageUrl: "https://picsum.photos/id/1005/500/300",
    },
    {
      name: "Ayushi",
      contact: "Description 3",
      imageUrl: "https://picsum.photos/id/1005/500/300",
    },
  ];
  const [del, setDelete] = useState(false);

  const handleDelete = (name) => {
    setDelete((prev) => {
      // return prev.map((card) => {
      //   return card.name === name ? card.on;
      // });
      !prev;
    });
  };
  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="My Employees" />
        <div className="grid grid-cols-2 gap-6">
          {cardData.map((card) => (
            <Card key={card.name} {...card} />
          ))}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default MyEmployees;
