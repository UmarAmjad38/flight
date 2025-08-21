import { Link } from 'react-router-dom'

const packages = [
   {
   id: 1,
   destinationImage: '',
   destinationName: 'SriLanka',
   duration: '3Nights 4Days',
   Price: '28000',
   url: 'SriLanka-3N4D'
   },
]
const SriLanka = () => {
  return(
      <div className='package container section'>
	  <div className='sectionContainer'>
	      <h1>SriLanka Tour Packages</h1>
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
export default SriLanka
