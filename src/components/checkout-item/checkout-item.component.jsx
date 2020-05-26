import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './checkout-item.styles';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity }, item, clearItem, addItem, removeItem }) => (
   <CheckoutItemContainer>
      <ImageContainer>
         <img src={ imageUrl } alt="item"/>
      </ImageContainer>
      <TextContainer>{ name }</TextContainer>
      <QuantityContainer>
         <div 
            onClick={() => removeItem(item)}
            style={{visibility: (quantity>1?'visible':'hidden')}}
         >&#10094;</div>
         <span>
            { quantity }
         </span>
         <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{ price }</TextContainer>
      <RemoveButtonContainer onClick={ () => clearItem(item) }>&#10005;</RemoveButtonContainer>
   </CheckoutItemContainer>
)

const mapDispatchToProps = dispatch => ({
   clearItem: item => dispatch(clearItemFromCart(item)),
   removeItem: item => dispatch(removeItem(item)),
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);