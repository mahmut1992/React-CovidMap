import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border text-black p-5 rounded-md max-md:flex max-md:flex-row max-md:items-center max-md:justify-between">
      <p className="text-sm font-semibold capitalize">{item[0]} </p>
      <p className="text-lg md:mt-2">{item[1]} </p>
    </div>
  );
};

export default Card;
