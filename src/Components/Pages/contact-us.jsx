import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from 'emailjs-com'


const Contactus = ()=> {
   
    const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form ={
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
    }
    console.log(form);
     try {
        emailjs.send('service_hyaaa7p','template_q99lnqg',form,'4f_SEVkr2esPmUGHZ');
     }catch(error) {
          console.log({error})
      }
    navigate('/Thankyou')
  };
	

   return(
      <div className='singlepage container cflex'>
	  <div className='leftBar'>
	     <h2>Contact us</h2>
	     <h4>Email us</h4>
	     <p>sales@xpresstripz.com</p>
	     <h4>Call us</h4>
             <p>0964-990-2222</p>
             <h4>WhatsApp</h4>
	     <p>+8801622993651(Reservation)</p>
             <p>+8801820801387(Visa)</p>
	     <h4>Address</h4>
             <p>H M Plaza,level-10,Sector#03</p>
	     <p>Uttara, Dhaka-1230</p>
          </div>
             
	  <form onSubmit={handleSubmit}> 
	  <div className='singleText'>
              <p>You can reach us anytime via sales@xpresstripz.com</p>
                <div className="formbox flex">
                <label>Name</label>
                <input type='text' name='name' id='name' required/>
                <label>Email</label>
                <input type='email' name='email' id='email' required/>
                <label>Message</label>
                <textarea name='message' id='message' rows='10' cols='70' required></textarea>
                <br/>
                <button type="submit" className='btn btnBlock'>Submit</button>
                </div>
	  </div>
	  </form> 
      </div>
   )
}

export default Contactus
