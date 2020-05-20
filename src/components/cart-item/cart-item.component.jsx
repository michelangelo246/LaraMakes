import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
   <div className="cart-item">
      <div className='bg-img' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className="item-details">
         <span className="name">{ name }</span>
         <span className="price">{ quantity } x R${ price },00</span>
      </div>
   </div>
)

export default CartItem;