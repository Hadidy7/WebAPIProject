import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TravelPlanner.css";

const TravelPlanner = () => {
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
  };

  return (
    <div className="travelPlannerContainer">
      <h1 className="travelPlannerTitle">TRAVEL PLANNER</h1>
      <form className="travelPlannerForm" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            className="travelPlannerInput"
            placeholder="Budget"
            value={budget}
            onChange={handleBudgetChange}
          />
          <input
            type="date"
            className="travelPlannerInput"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
          />
          <input
            type="date"
            className="travelPlannerInput"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
        <button type="submit" className="travelPlannerButton">
          Plan My Travel
        </button>
      </form>
    </div>
  );
};

export default TravelPlanner;
