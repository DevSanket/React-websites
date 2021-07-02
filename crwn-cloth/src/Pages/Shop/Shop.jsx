import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container";
import { fetchCollectionStart } from "../../Redux/shop/shop.actions";
import CollectionPageContainer from "../Collection/Collection.container";


const ShopPage = ({fetchCollectionStart,match}) =>  {
  useEffect(() => {
    fetchCollectionStart();
  },[fetchCollectionStart]);

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}  component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer} />
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart : () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
