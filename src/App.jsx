import React from "react";
import Home from "./Components/Home/Home";
import SearchContainer from "./Components/Search/SearchContainer";
import Offer from "./Components/Offer/Offer";
import Packages from "./Components/Tours/Packages";
import Extra from "./Components/Offer/Extra";

const App = () => {
  return (
    <div className="!font-plus-jakarta">
      <Home>
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Travel Without the Wait
          </h1>
          {/* <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
            Instant bookings, hassle-free travel, unforgettable experiences
          </p> */}
        </div>
        <SearchContainer />
      </Home>
      <Offer />
      <Packages />
      <Extra />
    </div>
  );
};

export default App;
