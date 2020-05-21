import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

const cartDropdown = ({ cartItems }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.map(item => <CartItem key={ item.id } item={ item } />)
         }
      </div>
      <CustomButton>FINALIZE A COMPRA</CustomButton>
      
   </div>
);

const mapStateToProps = (state) => ({
   cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(cartDropdown);