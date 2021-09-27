import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price}) => {
    //Stripe value in sense
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ip4wpSGbelzIZUmeyVdhz3SY8YEcTCzszZttZ4HLyiAO6vvCMVr9KdnZeJ9giuVyGKzOUenCMjK4U3vKwpWUCC300xnhQlWir';

    const onToken = (token) => {
        axios({
          url: "payment",
          method: "post",
          data: {
            amount: priceForStripe,
            token: token,
          },
        })
          .then((response) => {
            alert("Payment Succceful");
          })
          .catch((error) => {
            console.log("Payment error: ", error);
            alert(
              "There was an issue with your payment! Please make sure you use the provided credit card."
            );
          });
      };
    

    return (
        <StripeCheckout 
         label="Pay Now"
         name="CRWN CLOTH"
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         allowRememberMe
         stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;