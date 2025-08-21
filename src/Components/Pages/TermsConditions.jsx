import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TermsConditions = () => {

   const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);

   return(
      <div className='singlepage container flex'>
          <div className='singleText'>

                <h2>Terms and Conditions</h2>
                <h3>Acceptance of Terms</h3>
                <span>
                <p>By using any services provided by Xpress Trip, you acknowledge and agree to abide by these terms and conditions. Xpress Trip reserves the right to modify these terms without prior notice. Your continued use of the website and its services indicates acceptance of any modified terms. It is recommended to review the terms periodically to stay informed.</p>
                </span>
                <h3>General Disclaimer</h3>
                <span>
                <p>Xpress Trip connects travelers with travel service providers such as airlines, hotels, embassies, and tour operators. The accuracy and completeness of information displayed on the site are the responsibility of each provider. Changes in market conditions may lead to inaccuracies or outdated information on the site.</p>

                <p>In case of issues during booking or travel, Xpress Trip acts as a point of contact and will make commercially reasonable efforts to assist customers, adhering to standard policies of travel providers.</p>
                </span>
                <h3>Booking Terms</h3>
                <span>
                <p>Xpress Trip acts as a user interface, and travelers must agree to the terms and conditions of the respective travel providers before making bookings.</p>

                <strong>Prices and offers are subject to change based on availability.</strong>

                <p>We strive to provide the most accurate and up-to-date information on our website, but we understand that errors may occur. Before you make a booking, please reach out to us to confirm pricing and details.</p>

                <p>When you make travel bookings on our website, through one of our agents, or purchase any travel services offered by Xpress Trip, we want you to feel confident. By doing so, you confirm that:</p>

                <p>You are at least 18 and have the legal authority to create a binding legal obligation.</p>

                <p>You accept and agree to all the terms presented herein.</p>

                <p>All information you provide for the booking is true, accurate, current, and complete to the best of your knowledge.</p>
                </span>
                <h3>Booking on behalf of others</h3>
                <span>
		<p>If you’re making a booking on behalf of others, you become the main contact person for those travelers. By doing so, you confirm that you have the legal authority to act on their behalf, have obtained necessary consents, and will inform them about and ensure their acceptance of these Terms. You’re also responsible for handling all payments for the booking, informing us of any necessary changes or cancellations, and keeping the other travelers updated on all relevant trip information. Your commitment helps ensure a smooth and enjoyable travel experience for everyone involved. </p>
                </span>

                <h3>Unavailability of any tour component</h3>
                <span>
                <p>In the context of “Unavailability of any tour component,” it refers to instances where a specific element or feature included in your booked tour becomes unavailable due to unforeseen circumstances. This could include, but is not limited to:</p>

                <p><strong>Accommodation Issues:</strong> The hotel or lodging originally planned for your stay becomes unavailable or undergoes unexpected closures.</p>

                <p><strong>Transportation Constraints:</strong> Any transportation mode, such as flights, trains, or other pre-arranged means, becomes unavailable or experiences disruptions.</p>

                <p><strong>Activity or Excursion Changes:</strong> Attractions, excursions, or activities initially part of your tour are no longer accessible or available.</p>

                <p>Should any of these situations arise, we will promptly notify you about the unavailability of the specific tour component. Subsequently, we will work collaboratively to explore alternative options, and substitutions, or, if necessary, provide information about potential adjustments to the package price based on the revised itinerary or inclusions. We aim to keep you well-informed and ensure a satisfactory resolution in the event of unforeseen changes to the tour components.</p>
                </span>

                <h3>Promotion Terms</h3>
                <span>
                <p>Xpress Trip issues promotion codes/discounts periodically.</p>

                <p>Xpress Trip reserves the right to modify or withdraw promotion terms without prior notice.</p>

                <p>In case of disputes, Xpress Trip’s decision is binding and final.</p>
                </span>

                <h3>Payment Terms</h3>
                <span>
                <p>By making a payment on this site, you consent to using personal details for verification and validation of transactions.</p>

                <p>Details may be disclosed to third-party credit card payment gateway agencies for verification purposes only.</p>

                <p>Convenience Charge, charged by Xpress Trip, may vary based on the payment method.</p>
                </span>
		<h3>Delivery Time</h3>
                <span>
                <p><strong>Air Ticket:</strong> At Xpress Trip, we want to make sure your journey is as smooth as possible. When it comes to the timing of your air ticket issuance, it’s important to know that this process is managed by the respective airlines you’ll be flying with. While we’re here to assist you every step of the way, including facilitating your ticket bookings, the exact timing of ticket issuance is determined by the airline’s procedures. We recommend checking the airline’s specific terms and conditions for the most accurate information on when you can expect to receive your ticket</p>

                <p><strong>VISA Processing:</strong> When it comes to visa processing, timelines can vary depending on the requirements and procedures of the respective embassies or consulates handling the application. At Xpress Trip, we’re dedicated to assisting you through every step of the visa application process. However, it’s important to note that the processing time for visas is determined by the embassy or consulate of the country you’re applying to visit. These processing times can differ from one country to another and are subject to change based on various factors.</p>

                <p><strong>Land Packages:</strong> The service vouchers for your land package, including accommodations, transportation, and other inclusions, are issued once we receive confirmation from the respective airlines, hotels, and transportation providers involved in your package. While we work diligently to expedite this process, please understand that the issuance of service vouchers is dependent on availability and confirmation from our trusted partners.</p>
                </span>

                <h3>Cancellation, Return, and Refunds</h3>
                <span>
                <p>Xpress Trip follows supplier policies (Airlines/Properties/Bus/Tour operators) for cancellation/re-issue.</p>

                <p>Refund/re-issue requests must be confirmed with Xpress Trip 72 hours before the travel date.</p>

                <p>Refunded amounts for hotel/flight/tour may be reflected in your account within 7 to 25 working days.</p>

                <p>Convenience Charge is non-refundable for any refund.</p>

                <p>EMI charges are applicable for EMI transactions.</p>

                <p>For any inquiries or concerns regarding these Terms and Conditions, please contact us at sales@xpresstripz.com</p>
                </span>

          </div>
      </div>
   )

}

export default TermsConditions

