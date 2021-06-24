import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../Firebase/firebase.utils';
import { selectCurrentUser } from '../../Redux/user/user.selector';
import './Header.scss';


const Header = ({currentUser}) => {
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
                <h3 className='logo'>Expense Manager</h3>
            </Link>
            <div className="options">
                <Link to="/" className="option">
                  {
                    currentUser ? <div className="option">{`Hello, ${currentUser.displayName}..`}</div> : <div className="option">Hello,User</div>
                  }
                </Link>
                <Link to="/addData" className="option">
                  Add (Expenses/Earnings)
                </Link>
                {/* <Link to="/" className="option">
                  Earnings
                </Link> */}
                {/* <Link to="/" className="option">
                  Money Goals
                </Link> */}
                <Link to="/alltransaction" className="option">
                  All Transaction
                </Link>
                <Link to="/register" className="option">
                 {
                   currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link to="/register">SIGN IN</Link>
                 }
                </Link>

            </div>
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
});

export default connect(mapStateToProps)(Header);
 
// export default Header;