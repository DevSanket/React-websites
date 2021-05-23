import React from "react";
import { Route } from "react-router";
import CollectionOverview from "../../components/collections-overview/collection-overview";
import CollectionPage from "../Collection/Collection";

const ShopPage = ({match}) => {
  return ( 
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
      </div>
   );
}




export default ShopPage;
