import Pagoda from '../../../assets/Pagoda.jpg'
import Chi_Minh from '../../../assets/Chi-Minh.jpg'
import Mua_cave from '../../../assets/Mua_cave.jpg'
import Hoa_lu_Ancient from '../../../assets/Hoa_lu_Ancient.jpg'
import St_Josephs_Cathedral from '../../../assets/St_Josephs_Cathedral.jpg'
import Tam_Coc from '../../../assets/Tam_Coc.jpg'


const HANOININHBINH3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>HANOI-NINH-BINH</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pagoda} className='destinationImage'/>
                        <img src={Chi_Minh} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Mua_cave} className='destinationImage'/>
                        <img src={Hoa_lu_Ancient} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={St_Josephs_Cathedral} className='destinationImage'/>
                        <img src={Tam_Coc} className='destinationImage'/>
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
	                  <p>Bamboo rowing</p>
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
                      <p><strong>Day2:</strong> Visit Tran Quoc Pagoda, Ho Chi Minh, St. Josephs Cathedral with Lunch</p>
                      <p><strong>Day3:</strong> Visit Hoa Lu ancient capital of vietnam, Tam Coc on a 1.5 hour bamboo boat, Mua Cave with Lunch</p>
	              <p><strong>Day4:</strong> Transfer to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default HANOININHBINH3N4D
