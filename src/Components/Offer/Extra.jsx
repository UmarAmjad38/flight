import React from 'react';
import banner2 from '../../assets/banner2.jpg';

const Extra = () => {
  return (
    <div className='pt-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight'>
            Top Airlines
          </h2>
          <p className='mt-2 text-lg text-gray-600 max-w-2xl mx-auto'>
            We proudly partner with the world's leading airlines for your travel convenience.
          </p>
        </div>

        <div className='flex justify-center'>
          <img 
            src={banner2} 
            className='max-w-6xl w-full h-auto' 
            alt='Partner airlines logos' 
          /> 
        </div>	  
      </div>  
    </div>
  )
}

export default Extra;