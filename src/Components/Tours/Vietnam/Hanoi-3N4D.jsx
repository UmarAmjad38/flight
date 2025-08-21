import Phuket from '../../../assets/Phuket.jpg'
import Pattaya from '../../../assets/Pattaya.jpg'
import PhiPhi from '../../../assets/phi_phi.jpg'
import Krabi from '../../../assets/Krabi.jpg'


const Hanoi3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Hanoi</h2>
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
                      <p>29000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights hotel accommodation with breakfast</p>
                          <p>Hanoi City tour</p>
	                  <p>Hanoi- Ha Long Bay By Shuttle Bus with Lunch & Dinner</p>
                          <p>Round-trip airport transfers</p>
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
                      <p><strong>Day1:</strong> Arrival and Transfer to  Hotel and Half Day Hanoi City tour</p>
                      <p><strong>Day2:</strong> Hanoi- Ha Long Bay By Shuttle Bus with Lunch & Dinner</p>
                      <p><strong>Day3:</strong> HA NOI – HA LONG BAY tour with lunch</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default Hanoi3N4D
