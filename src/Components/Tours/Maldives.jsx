import React from 'react'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Fihalhohi from '../../assets/Fihalhohi.jpg' 
import SunSiyam from '../../assets/Sun_Siyam.jpg'
import Adaaran from '../../assets/Adaaran.jpg'
import Centara from '../../assets/Centara_Rasfushi.jpg'
import Hulhumale from '../../assets/Hulhumale_Maafushi.jpg'
import Diamonds from '../../assets/Diamonds_1.jpg'


const packages = [
   {
   id: 1,
   destinationImage: Hulhumale,
   destinationName: 'Hulhumale Adventure Trip',
   duration: '3Nights 4Days',
   Price: '27000',
   url: 'Hulhumale-Maafushi-3N4D'
   },
   {
   id: 2,
   destinationImage: Centara,
   destinationName: 'Centara Rasfushi',
   duration: '3Nights 4Days',
   Price: '54000',
   url: 'Centara-Rasfushi-3N4D'
   },
   {
   id: 3,
   destinationImage: Fihalhohi,
   destinationName: 'Fihalhohi Island Resort',
   duration: '3Nights 4Days',
   Price: '55000',
   url: 'Fihalhohi-Island-Resort-3N4D'
   },
   {
   id: 4,
   destinationImage: Adaaran,
   destinationName: 'Adaaran Club Rannalhi',
   duration: '3Nights 4Days',
   Price: '78000',
   url: 'Adaaran-Club-Rannalhi-3N4D'
   },
   {
   id: 5,
   destinationImage: SunSiyam,
   destinationName: 'Sun Siyam Olhuveli',
   duration: '3Nights 4Days',
   Price: '102000',
   url: 'Sun-Siyam-Olhuveli-3N4D'
   },
   {
   id: 6,
   destinationImage: Diamonds,
   destinationName: 'Honeymoon Special',
   duration: '3Nights 4Days',
   Price: '96000',
   url: 'Honeymoon-Special-3N4D'
   },


]



const Maldives = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(
      <div className='package container section'>
	  <div className='sectionContainer'>
	      <h1>Maldives Tour Packages</h1>
	       <div className='packageContainer grid'>
                 {
                   packages.map(({id,duration,destinationImage,destinationName,Price,url}) => {
                   return(
                      <div key={id} className='singlePackage'>
                         <img src={ destinationImage } className='destinationImage'/>

                         <div className='packageDetails'>
                             <div className='packageName'>
                                <h3>{ destinationName }</h3>
			         <p>{ duration }</p>
                                <p>Tk { Price } /Person</p>
                                 <Link to={url}>View Details</Link>
                             </div>
                         </div>
                      </div>
                   )})
                 }
              </div>

	  </div>
      </div>	  
  )
}
export default Maldives
