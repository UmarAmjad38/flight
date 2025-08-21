import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Aboutus = ()=> {


   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

   return(
      <div className='singlepage container flex'>
	  <div className='aboutText'>
	      <h2>About Xpress Trip</h2>
	      <p>At Xpress Trip, we believe travel should never be about waiting — it should be about going</p>

	      <p>Travelers deserve a faster, easier, and smarter way to book flights, get visas, and explore the world. Long queues, endless phone calls, and confusing processes were slowing people down — so we built a service designed for speed, simplicity, and trust.</p>

	      <p>With the tagline “Travel Without the Wait,” we’ve made it our mission to remove the barriers between you and your next adventure. Whether it’s a last-minute flight to Chattogram, a dream honeymoon in the Maldives, or a business trip to Dubai, Xpress Trip is your shortcut to the skies.</p>

	       <p>Our platform combines seamless booking, hassle-free visa support, and instant customer care, so you spend less time worrying and more time experiencing. We’re not just about tickets — we’re about freedom, convenience, and making every journey smoother than the last.</p>

               <p>Our platform combines seamless booking, hassle-free visa support, and instant customer care, so you spend less time worrying and more time experiencing. We’re not just about tickets — we’re about freedom, convenience, and making every journey smoother than the last.</p>
	       
	       <p>Because with Xpress Trip, the world isn’t something you wait for — it’s something you reach, faster.</p> 
	      
	  </div>
      </div>
   )
}

export default Aboutus
