import React from "react";
import { MdKeyboardArrowLeft as Arrow } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeadLoader from "../../components/loader/HeadLoader";

const Head = () => {
  const { data, isLoading } = useSelector((store) => store);
  return (
    <div className="flex justify-between items-center">
      <Link
        className="bg-gray-400 py-2 px-2 pe-3 rounded-md hover:bg-gray-500 flex gap-2 items-center shadow"
        to="/"
      >
        <Arrow /> Geri
      </Link>
      {isLoading ? (
        <HeadLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4">
            <h1 className="text-gray-900 text-2xl lg:text-3xl font-sans font-bold">
              {data.country}
            </h1>
            <img
              src={data.flag.png}
              alt={data.flag.alt}
              className="w-16 rounded drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] "
            />
          </div>
        )
      )}
    </div>
  );
};

export default Head;
