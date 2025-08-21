import React from 'react';
import { Link } from 'react-router-dom';
import Thailand from '../../assets/Thailand.jpg';
import Nepal from '../../assets/Durbar_square.jpg';
import Maldives from '../../assets/Maldives.jpg';
import Vietnam from '../../assets/Vietnam.jpg';
import CoxsBazar from '../../assets/Coxsbazar.jpg';

const packages = [
   {	
     id: 1,
     destinationImage: Thailand,
     destinationName: 'Thailand',
     description: 'Vibrant markets and stunning beaches await.'
   },
   {
     id: 2,
     destinationImage: Nepal,
     destinationName: 'Nepal',
     description: 'Home to the majestic Himalayas.'
   },
   {
     id: 3,
     destinationImage: Maldives,
     destinationName: 'Maldives',
     description: 'Crystal-clear waters and ultimate luxury.'
   },
   {
     id: 4,
     destinationImage: Vietnam,
     destinationName: 'Vietnam',
     description: 'A land of breathtaking natural beauty.'
   },
   {
     id: 5,
     destinationImage: CoxsBazar,
     destinationName: 'CoxsBazar',
     description: 'The world\'s longest sandy sea beach.'
   },
];

const Packages = () => {
  return (
    <div className='pb-16 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight'>
            Top Destinations
          </h2>
          <p className='mt-2 text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore curated travel packages to the world's most breathtaking places.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
          {packages.map(({ id, destinationImage, destinationName, description }) => (
            <Link 
              key={id}
              to={`/${destinationName.toLowerCase()}`}
              className='group relative block h-80 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2'
            >
              <img 
                src={destinationImage} 
                alt={destinationName} 
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>
              <div className='absolute bottom-0 left-0 p-5'>
                <h3 className='text-2xl font-bold text-white tracking-wide'>
                  {destinationName}
                </h3>
                <p className='text-sm text-gray-200 mt-1'>
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;