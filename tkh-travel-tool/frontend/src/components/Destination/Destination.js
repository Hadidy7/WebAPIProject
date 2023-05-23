import React, { useState } from "react";
import { fakeData } from "../../fakeData/fakeData";
import DestinationCard from "../DestinationCard/DestinationCard";

const Destination = () => {
  // console.log(fakeData);
  const [destinations, setDestinations] = useState(fakeData);

  return (
    <div style={{ display: "flex" }}>
      {destinations.map((dst) => (
        <DestinationCard destination={dst}></DestinationCard>
      ))}
    </div>
  );
};

export default Destination;
