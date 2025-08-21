import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/profile_picture_01.png';
import payment from '../../assets/Payment_method.jpg';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className='bg-[#bfbfbf] text-gray-800'>
         <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

               <div className="md:col-span-3 lg:col-span-2">
                  <Link to="/" className='mb-6 inline-block'>
                     <img src={Logo} className='h-12 w-auto' alt='Xpress Trip Logo'/>
                  </Link>
                  <p className='text-sm text-gray-600 mb-4'>
                     Xpress Trip makes travel faster, easier, and stress-free. From instant flight bookings to hassle-free visa support, we help you explore the world without the wait.
                  </p>
                  <p className='font-semibold text-yellow-600 text-sm mb-6'>
                     Xpress Trip — Travel Without the Wait.
                  </p>
                  <div className="flex items-center space-x-4">
                     <Link to="https://www.facebook.com/xpresstripz/" aria-label="Facebook" className='text-gray-600 hover:text-blue-600 transition-transform duration-300 hover:scale-110'>
                        <FaFacebookSquare size={24}/>
                     </Link>
                     <Link to="https://www.instagram.com/xpresstripz/" aria-label="Instagram" className='text-gray-600 hover:text-pink-600 transition-transform duration-300 hover:scale-110'>
                        <FaInstagramSquare size={24}/>
                     </Link>
                     <Link to="https://x.com/xpresstripz" aria-label="Twitter" className='text-gray-600 hover:text-blue-500 transition-transform duration-300 hover:scale-110'>
                        <FaTwitterSquare size={24}/>
                     </Link>
                     <Link to="https://www.linkedin.com/company/xpresstripz/" aria-label="LinkedIn" className='text-gray-600 hover:text-blue-700 transition-transform duration-300 hover:scale-110'>
                        <FaLinkedin size={24}/>
                     </Link>
                  </div>
               </div>

               <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">About</h3>
                  <ul className="space-y-3 text-sm">
                     <li><Link to="/Aboutus" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>About Us</Link></li>
                     <li><Link to="/Refund" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Refund Policy</Link></li>
                     <li><Link to="/TermsConditions" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Terms & Conditions</Link></li>
                     <li><Link to="/Privacy" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Privacy Policy</Link></li>
                  </ul>
               </div>
                 
               <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Help</h3>
                  <ul className="space-y-3 text-sm">
                     <li><Link to="/Faq" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>FAQ</Link></li>
                     <li><Link to="/Payment" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Payment Methods</Link></li>
                     <li><Link to="/Contactus" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Contact Us</Link></li>
                     <li><Link to="/Career" className='text-gray-600 hover:text-yellow-600 transition-colors duration-300'>Career</Link></li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
                  <div className='space-y-3 text-sm text-gray-600'>
                     <p>09649902222</p>
                     <p>01820801387 (Whatsapp)</p>
                     <p>sales@xpresstripz.com</p>
                     <p>H M Plaza, Level-10<br/>Suite #04, Sector #03<br/>Uttara, Dhaka-1230</p>
                  </div>
               </div>
            </div>

            <div className='mt-12 pt-8 border-t border-gray-300 lg:flex lg:items-center lg:justify-between'>
               <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Accepted Payments</h3>
                  <img src={payment} className='h-40 w-auto rounded-lg shadow-md' alt='Accepted payment methods'/>
               </div>
               <div className='mt-8 lg:mt-0 text-sm text-gray-500 text-center lg:text-right'>
                  <p>Copyright © {new Date().getFullYear()} Xpress Trip. All Rights Reserved.</p>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;