import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Faq = ()=> {

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

   return(
      <div className='singlepage container flex'>
	  <div className='singleText'>
	      <h2>Faq</h2>
	  </div>
      </div>
   )
}

export default Faq
