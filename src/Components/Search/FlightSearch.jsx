import React, { useState, Fragment, useRef } from 'react';
import { GoArrowSwitch } from "react-icons/go";
import { FaCheck, FaCalendarAlt, FaChevronDown, FaPlane } from "react-icons/fa";
import { HiSelector } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import CityJSON from '../../mocks/cities.json';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { Combobox, Transition } from '@headlessui/react';

const cities = [...CityJSON];
const number = [
  { label: '1 Traveler', id: '1' }, { label: '2 Travelers', id: '2' }, { label: '3 Travelers', id: '3' },
  { label: '4 Travelers', id: '4' }, { label: '5 Travelers', id: '5' }, { label: '6 Travelers', id: '6' }
];

const CustomDropdown = ({ value, onChange, options, placeholder }) => {
  const [query, setQuery] = useState('');
  
  const filteredOptions = query === '' ? options : options.filter((option) =>
    (option.name || option.label).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Combobox value={value} onChange={onChange}>
      <div className="relative">
        <Combobox.Input
          className="w-full h-12 px-4 text-base font-medium text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition hover:bg-gray-100"
          displayValue={(option) => option ? (option.name || option.label) : ""}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FaChevronDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
        </Combobox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
            {filteredOptions.map((option) => (
              <Combobox.Option key={option.id || option.code} className={({ active }) =>`cursor-pointer select-none relative py-3 pl-10 pr-4 ${ active ? 'text-white bg-blue-600' : 'text-gray-900'}`} value={option}>
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{option.label || option.name}</span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <FaCheck className="w-5 h-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

const FlightSearch = () => {
  const [source, setSource] = useState(cities.find(c => c.code === "KHI"));
  const [dest, setDest] = useState(cities.find(c => c.code === "ISB"));
  const [selectTrip, setSelectTrip] = useState("one");
  const [deptDate, setDeptDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [traveler, setTraveler] = useState(number[0]);
  const [showSourceDropdown, setShowSourceDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const navigate = useNavigate();
  
  const deptDateRef = useRef(null);
  const returnDateRef = useRef(null);
  
  const handleSwapCities = () => {
    setSource(dest);
    setDest(source);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = `Ticket price From:${source?.code} To:${dest?.code} Departure:${deptDate} Arrival:${returnDate} Passanger:${traveler?.label}`;
    const form = { name: e.target.name.value, email: e.target.email.value, phone: e.target.phone.value, message: message };
    try {
      emailjs.send('service_hyaaa7p', 'template_q99lnqg', form, '4f_SEVkr2esPmUGHZ');
    } catch (error) { console.log({ error }) }
    navigate('/Thankyou');
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    return { display: `${day} ${month}'${year}`, subtitle: dayName };
  };

  const handleDeptDateClick = () => {
    deptDateRef.current?.showPicker();
  };

  const handleReturnDateClick = () => {
    if (selectTrip !== 'one') {
      returnDateRef.current?.showPicker();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tripType" value="one" checked={selectTrip === 'one'} onChange={(e) => setSelectTrip(e.target.value)} className="sr-only peer" />
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-yellow-500">
            <span className={`w-2 h-2 rounded-full ${selectTrip === 'one' ? 'bg-yellow-500' : 'bg-transparent'}`}></span>
          </span>
          <span className="font-semibold text-gray-800 text-sm">One Way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tripType" value="both" checked={selectTrip === 'both'} onChange={(e) => setSelectTrip(e.target.value)} className="sr-only peer" />
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-yellow-500">
            <span className={`w-2 h-2 rounded-full ${selectTrip === 'both' ? 'bg-yellow-500' : 'bg-transparent'}`}></span>
          </span>
          <span className="font-semibold text-gray-800 text-sm">Round Way</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="tripType" value="multi" checked={selectTrip === 'multi'} onChange={(e) => setSelectTrip(e.target.value)} className="sr-only peer" />
          <span className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-yellow-500">
            <span className={`w-2 h-2 rounded-full ${selectTrip === 'multi' ? 'bg-yellow-500' : 'bg-transparent'}`}></span>
          </span>
          <span className="font-semibold text-gray-800 text-sm">Multi City</span>
        </label>
      </div>

      <div className="flex flex-col lg:flex-row items-end gap-4">
        <div className="flex flex-col sm:flex-row items-end gap-0 w-full lg:w-auto">
          <div className="w-full sm:w-48 relative mb-4 sm:mb-0">
            <div 
              className="bg-white border border-gray-200 rounded-l-lg sm:rounded-l-lg lg:rounded-l-lg p-3 hover:border-yellow-400 transition-all cursor-pointer h-full"
              onClick={() => setShowSourceDropdown(!showSourceDropdown)}
            >
              <div className="text-left">
                <div className="text-xs font-medium text-gray-500 mb-1">FROM</div>
                <div className="text-sm font-bold text-gray-900 truncate">{source?.name || 'Select City'}</div>
                <div className="text-xs text-gray-600 truncate">{source?.code}, {source?.airport}</div>
              </div>
            </div>
            {showSourceDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city.code}
                    className="p-3 hover:bg-yellow-50 cursor-pointer border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setSource(city);
                      setShowSourceDropdown(false);
                    }}
                  >
                    <div className="font-semibold text-gray-900 text-sm">{city.name}</div>
                    <div className="text-xs text-gray-600">{city.code}, {city.airport}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="relative px-1 -mt-2 order-first sm:order-none mb-4 sm:mb-0">
            <button 
              type="button" 
              onClick={handleSwapCities}
              className="p-2 bg-white border border-gray-200 rounded-full hover:bg-yellow-50 hover:border-yellow-400 hover:rotate-180 transition-all duration-300 z-10 relative"
            >
              <GoArrowSwitch className="text-gray-600" size={16} />
            </button>
          </div>
          
          <div className="w-full sm:w-48 relative">
            <div 
              className="bg-white border border-gray-200 rounded-r-lg sm:rounded-r-lg lg:rounded-r-lg p-3 hover:border-yellow-400 transition-all cursor-pointer h-full"
              onClick={() => setShowDestDropdown(!showDestDropdown)}
            >
              <div className="text-left">
                <div className="text-xs font-medium text-gray-500 mb-1">TO</div>
                <div className="text-sm font-bold text-gray-900 truncate">{dest?.name || 'Select City'}</div>
                <div className="text-xs text-gray-600 truncate">{dest?.code}, {dest?.airport}</div>
              </div>
            </div>
            {showDestDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city.code}
                    className="p-3 hover:bg-yellow-50 cursor-pointer border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => {
                      setDest(city);
                      setShowDestDropdown(false);
                    }}
                  >
                    <div className="font-semibold text-gray-900 text-sm">{city.name}</div>
                    <div className="text-xs text-gray-600">{city.code}, {city.airport}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full lg:w-auto">
          <div className="w-full sm:w-40 relative mb-4 sm:mb-0">
            <div 
              className="bg-white border border-gray-200 border-r-0 rounded-l-lg sm:rounded-l-lg lg:rounded-l-lg p-3 hover:border-yellow-400 transition-all cursor-pointer h-full"
              onClick={handleDeptDateClick}
            >
              <div className="text-left">
                <div className="text-xs font-medium text-gray-500 mb-1">DEPARTURE DATE</div>
                {deptDate ? (
                  <>
                    <div className="text-sm font-bold text-gray-900">{formatDate(deptDate).display}</div>
                    <div className="text-xs text-gray-600">{formatDate(deptDate).subtitle}</div>
                  </>
                ) : (
                  <>
                    <div className="text-sm font-bold text-gray-400">Select Date</div>
                    <div className="text-xs text-gray-400">Choose departure</div>
                  </>
                )}
              </div>
              <input 
                ref={deptDateRef}
                type="date" 
                value={deptDate} 
                onChange={(e) => setDeptDate(e.target.value)} 
                required 
                className="sr-only"
              />
            </div>
          </div>
          
          <div className="w-full sm:w-40 relative">
            <div 
              className={`border border-gray-200 rounded-r-lg sm:rounded-r-lg lg:rounded-r-lg p-3 transition-all cursor-pointer h-full ${
                selectTrip === 'one' 
                  ? 'bg-gray-50' 
                  : 'bg-white hover:border-yellow-400'
              }`}
              onClick={handleReturnDateClick}
            >
              <div className="text-left">
                <div className="text-xs font-medium text-gray-500 mb-1">RETURN DATE</div>
                {selectTrip === 'one' ? (
                  <>
                    <div className="text-xs text-gray-400">Save more on return</div>
                    <div className="text-xs text-gray-400">flight</div>
                  </>
                ) : returnDate ? (
                  <>
                    <div className="text-sm font-bold text-gray-900">{formatDate(returnDate).display}</div>
                    <div className="text-xs text-gray-600">{formatDate(returnDate).subtitle}</div>
                  </>
                ) : (
                  <>
                    <div className="text-sm font-bold text-gray-400">Select Date</div>
                    <div className="text-xs text-gray-400">Choose return</div>
                  </>
                )}
              </div>
              <input 
                ref={returnDateRef}
                type="date" 
                value={returnDate} 
                onChange={(e) => setReturnDate(e.target.value)} 
                disabled={selectTrip === 'one'} 
                className="sr-only"
              />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-40 relative">
          <div 
            className="bg-white border border-gray-200 rounded-lg p-3 hover:border-yellow-400 transition-all cursor-pointer h-full"
            onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
          >
            <div className="text-left">
              <div className="text-xs font-medium text-gray-500 mb-1">TRAVELER, CLASS</div>
              <div className="text-sm font-bold text-gray-900">{traveler?.label}</div>
              <div className="text-xs text-gray-600">Economy</div>
            </div>
          </div>
          {showTravelerDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
              {number.map((option) => (
                <div
                  key={option.id}
                  className="p-3 hover:bg-yellow-50 cursor-pointer border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                  onClick={() => {
                    setTraveler(option);
                    setShowTravelerDropdown(false);
                  }}
                >
                  <div className="font-semibold text-gray-900 text-sm">{option.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input 
            type='text' 
            name='name' 
            placeholder="Full Name" 
            required 
            className="w-full h-10 px-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none transition hover:border-gray-300"
          />
          <input 
            type='email' 
            name='email' 
            placeholder="Email Address" 
            required 
            className="w-full h-10 px-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none transition hover:border-gray-300"
          />
          <input 
            type='tel' 
            name='phone' 
            placeholder="Phone Number" 
            minLength='11' 
            required 
            className="w-full h-10 px-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none transition hover:border-gray-300"
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#ffba00] hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <LuSend size={18} />
          Search Flights
        </button>
      </div>
    </form>
  );
};

export default FlightSearch;