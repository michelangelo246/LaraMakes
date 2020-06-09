import React from 'react';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
   <CollectionsOverviewContainer>
      {
         collections.map(({ id, ...collectionProps }) => (
            <CollectionPreview
               key={id}
               {...collectionProps}
            />
         ))
      }
   </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);