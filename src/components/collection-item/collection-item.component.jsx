import React from 'react';
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from './collection-item.styles';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
   const { name, imageUrl, price } = item;
   return (
      <CollectionItemContainer>
         <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
         <CollectionFooterContainer>
            <NameContainer>{ name }</NameContainer>
            <PriceContainer>{ price }</PriceContainer>
         </CollectionFooterContainer>
         <AddButton neutral onClick={ () => addItem(item) } >Adicione ao carrinho</AddButton>
      </CollectionItemContainer>
   )
}

const mapDispatchToProps = (dispatch) => ({
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);