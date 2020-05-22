import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const checkoutPage = ({ cartItems, total }) => (
   <div className="checkout-page">
      <div className="checkout-header">
         <div className="header-block">
            <span>Produto</span>
         </div>
         <div className="header-block">
            <span>Descrição</span>
         </div>
         <div className="header-block">
            <span>Quantidade</span>
         </div>
         <div className="header-block">
            <span>Preço</span>
         </div>
         <div className="header-block">
            <span>Remover</span>
         </div>
      </div>
      {
         cartItems.map(item => (
            <CheckoutItem key={ item.id } item={ item }/>
         ))
      }
      <div className="total">
         <span>TOTAL: R${ total },00</span>
      </div>
   </div>
)

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

export default connect(mapStateToProps)(checkoutPage);