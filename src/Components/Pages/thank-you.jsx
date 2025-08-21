import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Thankyou =()=>{


   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

   return(
      <div className='singlepage flex container'>
	 <div className='singleText'>
	   <h2>Thank you for the query. Our customer support will contact you soon.</h2>
	   <h3>For instant support message us on WhatsApp +8801622993561</h3>
	 </div>
      </div>	   

   )

}

export default Thankyou
