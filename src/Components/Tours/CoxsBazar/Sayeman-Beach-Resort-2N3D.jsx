import Sayeman_beach_resort from '../../../assets/Sayeman_beach_resort.jpg'
//import Pattaya from '../../../assets/Pattaya.jpg'
//import PhiPhi from '../../../assets/phi_phi.jpg'
//import Krabi from '../../../assets/Karabi.jpg'


const SayemanBeach2N3D =()=>{
   return(
     <div className='singlepack container section'>
           <div className='sectionContainer'>
               <h2>Sayeman Beach Resort</h2>
	       <div className='imageContainer sflex'>
                    <div className='leftImage'>
                        <img src='' className='destinationImage'/>
                        <img src='' className='destinationImage'/>
                    </div>
                    <div className='middleImage'>
                        <img src={Sayeman_beach_resort} className='destinationImage'/>
                    </div>
                    <div className='rightImage'>
                        <img src='' className='destinationImage'/>
                        <img src='' className='destinationImage'/>
                   </div>
               </div>

	       <div className='details dflex'>
	          <div className='duration'>
	              <p><strong>Duration</strong></p>
	              <p>2Nights 3Days</p>
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
                      <p>21000/-</p>
                  </div>
               </div>
	        
	        <h2>Package Details</h2> 
               <div className='packageContainer iflex'>
	            <div className='includePackage'>
                          <h3>Included</h3>
                          <p>2 Nights hotel accommodation with breakfast</p>
                          <p>Dhaka-CoxsBazar-Dhaka Air ticket</p>
	                  <p>Round-trip airport transfers</p>
                          <p></p>
                      </div>
                      <div className='includePackage'>
                           <h3>Excluded</h3>
                           <p> Personal expenses such as souvenirs, tips, and additional meals not mentioned in the itinerary</p>
                           <p> Any optional tours or activities not mentioned in the itinerary</p>
                      </div>
                 </div>

	         <div className='itenary'>
	              <h2>Conditions</h2>
                      <p> This offer is non-refundable and cannot be changed once purchased.</p>
                      <p> The offer is subject to availability at the time of purchase only.</p>
	              <p> Customized packages are available upon request.</p>
	              <p> The package prices are not applicable during blackout dates.</p>
	              <p> The package price is subject to change based on flight seat availability.</p>
	              <p> Xpress Trip reserves the right to change the package at any time.</p>
	       </div>
           </div>
     </div>	   
   )
}
export default SayemanBeach2N3D
