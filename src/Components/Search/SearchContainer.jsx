import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import VisaSearch from './VisaSearch';
import PackageSearch from './PackageSearch';
import { FaPlane, FaCcVisa, FaBoxOpen } from 'react-icons/fa';

const SearchContainer = () => {
  const [activeTab, setActiveTab] = useState('Flight');

  const tabs = [
    { name: 'Flight', icon: <FaPlane /> },
    { name: 'Visa', icon: <FaCcVisa /> },
    { name: 'Tour Package', icon: <FaBoxOpen /> },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Flight':
        return <FlightSearch />;
      case 'Visa':
        return <VisaSearch />;
      case 'Tour Package':
        return <PackageSearch />;
      default:
        return <FlightSearch />;
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.name
                  ? 'text-yellow-700 bg-yellow-100 shadow-md transform scale-105'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              {tab.icon}
              {tab.name}
              {activeTab === tab.name && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
        {renderActiveComponent()}
      </div>
    </div>
  );
};

export default SearchContainer;