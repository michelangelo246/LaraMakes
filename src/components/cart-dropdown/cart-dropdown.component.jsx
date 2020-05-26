import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CartDropDownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles';

const cartDropdown = ({ cartItems, history, dispatch }) => (
   <CartDropDownContainer>
      <CartItemsContainer>
         {
            cartItems.length ?
            cartItems.map(item => <CartItem key={ item.id } item={ item } />):
            <EmptyMessageContainer>Seu carrinho está vazio</EmptyMessageContainer>
         }
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
         history.push(`/checkout`);
         dispatch(toggleCartHidden());
      }}>
         FINALIZE A COMPRA
      </CartDropdownButton>
   </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(cartDropdown));