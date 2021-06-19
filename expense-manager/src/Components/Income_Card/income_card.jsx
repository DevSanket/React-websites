import React, { Component } from 'react';
import './income_card.scss';
import FormInput from '../form-input/form-input';
import firebase from 'firebase';
import Income from '../../assets/Income.png'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import { connect } from 'react-redux';
import { firestore } from '../../Firebase/firebase.utils';

class Income_Card extends Component {
    state = { 
        money:'',
        reason:''
     }

     handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
      sendData = () => {
        const { money,reason} = this.state;
        const { currentUser} = this.props;
        if(!money || !reason){
              alert("Fill All Details");
              return;    
        }
        const userId = currentUser.id;
        const userDatabase = firestore.collection('expence_users').doc(userId).collection('Incomes');
        let myDate = firebase.firestore.FieldValue.serverTimestamp();
        try{
          userDatabase.add({
            money:money,
            reason :reason,
            Date: myDate
          });

          this.setState({
            money:'',
            reason:''
          })

         }catch(e){
          console.log('error adding Data to firebase', e.message);
         }
      }
    render() { 
        const { money,reason} = this.state;
        const { currentUser} = this.props;
        return ( 
            <div className="income_card">
                <div className="title">Add Income</div>
                <img src={Income} alt="logo" className="Image" />
          <div className="get-data">
            <div className="form-input">
              <FormInput
                type="number"
                name="money"
                value={money}
                onChange={this.handleChange}
                label="Money"
                required
              />
              <FormInput
                type="text"
                name="reason"
                value={reason}
                onChange={this.handleChange}
                label="Reason"
                required
              />
              <button
              onClick={this.sendData}
              type="button" className="btn-grad"
              disabled={!currentUser}
              >
            <div className="btn-text">Add Income</div>
          </button>
            </div>
          </div>
        </div>
        );
    }
}


const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
}); 

export default connect(mapStateToProps)(Income_Card);