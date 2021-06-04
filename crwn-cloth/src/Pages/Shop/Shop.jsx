import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionOverview from "../../components/collections-overview/collection-overview";
import WithSpinner from "../../components/with-spinner/with-spinner";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/firebase.utils";
import { updateCollections } from "../../Redux/shop/shop.actions";
import CollectionPage from "../Collection/Collection";

const CollectionOverviewWithSpinner  = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner  = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //So complicated to get the data from firebase
    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-39f39/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections));

    //using promises
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false});
    });

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({loading:false});
    // });
  }
  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}  render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
        <Route path={`${match.path}/:categoryId`} component={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
      </div>
    );
  }
}

// const ShopPage = ({match}) => {
//   return (
//     <div className="shop-page">
//         <Route exact path={`${match.path}`} component={CollectionOverview}/>
//         <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
//       </div>
//    );
// }

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
