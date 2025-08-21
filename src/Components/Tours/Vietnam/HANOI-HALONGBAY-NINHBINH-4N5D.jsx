import Pagoda from '../../../assets/Pagoda.jpg'
import Chi_Minh from '../../../assets/Chi-Minh.jpg'
import One_Pillar from '../../../assets/One-Pillar.jpg'
import Kayaking from '../../../assets/Kayaking.jpg'
import Mua_cave from '../../../assets/Mua_cave.jpg'
import Hoa_lu_Ancient from '../../../assets/Hoa_lu_Ancient.jpg'


const HANOIHALONGBAYNINHBINH4N5D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>HANOI-HA LONG BAY-NINH BINH</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pagoda} className='destinationImage'/>
                        <img src={Chi_Minh} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={One_Pillar} className='destinationImage'/>
                        <img src={Kayaking} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={Mua_cave} className='destinationImage'/>
                        <img src={Hoa_lu_Ancient} className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>4Nights 5Days</p>
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
                          <p>4 Nights hotel accommodation with breakfast</p>
                          <p>Enterance fee</p>
                          <p>Kayaking and Bamboo rowing</p>
	                  <p>English Speaking Guide</p>
                          <p>Round-trip airport transfers</p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p>International Airfare</p>
                           <p>Visa Stamp fee</p>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Travel insurance</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Itinerary</h2>
                      <p><strong>Day1:</strong> Arrival and Transfer to Hotel</p>
                      <p><strong>Day2:</strong> Visit Tran Quoc Pagoda, Ho Chi Minh Mausoleum and One Pillar Pagoda with Lunch</p>
                      <p><strong>Day3:</strong> Kayaking or a Bamboo boat in Luon Cave, Visit Titov Island with a sandy beach with lunch</p>
                      <p><strong>Day4:</strong> Visit Hao Lu ancient capital, Mu Cave and Tam coc on a 1.5 hour Bamboo boat with lunch</p>
	              <p><strong>Day5:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HANOIHALONGBAYNINHBINH4N5D
