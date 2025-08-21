import React, { useState } from 'react';
import { TextField, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const HotelSearchForm = () => {
  const [city, setCity] = useState("Nathia Gali");
  const [checkIn, setCheckIn] = useState("2025-08-23");
  const [checkOut, setCheckOut] = useState("2025-08-24");
  const [guests, setGuests] = useState("1 Room, 2 Guests");
  const [searchFor, setSearchFor] = useState({
      business: false,
      couples: true,
      families: false,
      friends: false,
      solo: false,
  });

  const handleCheckboxChange = (event) => {
      setSearchFor({ ...searchFor, [event.target.name]: event.target.checked });
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      const searchData = { city, checkIn, checkOut, guests, preferences: searchFor };
      console.log("Hotel Search Data:", searchData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid-hotel">
        <div className="form-group full-width">
           <TextField label="CITY / HOTEL / RESORT / AREA" variant="standard" fullWidth value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group">
            <TextField label="CHECK IN" type="date" variant="standard" fullWidth value={checkIn} onChange={(e) => setCheckIn(e.target.value)} InputLabelProps={{ shrink: true }} />
        </div>
        <div className="form-group">
            <TextField label="CHECK OUT" type="date" variant="standard" fullWidth value={checkOut} onChange={(e) => setCheckOut(e.target.value)} InputLabelProps={{ shrink: true }} />
        </div>
         <div className="form-group">
            <TextField label="ROOMS & GUESTS" variant="standard" fullWidth value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
      </div>
       <div className="search-options">
        <label>Search for</label>
        <FormGroup row>
            <FormControlLabel control={<Checkbox checked={searchFor.business} onChange={handleCheckboxChange} name="business" />} label="Business" />
            <FormControlLabel control={<Checkbox checked={searchFor.couples} onChange={handleCheckboxChange} name="couples" />} label="Couples" />
            <FormControlLabel control={<Checkbox checked={searchFor.families} onChange={handleCheckboxChange} name="families" />} label="Families" />
            <FormControlLabel control={<Checkbox checked={searchFor.friends} onChange={handleCheckboxChange} name="friends" />} label="Friends" />
            <FormControlLabel control={<Checkbox checked={searchFor.solo} onChange={handleCheckboxChange} name="solo" />} label="Solo" />
        </FormGroup>
      </div>
      <div className="search-action">
        <button type="submit" className="btn search-btn">Search</button>
      </div>
    </form>
  );
};

export default HotelSearchForm;