import React from 'react'
//import { View, Text } from 'react-native'

const VisaSingapore = () =>{
   return(
      <div className='singlepage flex container'>
	 <div className='singleText'>
	    <h1>Required Documents for E-visa (Singapore) </h1>
	    <span>
	        <h3>Basic Documents</h3>
	        <p>07 Months Valid Passport With Old Passport (If have)</p>
	        <p>Recent 2 copy photograph taken in last 3 months (white background only, photo size 35 mm X 45 mm)</p>
	        <p>Personal bank statement of last 06 months and minimum balance BDT 1,00,000 for each applicant.</p>
	        <p>Visiting card</p>
	        <p>Vaccination Certificate Copy</p>
	        <p>Hotel Booking Copy</p>
	        <p>Air Ticket Booking Copy</p>
	    </span>

	    <span>
            	<h3>Job Holder</h3>
		<p>No objection certificate (NOC)</p>
		<p>Marriage certificate copy (if spouse name not mentioned in the passport)</p>
		<p>Employee Id card copy (One photo copy)</p>
		<p>Salary bank statement (Last 06 months) and bank solvency certificate or salary certificate or pay slip</p>
		<p>Personal bank solvency certificate</p>
	        <p>GO (Government order) for official passport</p>
                <p>BMDC certificate for doctor (Scan copy)</p>
                <p>BAR council certificate for Advocate(One photo copy)</p>
                <p>Retirement document for Retired Person (One photo copy)</p>
	     </span>

	     <span>
	        <h3>Businessman</h3>
		<p>Renewal trade license copy with notary public (english translated)</p>
		<p>Marriage certificate copy (if spouse name not mentioned in the passport)</p>
		<p>Memorandum for limited company form page XII (One photo copy)</p>
		<p>Company letter head pad</p>
		<p>Personal or company bank solvency certificate</p>
	     </span>  
	     
	     <span>
                <h3>Student</h3>
		<p>ID card (Student) one photocopy both sides</p>
		<p>Leave letter from school or collage original copy</p>
	        <p>Birth certificate for Non-student Child & Infant</p>
             </span>

	 </div> 

	 <div className='singleText'>
           <h1>Visa Processing Fee</h1>
           <span>
           <h2>BDT 5000</h2>
           <p>Non-Refundable</p>
           <p>Include Service Charge</p>
           </span>
         </div>
  
      </div>
   )
}

export default VisaSingapore
