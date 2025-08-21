import Halong_bay from '../../../assets/Halong-bay.jpg'
import ba_trai_dao from '../../../assets/ba_trai_dao.jpg'
import Cruise_ship from '../../../assets/Cruise_ship.jpg'
import dark_light_cave from '../../../assets/dark_light_cave.jpg'
import tra_bau from '../../../assets/tra_bau.jpg'
import lan_ha_bay from '../../../assets/lan_ha_bay.jpg'


const HANOIHALONGBAYCRUISE3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>HANOI HALONG BAY OVERNIGHT ON CRUISE</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Halong_bay} className='destinationImage'/>
                        <img src={ba_trai_dao} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Cruise_ship} className='destinationImage'/>
                        <img src={dark_light_cave} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={tra_bau} className='destinationImage'/>
                        <img src={lan_ha_bay} className='destinationImage'/>
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
                      <p>39000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights hotel accommodation with breakfast</p>
                          <p>1 Nights accommodation in Cruise 5*</p>
	                  <p>Entrance fee</p>
	                  <p>Kayaking and Swimming</p>
	                  <p>English Speaking guide</p>
                          <p>Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
                           <p>Visa stamp fee</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to  Hotel and Half Day Hanoi City tour</p>
                      <p><strong>Day2:</strong> Swimming at Ba trai Dao Island, Visit Dark and Bright cave and poetic attractive seascape of Lan Ha Bay. Overnight in the Cruise with Lunch and Dinner</p>
                      <p><strong>Day3:</strong> Kayaking and swimming at Tra Bau, Explore Tra Bau with lunch and Dinner</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HANOIHALONGBAYCRUISE3N4D
