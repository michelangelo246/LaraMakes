import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';

const CollectionPage = ({collection: {title, items}, collection}) => (
   <div className="collection-page">
      <h2 className="title">{`${title}`}</h2>
      <div className="items">
         {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
         }
      </div>
   </div>
);

const mapStateToProps = (state, props) => ({
   collection: selectCollection(props.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);