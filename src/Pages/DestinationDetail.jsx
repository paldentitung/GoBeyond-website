import React from "react";
import { useParams } from "react-router-dom";
const DestinationDetail = () => {
  const { id } = useParams();
  return <div>DestinationDetail{id}</div>;
};

export default DestinationDetail;
