import React from 'react';
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer } from './checkout.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const checkoutPage = ({ cartItems, total }) => (
   <CheckoutPageContainer>
      <CheckoutHeaderContainer>
         <HeaderBlockContainer>
            <span>Produto</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Descrição</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Quantidade</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Preço</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Remover</span>
         </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
         cartItems.map(item => (
            <CheckoutItem key={ item.id } item={ item }/>
         ))
      }
      <TotalContainer>TOTAL: R${ total },00</TotalContainer>
      <WarningContainer>*Test CC: #4242 4242 4242 4242 - Exp: 01/21 - CVV: 123</WarningContainer>
      <StripeCheckoutButton price={total}/>
   </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

export default connect(mapStateToProps)(checkoutPage);