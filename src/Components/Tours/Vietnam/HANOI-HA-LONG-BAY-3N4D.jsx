import Pagoda from '../../../assets/Pagoda.jpg'
import Chi_Minh from '../../../assets/Chi-Minh.jpg'
import One_Pillar from '../../../assets/One-Pillar.jpg'
import Halong_bay from '../../../assets/Halong-bay.jpg'
import Kayaking from '../../../assets/Kayaking.jpg'
import Halong_bay_ship from '../../../assets/Halong-bay-ship.jpg'


const HANOIHALONGBAY3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>HANOI-HA-LONG-BAY</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pagoda} className='destinationImage'/>
                        <img src={Chi_Minh} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={One_Pillar} className='destinationImage'/>
                        <img src={Halong_bay} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Kayaking} className='destinationImage'/>
                        <img src={Halong_bay_ship} className='destinationImage'/>
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
                      <p>31000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights hotel accommodation with breakfast</p>
                          <p>Entrance Fee</p>
	                  <p>Kayaking and Bamboo Rowing</p>
	                  <p>English Speeking guide</p>
                          <p>Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
	                   <p>Visa stamp fee</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to  Hotel</p>
                      <p><strong>Day2:</strong> Visit Tran Quoc Pagoda, Ho Chi Minh Mausoleum, One Pillar Pagoda, History Museum with Lunch.</p>
                      <p><strong>Day3:</strong> Kayaking or a bamboo boat in luon cave to discover the beautiful lagoon. Visit Titov Island with Lunch.</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HANOIHALONGBAY3N4D
