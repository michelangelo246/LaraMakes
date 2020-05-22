import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const cartDropdown = ({ cartItems, history, dispatch }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.length ?
            cartItems.map(item => <CartItem key={ item.id } item={ item } />):
            <span className="empty-message">Seu carrinho está vazio</span>
         }
      </div>
      <CustomButton onClick={() => {
         history.push(`/checkout`);
         dispatch(toggleCartHidden());
      }}>
         FINALIZE A COMPRA
      </CustomButton>
   </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(cartDropdown));