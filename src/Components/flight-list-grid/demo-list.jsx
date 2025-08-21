import React from 'react'
import { useState } from 'react';
import SearchResults from '../Search/flight-SearchResults';
import Search from '../Search/flight-search'

const FlightList =()=>{
  const [results, setResults] = useState([]);
  const handleSearch = async (formData) => {
    // Simulate an API call
    const mockResults = [
      {
        flightNumber: 'XY123',
        departureCity: formData.source,
        destinationCity: formData.dest,
        departureDate: formData.deptDate,
        arrivalDate: '2024-06-18',
        price: 300,
      },
      // Add more mock results as needed
    ];
    setResults(mockResults);
    console.log(formData.source)
  };
  
  return (
    <div>
      <h1>Air Ticket Reservation</h1>
      <SearchResults results={results} />
    </div>
  );

}

export default FlightList
