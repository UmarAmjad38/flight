import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Sayeman_beach_resort from '../../assets/Sayeman_beach_resort_0.jpg'
import SeaPearl from '../../assets/SeaPearl_2.jpg'

const packages = [
   {
   id: 1,
   destinationImage: Sayeman_beach_resort,
   destinationName: 'Sayeman Beach Resort',
   duration: '2Nights 3Days',
   Price: '21000',
   url: 'Sayeman-Beach-Resort-2N3D'
   },

   {
   id: 2,
   destinationImage: SeaPearl,
   destinationName: 'Sea Pearl Beach Resort',
   duration: '2Nights 3Days',
   Price: '21000',
   url: 'Sea-Pearl-Beach-Resort-2N3D'
   },

]

const CoxsBazar = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(
      <div className='package container section'>
          <div className='sectionContainer'>
              <h1>CoxsBazar Tour Packages</h1>

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
export default CoxsBazar
