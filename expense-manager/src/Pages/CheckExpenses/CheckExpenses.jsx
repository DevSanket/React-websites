import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selector";
import FormInput from "../../Components/form-input/form-input";
import "./CheckExpenses.scss";
import { db } from "../../Firebase/firebase.utils";
import EditIcon from "../../assets/edit-icon.png";
import DeleteButton from "../../assets/delete-button.png";
import firebase from "firebase";


const CheckExpense = ({ currentUser }) => {
  const [money, setMoney] = useState("");
  const [msg, setMsg] = useState("");
  const [Expence, SetExpence] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;
    // console.log(userId);
    // const userDatabase = firestore.collection('expence_users').doc(userId).collection('Incomes');
    db.collection("expence_users")
      .doc(userId)
      .collection("Expenses")
      .orderBy("Date", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        SetExpence(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            money: doc.data().money,
            reason: doc.data().reason,
            Date: doc.data().Date,
          }))
        );
      });
  }, []);

  return (
    <div className="check_expense">
      <div className="container">
        <div className="title">Your Expenses</div>
        <span className="line"></span>
        <div className="update-form">
          <FormInput
            type="number"
            name="money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            label="Money"
            required
          />
          <FormInput
            type="text"
            name="msg"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            label="Reason"
            required
          />
        </div>
        <div className="list-expense">
          {Expence.map((expense) => {
            // const IncomeDate =  String(income.Date.toDate()).substr(0,15);
            return (
              <div className="expense">
                <div className="expense-amount">₹ {expense.money}</div>
                <p className="expense-reason">Reason - : {expense.reason}</p>
                <div className="Icons">
                  <div className="date">
                    Due -{" "}
                    {expense.Date
                      ? String(expense.Date.toDate()).substr(0, 15)
                      : "Wait.."}
                  </div>
                  <div className="icon-buttons">
                    <button
                      className="collapse-button"
                      onClick={(e) => {
                        e.preventDefault();
                        const userId = currentUser.id;
                        // let myDate = firebase.firestore.FieldValue.serverTimestamp();
                        if (!msg || !money) {
                          alert("Fill Both Two Fields");
                          return;
                        }

                        db.collection("expence_users")
                          .doc(userId)
                          .collection("Expenses")
                          .doc(expense.id)
                          .set({
                            money: money,
                            Date: firebase.firestore.FieldValue.serverTimestamp(),
                            reason: msg,
                          });

                        setMsg("");
                        setMoney("");
                      }}
                    >
                      <img
                        onClick={() => {
                          const userId = currentUser.id;
                          db.collection("expence_users")
                            .doc(userId)
                            .collection("Expenses")
                            .doc(expense.id)
                            .delete();
                        }}
                        className="edit-icon"
                        src={EditIcon}
                        alt="Edit Icon"
                      />
                    </button>
                    <img
                      className="edit-icon"
                      src={DeleteButton}
                      alt="Edit Icon"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckExpense);
