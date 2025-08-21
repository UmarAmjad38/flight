import React, { useState } from 'react';
import { TextField } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

const TourSearchForm = () => {
  const [destination, setDestination] = useState("Hunza");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for tour package in:", destination);
    // Add your navigation logic here, e.g.:
    // navigate(`/tours/${destination}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid-tour">
        <TextField
          label="LOCATION / TOUR"
          variant="standard"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          fullWidth
        />
      </div>
      <div className="search-action">
        <button type="submit" className="btn search-btn">Search</button>
      </div>
    </form>
  );
};

export default TourSearchForm;