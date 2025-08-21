// src/components/SharedFormComponents.jsx

import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { HiSelector } from 'react-icons/hi';

export const CompactFormField = ({ label, htmlFor, children }) => (
  <div>
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);

// --- THE ONLY CHANGE IS ON THIS LINE ---
// We added `flex items-center justify-start` to ensure the button's content aligns left.
export const inputClassName = "w-full h-10 px-3 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-start text-left";

export const CustomListboxDropdown = ({ value, onChange, options, placeholder }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative w-full">
        <Listbox.Button className={inputClassName}>
          <span className="block truncate">{value ? value.label || value.name : placeholder}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={option.id || option.code || optionIdx}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'text-white bg-yellow-500' : 'text-gray-900'}`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.label || option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-600">
                        <FaCheck className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};