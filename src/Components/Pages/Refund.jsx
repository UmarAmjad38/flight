import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Refund =()=>{

    const { pathname } = useLocation();

     useEffect(() => {
       window.scrollTo(0, 0);
     }, [pathname]);
	
    return(
        <div className='singlepage container flex'>
            <div className='singleText'>

                 <h1>Return & Refund Policy</h1>
                <span>
                <p>Note: The terms and conditions outlined below apply to all services provided by Xpress Trip. Please read these carefully as they govern your use of our online and offline services. These policies may be revised from time to time, and the latest version will be applicable.</p>
                </span>
                <h2>General Terms:</h2>

                <p>These Terms & Conditions (T&C) apply to all services offered by Xpress Trip, both online and offline, and are designed for personal, non-commercial use only.</p>

                <p>These T&Cs do not extend to relationships with other commercial service providers (B2B) with whom Xpress Trip has affiliations with.</p>

                <h2>Refund Modality:</h2>
                <span>
                <p>Refund will be returned as an account payable cheque only to the lead guest and he/she must fill out the proof of receipt and sign it. He/She must be obliged to pay any transaction fee from the source of transaction which may arise at the time of transaction. For purchases made through Mobile Financial Services (MFS) such as Bkash, Nagad, Rocket, etc., a service/cash-out charge will be applicable, borne by the customer. The charge amount will vary based on the MFS used during the purchase.</p>
                </span>
                <h2>Refund Policy:</h2>

                <h3>Flight Booking</h3>
                <span>
                <p>The refund amount is disbursed after deducting the airline’s penalty and Xpress Trip service fee (not applicable for non-refundable tickets).
Different policies for cancellation, re-issue, refund, and void are specified for each airline.</p>
                <p>For cancellations and refunds, we always follow the airline’s refund policy. The airline solely holds the right to change any policy. Xpress Trip has no control over the airline’s policy.</p>
                <p>For any refund/cancellation/date change/Void related queries kindly email us at sales@xpresstripz.com. Any service of the following will only be processed after receiving approval from clients.</p>
                <p>If airlines increase the fare of a booking during the booking period, a client has to pay the additional amount, else we will refund the paid amount.
In case of a date change/re-issue of the ticket for a child who will be crossing the child age to adult (as per airline policy) on the new travel date, a new charge of the ticket will be the difference in airfare, plus a date change fee of an adult along with any other charges applicable as per airline policy.</p>
                <p><strong>Note:</strong> Please note that it takes a minimum of 07-25 bank working days to complete the refund process. This does not apply to non-refundable tickets.</p>
                </span>
                <h3>Hotel Booking</h3>
                <span>
		 <p>Information on our website is from suppliers/hoteliers, who may change prices. Though we verify, we can’t ensure complete accuracy. If your booked hotel isn’t available, we’re here to help find a similar one, ensuring a smooth and enjoyable stay.</p>
                <p>A refund is processed after deducting the Xpress Trip service fee.</p>
                <p>Timelines and specific policies based on individual hotel cancellation policies.</p>
                <p>No date change option; cancellation and rebooking are required.</p>
                <p>Black-out dates are not cancellable or refundable.</p>
                <p>Xpress Trip provides various types of accommodation services. You accept the following hotel’s terms and conditions. </p>
                <p>Please take a moment to check whether the hotel you’re interested in is refundable before making a reservation. If it is, rest assured that we’ve got you covered! You can expect your refund to be processed within 07-25 working days, although the exact timeframe may vary based on the specific hotel and your bank’s policies.</p>
                <p>For any refund/cancellation/date change-related queries kindly email us at sales@xpresstripz.com.</p>
                </span>
                <h3>Package Booking</h3>
                <span>
                <p>A refund is processed after deducting the Xpress Trip service fee.</p>
                <p>Specific policies tailored to each tour are carefully outlined.</p>
                <p>Please note that blackout dates are not cancellable or refundable.</p>
                <p>Except for the non-refundable packages all the refunds will be processed within 07-25 bank working days.</p>
                </span>
                <h3>Visa Processing</h3>
                <span>
                <p>At Xpress Trip, we aim to make your visa application process as smooth as possible for your global adventures. While we can’t guarantee embassy approval, our Visa Return and Refund Policy are designed to provide you with clarity and flexibility.</p>

                <p>We commit to assisting you throughout the visa processing to various destinations worldwide.</p>
                <p>Please note that the outcome of the visa application is subject to the embassy’s discretion, and Xpress Trip cannot assure approval.
                Xpress Trip service charges and processing fees, incurred during the visa application process, are non-refundable, regardless of the visa outcome.
Clients are encouraged to communicate any changes or cancellations to visa applications promptly. Timely communication allows us to assist you effectively.
Providing accurate and truthful information during the visa application process is crucial. Clients are responsible for disclosing all relevant details.
Ensure your passport has a minimum validity of at least 6 months before initiating the visa application process.</p>
                <p>Count on Xpress Trip to transform your travel dreams into reality. We simplify the visa assistance process, tailored just for you!</p>

                <p>For any questions or concerns regarding our Visa Return and Refund Policy, please contact us at sales@xpresstripz.com.</p>
                </span>
                <h2>Right to Refuse:</h2>
                <span>
                <p>Xpress Trip reserves the right to decline service to a user if:</p>

                <p>The user violates any of the terms and conditions set forth.</p>
                <p>Xpress Trip is unable to verify the information provided by the user.</p>
                <p>Xpress Trip believes that the user’s actions may infringe upon third-party rights or violate any other applicable law.</p>
                </span>
	        <h2>Right to Cancellation</h2>
		<span>
                <p><strong>Right to Cancel:</strong> Xpress Trip may cancel a booking if we have reason to believe the user provided incorrect information. We reserve the right to take legal action in such cases. Please be aware that Xpress Trip will not be responsible for any financial loss incurred by the user as a result.</p>
                </span>
            </div>
        </div>
    )
}

export default Refund

