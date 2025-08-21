import React from 'react';
import heroImage from '../../assets/Adaaran_2.jpg';

const Home = ({ children }) => {
  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
      
      <div className="relative p-10 z-10 w-full max-w-6xl px-4">
        {children}
      </div>
    </div>
  );
};

export default Home;