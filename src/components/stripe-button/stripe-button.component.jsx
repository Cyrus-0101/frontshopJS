import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 0.97;
  const publishableKey = 'pk_test_VFKjORhjxDwDXmcbFyZPDgns00ETO2gOFZ';

  const onToken = token => {
    console.log(token);
    // eslint-disable-next-line no-template-curly-in-string
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay With Visa'
      name='Drip Store Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is Ksh. ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}; 

export default StripeCheckoutButton;