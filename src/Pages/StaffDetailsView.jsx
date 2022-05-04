import React from "react";
import { useParams } from "react-router-dom";

const StaffDetailsView = () => {
  const { id } = useParams();

  return <h1>StaffDetailsView # {id}</h1>;
};

export default StaffDetailsView;
