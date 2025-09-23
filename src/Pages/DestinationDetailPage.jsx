import React from "react";
import { useParams } from "react-router-dom";
import DestinationDetail from "../Components/DestinationDetail";

const DestinationDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <DestinationDetail id={parseInt(id)} />
    </div>
  );
};

export default DestinationDetailPage;
