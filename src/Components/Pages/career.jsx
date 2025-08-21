import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Career =()=>{

   const { pathname } = useLocation();
  
     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
  
	
   return(
       <div className='singlepage container flex'>
        <div className='singleText'>
           <h1>Current open positions</h1>

           <h2>Marketing and Sales Specialist</h2>
            <h4>Job Responsibilities</h4>
            <p>In-depth understanding of the travel industry market trends, competitors, and customer behavior.</p>
            <p>Strong focus on achieving sales targets and business growth.</p>
            <p>Ability to adapt to changing market conditions and business environments.</p>
            <p>Ability to develop and implement business development strategies.</p>
            <p>Build and maintain strong relationships with existing and potentianl clients to understand their needs, address their concerns and provide personalized travel solutions.</p>
            <p>Collaborate with marketing team to develop effective marketing strategies to attract clients, increase brand awareness and generate leads.</p>
             <h4>Education:</h4>
             <p> Bachelor  in Business Administration, Marketing, Tourism Management, or a related field.</p>
<h4>Experience:</h4>
             <p>2+ years of experience in the travel industry</p>
             <p>Proven track record in sales and achieving targets.</p>
             <p>Experience in managing and growing client relationships.</p>
             <p>Excellent verbal and written communication skills.</p>
             <p>Strong network within the travel industry.</p>
             <p>Proficiency in Word, Excel, PowerPoint, and Outlook.</p>
             <br/>
             <strong>Job location:</strong> Uttara
              <p>Send your updated CV to career@xpresstripz.com</p>
	 </div>
     </div>
   )
}

export default Career
