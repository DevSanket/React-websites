import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import './Homepage.scss';
import Money from '../../assets/money.png';
import AllTransactions from '../../assets/allTransactions.png';
import CheckSavings from '../../assets/checking-savings.png';
import ExpenseChecking from '../../assets/expense-checking.png';
import Savings from '../../assets/savings.png';
import Goals from '../../assets/Goals.png';



class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="homepage">
                <div className="cards-container" >
                    <Card title={"ADD EXPENSE"} imgUrl={Money} Links="/addData" />
                    <Card title={"ADD EARNINGS"} imgUrl={Savings} Links="/addData" />
                    <Card title={"SEE EXPENSES"} imgUrl={ExpenseChecking} Links="/addData" />
                    <Card title={"SEE INCOMES"} imgUrl={CheckSavings} Links="/myIncome"/>
                    <Card title={"ALL TRANSACTIONS"} imgUrl={AllTransactions} Links="/"/>
                    <Card title={"MY GOALS"} imgUrl={Goals} Links="/"/>
                </div>
                
            </div>
         );
    }
}
 
export default HomePage;