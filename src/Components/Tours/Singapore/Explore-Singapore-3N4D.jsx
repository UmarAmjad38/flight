import Phuket from '../../../assets/Phuket.jpg'
import Pattaya from '../../../assets/Pattaya.jpg'
import PhiPhi from '../../../assets/phi_phi.jpg'
import Krabi from '../../../assets/Krabi.jpg'


const ExploreSingapore3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Explore-Singapore</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src='' className='destinationImage'/>
                        <img src='' className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src='' className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src='' className='destinationImage'/>
                        <img src='' className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>3Nights 4Days</p>
	          </div>
	          <div className='duration'>
	              <p><strong>Minimum</strong></p>
	              <p>2 Person</p>
                  </div>
	          <div className='duration'>
                      <p><strong>Pickup & Drop</strong></p>
                      <p>Airport</p>
                  </div>
	          <div className='duration'>
                      <p><strong>Per person</strong></p>
                      <p>96000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights hotel accommodation with breakfast</p>
                          <p>Singapore River Cruise</p>
                          <p>3 Hours Chinatown Tour + Lunch</p>
                          <p>Sands Skypark Observation Deck (Incld. 5 Digital Photos & 2 Magis Shots)</p>
	                  <p>Gardens By The Bay (Flower Dome + Cloud Forest)</p>
	                  <p>Singapore Zoo (Admission & Tram Ride)</p>
	                  <p>Singapore Flyer + Time Capsule</p>
                          <p>Round-trip airport transfers</p>
	                  <p>Singapore Duck Tour</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Hotel, Then Pick-Up To Singapore River Cruise</p>
                      <p><strong>Day2:</strong> 3 Hours Chinatown Tour + Lunch (With Guide & Transport)</p>
	                              <p>Pick-Up Sands Skypark Observation Deck (Incld. 5 Digital Photos & 2 Magis Shots)& Gardens By The Bay (Flower Dome + Cloud Forest)</p>
	              <p><strong>Day3:</strong> Pick-Up To Singapore Zoo (Admission & Tram Ride)</p>
	                              <p>Pick-Up To Singapore Flyer + Time Capsule</p>
	              <p><strong>Day4:</strong> One-Way Pick-Up To Singapore Duck Tour</p>
	              <p>Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default ExploreSingapore3N4D
