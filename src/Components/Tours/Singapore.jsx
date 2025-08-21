import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const packages = [
   {
   id: 1,
   destinationImage:'',
   destinationName: 'EXPLORE SINGAPORE',
   duration: '3Nights 4Days',
   Price: '96000',
   url: 'Explore-Singapore-3N4D'
   },
]

const Singapore = () => {

  const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

  return(
      <div className='package container section'>
          <div className='sectionContainer'>
              <h1>Singapore Tour Packages</h1>

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
export default Singapore
