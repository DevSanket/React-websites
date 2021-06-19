import React, { useState } from "react";
import "./CheckIncome.scss";
import Collapse from "react-bootstrap/Collapse";
import EditIcon from "../../assets/edit-icon.png";
import DeleteButton from "../../assets/delete-button.png";
import FormInput from "../../Components/form-input/form-input";
const CheckIncome = () => {
  const [open, setOpen] = useState(false);
  const [money,setMoney] = useState('');
  const [msg,setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name(value);
    // this.setState({ [name]: value });
  };

  return (
    <div className="check_Income">
      <div className="container">
        <div className="title">Your Incomes</div>
        <span className="line"></span>
        <div className="list-income">
          <div className="income">
            <div className="income-amount">₹ 20,000</div>
            <p className="income-reason">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              recusandae voluptate consequatur. Corporis quas qui, ullam iste
              quisquam vitae veniam suscipit, incidunt nam consequuntur eveniet
              quibusdam libero dolorem autem ipsa! Deleniti neque temporibus
              odit unde? Hic dolorem praesentium temporibus, sint rem aspernatur
              ex corporis quis nulla dolor molestias vero voluptatibus.
            </p>
            <div className="Icons">
              <div className="date">Due - 24 March 2021</div>
              <div className="icon-buttons">
                <button
                className="collapse-button"
                 onClick={() => setOpen(!open)}
                 aria-controls="update-button"
                 aria-expanded={open}
                >
                <img className="edit-icon"
                 src={EditIcon} alt="Edit Icon" 
                 />
                </button>
                <img className="edit-icon" src={DeleteButton} alt="Edit Icon" />
              </div>
            </div>
            <Collapse in={open}>
        <div >
        <div className="update-form" >
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

            <button className="btn btn-success">
              <p className="text">Success</p>
            </button>
              </div>
        </div>
      </Collapse>
            {/* <Collapse in={open}>
             
            </Collapse> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIncome;
