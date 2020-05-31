import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends Component {
   componentDidMount() {
      const { fetchCollectionsStart } = this.props;

      fetchCollectionsStart();
   };

   render() {
      const { match } = this.props;
      return (
         <div>
            <Route
               exact
               path={`${match.path}`}
               component={CollectionsOverviewContainer}
            />
            <Route
               path={`${match.path}/:collectionId`}
               component={CollectionPageContainer}
            />
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);


/* using observer like pattern from firebase
unsubscribeFromSnapshot = null;

componentDidMount() {
   const { updateCollections } = this.props;

   const collectionRef = firestore.collection('collections');

   this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot); // usar await?
      updateCollections(collectionsMap);
      this.setState({ loading: false });
   });
};

componentWillUnmount() {
   this.unsubscribeFromSnapshot();
}
*/