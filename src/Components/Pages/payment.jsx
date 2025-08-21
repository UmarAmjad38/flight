import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = ()=> {

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

   return(
      <div className='paymentpage container pflex'>
	  <div className='Bank'>
	      <h1>Payment Method</h1>
	      <h2>Direct Banking</h2>
	      <div className='account bflex'>
	      	<div className='account'>
	      		<img src="https://www.primebank.com.bd/web/new_assets/assets/images/Logo-en.png"  className='Blogo'/>
	      		<p><strong> Prime Bank PLC</strong></p>
	      		<p><strong> Account Name:</strong> Xpress Trip</p>
	      		<p><strong> A/C No:</strong> 2170135025676</p>
	      		<p><strong> Routing No:</strong> 170261645</p>
	      		<p><strong> Branch:</strong> Garib-e-Newaz</p>
	      	</div>

	      	<div className='account'>
                	<img src="https://www.dutchbanglabank.com/img/logo.png"  className='Blogo'/>
                	<p><strong> Dutch-Bangla Bank PLC</strong></p>
                	<p><strong> Account Name:</strong> Xpress Trip</p>
                	<p><strong> A/C No:</strong> 3211100007469</p>
                	<p><strong> Routing No:</strong> 090261433</p>
                	<p><strong> Branch:</strong> Rabindra Sharani</p>
	      	</div>
	      </div>
	  </div>

          <div className='Mobile mflex'>
              <h2>Mobile Banking</h2>
	      <p><strong>bKash (Personal)</strong></p>
	       <p>01820801387</p>
          </div>

	  <div className='Office'>
	      <h2>Cash at Office</h2>
	      <p>Deposit Cash at our Office Counter</p>
	  </div>
      </div>
   )
}

export default Payment
