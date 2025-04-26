import React from "react";

const Error = ({ info, refetch }) => {
  return (
    <div
      className="col-span-3 my-20 flex flex-col justify-center text-center gap-10"
      data-testid="error"
    >
      <div className="bg-red-400 p-5 rounded-md">
        <p>Üzgünüz Bir Sorun Oluştu</p>
        <p> {info} </p>
      </div>
      <button onClick={refetch} className="border shadow mt-10 text-black p-2">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
