import Pagoda from '../../../assets/Pagoda.jpg'
import Chi_Minh from '../../../assets/Chi-Minh.jpg'
import St_Josephs_Cathedral from '../../../assets/St_Josephs_Cathedral.jpg'
import lao_chai from '../../../assets/lao_chai.jpg'
import cat_cat from '../../../assets/cat_cat.jpg'
import cat_cat_waterfall from '../../../assets/cat_cat_waterfall.jpg'


const  HANOISAPAHANOI3N4D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2> HANOI-SAPA-HANOI</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src={Pagoda} className='destinationImage'/>
                        <img src={Chi_Minh} className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={St_Josephs_Cathedral} className='destinationImage'/>
                        <img src={lao_chai} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src={cat_cat} className='destinationImage'/>
                        <img src={cat_cat_waterfall} className='destinationImage'/>
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
                      <p>38000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>3 Nights hotel accommodation with breakfast</p>
                          <p>Entrace fee</p>
	                  <p>Visa stamp fee</p>
	                  <p>English speaking guide </p>
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
                      <p><strong>Day1:</strong> Arrival and Transfer to Hotel</p>
                      <p><strong>Day2:</strong> Visit Tran Quoc Pagoda, Ho chi Minh and St. Josephs Cathedral with Lunch</p>
                      <p><strong>Day3:</strong> Explore Cat Cat Village, Cat Cat Waterfall with lunch & Dinner</p>
	              <p><strong>Day4:</strong> Visit LaoChai Village and Transfer back to Airport</p>
	       </div>
           </div>
     </div>	   
   )
}
export default  HANOISAPAHANOI3N4D
