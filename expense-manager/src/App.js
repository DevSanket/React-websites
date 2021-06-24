import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AddData from "./Pages/AddData/AddData";
import Header from "./Components/Header/Header";
import SeeGoals from "./Components/ShowGoals/ShowGoals";
import HomePage from "./Pages/HomePage/Homepage";
import Register from "./Pages/Register/Register";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/user/user.selector";
import { setCurrentUser } from "./Redux/user/user.actions";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./Firebase/firebase.utils";
import { Redirect } from "react-router-dom";
import CheckIncome from "./Pages/CheckIncome/CheckIncome";
import CheckExpenses from "./Pages/CheckExpenses/CheckExpenses";
import AllTransaction from "./Pages/AllTransactions/all_transaction";

class App extends Component {
  state = {
    currentUser : null
  };

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          })
        });

      }

      setCurrentUser(userAuth);

    }); 

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="MainPage holder">
        <div className="app ">
          <Header />
        </div>
        <div className="containers">
          <Switch>
            <Route path="/register" render={
              () => this.props.currentUser ? ( <Redirect to="/"/>) :
              (<Register />)
            } />
            <Route path="/addData" component={AddData} />
            <Route path="/myIncome" component={CheckIncome} />
            <Route path="/myExpense" component={CheckExpenses} />
            <Route path="/AllTransaction" component={AllTransaction} />
            <Route
              exact
              path="/"
              render={() => (
                <div className="containers">
                  <div className="home-page">
                    <HomePage />
                  </div>
                  <div className="see-goals">
                    <SeeGoals />
                  </div>
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}



const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
});

const mapDispatchProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps,mapDispatchProps)(App);


