import React from 'react';
import { BackgroundImageContainer, CartItemContainer, ItemDetailsContainer, NameSpan } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
   <CartItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ItemDetailsContainer>
         <NameSpan>{name}</NameSpan>
         <span>{quantity} x R${price},00</span>
      </ItemDetailsContainer>
   </CartItemContainer>
)

export default CartItem;