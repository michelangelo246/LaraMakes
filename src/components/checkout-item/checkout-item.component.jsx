import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { name, imageUrl, price, quantity }, item, clearItem, addItem, removeItem }) => (
   <div className="checkout-item">
      <div className="image-container">
         <img src={ imageUrl } alt="item"/>
      </div>
      <span className="name">{ name }</span>
      <span className="quantity">
         <div 
            className="arrow" 
            onClick={() => removeItem(item)}
            style={{visibility: (quantity>1?'visible':'hidden')}}
         >&#10094;</div>
         <div className="value">
            { quantity }
         </div>
         <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{ price }</span>
      <div className="remove-button" onClick={ () => clearItem(item) }>&#10005;</div>
   </div>
)

const mapDispatchToProps = dispatch => ({
   clearItem: item => dispatch(clearItemFromCart(item)),
   removeItem: item => dispatch(removeItem(item)),
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);