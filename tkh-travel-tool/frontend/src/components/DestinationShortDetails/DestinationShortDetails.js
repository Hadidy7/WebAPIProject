import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DestinationShortDetails.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DestinationShortDetails = () => {

  const [destination, setDestination] = useState(1);

  const handleShuffle = () => {
    // Generate a random number between 1 and 3
    const randomDestination = Math.floor(Math.random() * 3) + 1;
    setDestination(randomDestination);};
  
  return (
    <div>
      <h1>RECOMMENDED DESTINATIONS</h1>
      <p>
        <small>
          Browse our recommended destination and plan your next adventure with ease. Let us guide you towards amazing experiences
          and fascinating cultures. Start exploring now!
        </small>
      </p>
      <button className="bookingButton" onClick={handleShuffle}>
        <Link to={`/destination/${destination}`} className="bookingButtonText">
          Booking{" "}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </Link>
      </button>
    </div>
  );
};

export default DestinationShortDetails;
