import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Phuket from '../../assets/Phuket.jpg'
import Pattaya from '../../assets/Pattaya.jpg'
import PhiPhi from '../../assets/phi_phi.jpg'
import Krabi from '../../assets/Krabi.jpg'
import Bangkok from '../../assets/Bangkok.jpg'

const packages = [
   {
   id: 1,
   destinationImage: Pattaya,
   destinationName: 'Pattaya',
   duration: '2Nights 3Days',
   Price: '19000',
   url: 'Pattaya2N3D'
   },
   {
   id: 2,
   destinationImage: Bangkok,
   destinationName: 'Bangkok Pattaya',
   duration: '4Nights 5Days',
   Price: '28500',
   url: 'Bangkok-Pattaya-4N5D'
   },
   {
   id: 3,
   destinationImage: PhiPhi,
   destinationName: 'Phuket Phi Phi Krabi',
   duration: '5Nights 6Days',
   Price: '41500',
   url: 'Phuket-phi-phi-krabi-5N6D'
   },
   {
   id: 4,
   destinationImage: Krabi,
   destinationName: 'Phuket Phi Phi Krabi',
   duration: '6Nights 7Days',
   Price: '51500',
   url: 'Phuket-phi-phi-krabi-6N7D'
   },
]


const Thailand = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(
      <div className='package container section'>
	  <div className='sectionContainer'>
	      <h1>Thailand Tour Packages</h1>
	      
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
export default Thailand
