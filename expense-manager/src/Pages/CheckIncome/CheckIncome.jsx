import React, { useState } from "react";
import "./CheckIncome.scss";
import EditIcon from "../../assets/edit-icon.png";
import DeleteButton from "../../assets/delete-button.png";
import FormInput from "../../Components/form-input/form-input";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../Redux/user/user.selector";
import { connect } from "react-redux";
import { useEffect } from "react";
import firebase from "firebase";
import { db } from "../../Firebase/firebase.utils";
const CheckIncome = ({ currentUser }) => {
  // const [open, setOpen] = useState(false);
  const [money, setMoney] = useState("");
  const [msg, setMsg] = useState("");
  const [Income, SetIncome] = useState([]);

  useEffect(() => {
    const userId = currentUser.id;
    // console.log(userId);
    // const userDatabase = firestore.collection('expence_users').doc(userId).collection('Incomes');
    db.collection("expence_users")
      .doc(userId)
      .collection("Incomes")
      .orderBy("Date", "desc")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        SetIncome(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            money: doc.data().money,
            reason: doc.data().reason,
            Date: doc.data().Date,
          }))
        );
      });
  });

  // console.log(Income);

  return (
    <div className="check_Income">
      <div className="container">
        <div className="title">Your Incomes</div>
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
        <div className="list-income">
          {Income.map((income) => {
            // const IncomeDate =  String(income.Date.toDate()).substr(0,15);
            return (
              <div className="income" key={income.id}>
                <div className="income-amount">₹ {income.money}</div>
                <p className="income-reason">Reason - : {income.reason}</p>
                <div className="Icons">
                  <div className="date">
                    Due -{" "}
                    {income.Date
                      ? String(income.Date.toDate()).substr(0, 15)
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
                          .collection("Incomes")
                          .doc(income.id)
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
                            .collection("Incomes")
                            .doc(income.id)
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

export default connect(mapStateToProps)(CheckIncome);
