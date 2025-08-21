import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import ChandragiriHillsTop from '../../assets/Chandragiri_hills_top.jpg'
import Nagarkot from '../../assets/Nagarkot.jpg'
import PokharaLake from '../../assets/Pokhara_lake.jpg'
import DurbarSquare from '../../assets/Durbar_square.jpg'

const packages = [
   {
   id: 1,
   destinationImage: ChandragiriHillsTop,
   destinationName: 'Heritage Kathmandu',
   duration: '2Nights 3Days',
   Price: '20000',
   url: 'Heritage-Kathmandu-2N3D'
   },
   {
   id: 2,
   destinationImage: Nagarkot,
   destinationName: 'Heritage Kathmandu Nagarkot',
   duration: '3Nights 4Days',
   Price: '25000',
   url: 'Heritage-Kathmandu-Nagarkot-3N4D'
   },
   {
   id: 3,
   destinationImage: PokharaLake,
   destinationName: 'Explore Kathmandu Pokhara',
   duration: '4Nights 5Days',
   Price: '38000',
   url: 'Explore-Kathmandu-Pokhara-4N5D'
   },
   {
   id: 4,
   destinationImage: DurbarSquare,
   destinationName: 'Explore Kathmandu Nagarkot Pokhara',
   duration: '5Nights 6Days',
   Price: '41000',
   url: 'Explore-Kathmandu-Nagarkot-Pokhara-5N6D'
   },


]
const Nepal = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(
      <div className='package container section'>
	  <div className='sectionContainer'>
	      <h1>Nepal Tour Packages</h1>
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
                                <p>TK { Price } /Person</p>
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
export default Nepal
