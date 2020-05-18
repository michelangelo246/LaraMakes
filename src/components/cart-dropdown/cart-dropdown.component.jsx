import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const cartDropdown = () => (
   <div className="cart-dropdown">
      <div className="cart-items"/>
      <CustomButton>FINALIZE A COMPRA</CustomButton>
   </div>
);

export default cartDropdown;