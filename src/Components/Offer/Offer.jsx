import React from 'react';
import images from "../../mocks/images";
import Slider from "../../constants/slider";

const Offer = () => {
  return (
    <div className='container mx-auto px-5 !mt-20'>
      <div className='w-full max-w-6xl mx-auto h-[70vh] rounded-2xl overflow-hidden shadow-2xl'>
        <Slider images={images} />
      </div>
    </div>
  )
}

export default Offer;