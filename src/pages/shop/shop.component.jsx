import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWIthSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

   state = {
      loading: true
   };

   componentDidMount() {
      const { updateCollections } = this.props;

      const collectionRef = firestore.collection('collections');

      collectionRef.get().then((async snapshot => {
         const collectionsMap = await convertCollectionsSnapshotToMap(snapshot); // usar await?
         updateCollections(collectionsMap);
         this.setState({ loading: false });
      }));
   };

   render() {
      const { match } = this.props;
      const { loading } = this.state;
      return (
         <div>
            <Route
               exact
               path={`${match.path}`}
               render={(props) => <CollectionsOverviewWIthSpinner isLoading={loading} {...props} />}

            />
            <Route
               path={`${match.path}/:collectionId`}
               render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

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