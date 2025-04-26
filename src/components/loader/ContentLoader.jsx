import React from "react";

const ContentLoader = () => {
  const arr = new Array(9).fill(".");
  return arr.map((i) => (
    <div
      className="p-5 border text-black shadow rounded-md text-transparent select-none bg-gray-100 animate-pulse"
      data-testid="content-loader"
    >
      <div>.</div>
      <div>.</div>
    </div>
  ));
};

export default ContentLoader;
