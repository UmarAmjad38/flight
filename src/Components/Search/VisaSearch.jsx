import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Country from '../../mocks/country.json';
import { LuSearch } from 'react-icons/lu';
import { CompactFormField, CustomListboxDropdown, inputClassName } from './SharedFormComponents'; // Adjust path if needed

const country = [...Country];
const nationality = [
  { name: "Pakistani", code: "PK" },
  { name: "Bangladeshi", code: "BD" },
  { name: "Indian", code: "IN" },
];

const VisaSearch = () => {
  const [dest, setDest] = useState(null); // Use null for object state
  const [flyDate, setFlyDate] = useState("");
  const [nat, setNat] = useState(null);   // Use null for object state
  const navigate = useNavigate();

  const handleOnClick = () => {
    // State now holds objects, so access properties like .name
    if (dest && flyDate && nat && dest.name === 'Thailand') { 
      navigate('/VisaThailand');
    }
  };

  return (
    <div className="space-y-4 bg-white p-5 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 -mt-6 gap-3 items-end">
        <CompactFormField label="Destination" htmlFor="visa-country">
          <CustomListboxDropdown
            value={dest}
            onChange={setDest}
            options={country}
            placeholder="Select Country"
          />
        </CompactFormField>

        <CompactFormField label="Travel Date" htmlFor="visa-date">
          <input id="visa-date" type="date" value={flyDate} onChange={(e) => setFlyDate(e.target.value)} required className={inputClassName} />
        </CompactFormField>
      
        <CompactFormField label="Nationality" htmlFor="visa-nationality">
          <CustomListboxDropdown
            value={nat}
            onChange={setNat}
            options={nationality}
            placeholder="Select Nationality"
          />
        </CompactFormField>

        {/* This button will now correctly align with the inputs */}
        <button onClick={handleOnClick} className="flex mt-11 ml-2 items-center justify-center gap-2.5 w-full h-10 bg-[#ffba00] hover:bg-yellow-400 text-black font-bold px-4 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300">
          <LuSearch size={18}/>
          Search
        </button>
      </div>
    </div>
  );
};

export default VisaSearch;