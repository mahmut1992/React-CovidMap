import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import ContentLoader from "../../components/loader/ContentLoader";
import Error from "../../components/error";

const Content = ({ getData }) => {
  const { isLoading, error, data } = useSelector((store) => store);
  const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");
  return (
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        <ContentLoader />
      ) : error ? (
        <Error info={error} refetch={getData} />
      ) : (
        arr.map((item, key) => <Card key={key} item={item} />)
      )}
    </div>
  );
};

export default Content;
