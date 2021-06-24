import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { db } from "../../Firebase/firebase.utils";
import { selectCurrentUser } from "../../Redux/user/user.selector";
import "./all_transaction.scss";

const AllTransaction = ({ currentUser }) => {
  const [Income, SetIncome] = useState([]);
  const [Expense, SetExpense] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;

    db.collection("expence_users")
      .doc(userId)
      .collection("Incomes")
      .orderBy("Date", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        SetIncome(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            money: doc.data().money,
            reason: doc.data().reason,
            Date: doc.data().Date,
          }))
        );
      });

    db.collection("expence_users")
      .doc(userId)
      .collection("Expenses")
      .orderBy("Date", "desc")
      .onSnapshot((snapshot) => {
        SetExpense(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            money: doc.data().money,
            reason: doc.data().reason,
            Date: doc.data().Date,
          }))
        );
      });
  });

  return (
    <div className="all_transaction">
      <div className="title">
        <h2 className="heading">ALL TRANSACTIONS</h2>
      </div>
      <span className="line"></span>
      <div className="income_and_expense">
        <div className="income-card">
          <div className="inside-title">Your Income</div>
          <span className="line-text"></span>
          <div className="list-income">
            {Income.map((income) => {
              return (
                <div className="income-data" key={income.id}>
                  <div className="money">₹ {income.money}</div>
                  <div className="date">

                    {income.Date
                      ? String(income.Date.toDate()).substr(0, 15)
                      : "Wait.."}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="expense-card">
          <div className="inside-title">Your Expense</div>
          <span className="line"></span>
          <div className="list-expense">
          {Expense.map((expense) => {
              return (
                <div className="income-data" key={expense.id}>
                  <div className="money">₹ {expense.money}</div>
                  <div className="date">

                    {expense.Date
                      ? String(expense.Date.toDate()).substr(0, 15)
                      : "Wait.."}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AllTransaction);
