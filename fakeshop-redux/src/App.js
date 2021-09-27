import { Route, Router, Switch } from "react-router";
import "./App.css";
import Header from "./Container/Header";
import ProductDetails from "./Container/ProductDetails";
import ProductListing from "./Container/ProductListitem";

function App() {
  return (
    <div className="App">
      
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
 
    </div>
  );
}

export default App;
