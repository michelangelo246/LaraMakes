import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_FqLrHoesrjRM8wloO5mwKOwD00uximOnl3';

   const onToken = token => {
      axios({
         url: 'payment', // append 'payment' to the current url
         method: 'POST',
         data: {
            amount: priceForStripe,
            token: token
         }
      }).then(response => {
         alert('payment successful');
      }).catch(error => {
         console.log('Payment error:', JSON.parse(error));
         alert('Houve um erro com seu pagamento. Garanta que você proveu o cartão de crédito informado.');
      });
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