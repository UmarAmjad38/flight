import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Halong_bay from '../../assets/Halong-bay.jpg'
import Hoa_lu_Ancient from '../../assets/Hoa_lu_Ancient.jpg'
import Cruise_ship from '../../assets/Cruise_ship.jpg'
import Mua_cave from '../../assets/Mua_cave.jpg'
import Tam_Coc from '../../assets/Tam_Coc.jpg'

const packages = [
   {
   id: 1,
   destinationImage: Halong_bay,
   destinationName: 'HANOI - HA LONG BAY',
   duration: '3Nights 4Days',
   Price: '31000',
   url: 'HANOI-HA-LONG-BAY-3N4D'
   },
   {
   id: 2,
   destinationImage: Hoa_lu_Ancient,
   destinationName: 'HANOI – NINH BINH',
   duration: '3Nights 4Days',
   Price: '31000',
   url: 'HANOI-NINH-BINH-3N4D'
   },
   {	
   id: 3,
   destinationImage: Cruise_ship,
   destinationName: 'HANOI - HALONG BAY OVERNIGHT ON CRUISE',
   duration: '3Nights 4Days',
   Price: '39000',
   url: 'HANOI-HALONG-BAY-CRUISE-3N4D'
   },
   {
   id: 4,
   destinationImage: Mua_cave,
   destinationName: 'HANOI - HA LONG BAY - NINH BINH',
   duration: '4Nights 5Days',
   Price: '39000',
   url: 'HANOI-HALONGBAY-NINHBINH-4N5D'
   },
   {
   id: 5,
   destinationImage: Tam_Coc,
   destinationName: 'HANOI - SAPA - HANOI',
   duration: '3Nights 4Days',
   Price: '38000',
   url: 'HANOI-SAPA-HANOI-3N4D'
   },

]

const Vietnam = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(

      <div className='package container section'>
          <div className='sectionContainer'>
              <h1>Vietnam Tour Packages</h1>

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
export default Vietnam
