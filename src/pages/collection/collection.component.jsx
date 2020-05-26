import React from 'react';
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';

const CollectionPage = ({collection: {title, items}, collection}) => (
   <CollectionPageContainer>
      <CollectionTitle>{`${title}`}</CollectionTitle>
      <CollectionItemsContainer>
         {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
         }
      </CollectionItemsContainer>
   </CollectionPageContainer>
);

const mapStateToProps = (state, props) => ({
   collection: selectCollection(props.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);