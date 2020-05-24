import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_FqLrHoesrjRM8wloO5mwKOwD00uximOnl3';

   const onToken = token => {
      console.log(token);
      alert('Payment Successful');
   }

   return (
      <StripeCheckout
         currency='BRL'
         allowRememberMe
         label='Pagamento &#128179;'
         name='Lara Makes Ltd.'
         billingAddress
         shippingAddress
         image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Circle-icons-creditcard.svg/1200px-Circle-icons-creditcard.svg.png'
         description={`O valor total é de R$${price},00`}
         amount={priceForStripe}
         panelLabel='Realizar Pagamento'
         token={onToken}
         stripeKey={publishableKey}
      />
   )
}

export default StripeCheckoutButton;