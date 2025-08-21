import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { CompactFormField, CustomListboxDropdown } from './SharedFormComponents'; // Adjust path if needed

const category = [{ label: 'Domestic', id: '1' }, { label: 'International', id: '2' }];
const Domestic = [{ label: 'Cox`s Bazar', id: '1' }, { label: 'Sylhet', id: '2' }];
const International = [{ label: 'Thailand', id: '1' }, { label: 'Malaysia', id: '2' }, { label: 'Maldives', id: '3' }];

const PackageSearch = () => {
  const [cat, setCat] = useState(category[0]); // Default to the first object
  const [dest, setDest] = useState(null);
  const navigate = useNavigate();
  
  // Logic now checks for object property
  const type = cat?.label === "Domestic" ? Domestic : International;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dest?.label === 'Thailand') { navigate('/Thailand') }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 -mt-6 gap-3 items-end">
        <CompactFormField label="Category" htmlFor="pkg-category">
          <CustomListboxDropdown
            value={cat}
            onChange={setCat}
            options={category}
            placeholder="Select Category"
          />
        </CompactFormField>
        
        <CompactFormField label="Destination" htmlFor="pkg-dest">
          <CustomListboxDropdown
            value={dest}
            onChange={setDest}
            options={type}
            placeholder="Select Destination"
          />
        </CompactFormField>
        
        {/* This button also aligns perfectly */}
        <button type="submit" className="flex items-center mt-11 ml-2 justify-center gap-2.5 w-full h-10 bg-[#ffba00] hover:bg-yellow-400 text-black font-bold px-4 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300">
          <LuSearch size={18} />
          Search Packages
        </button>
      </div>
    </form>
  );
};

export default PackageSearch;