import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
import LoginFormContainer from '../session_form/login_form_container'
import { openModal } from '../../actions/modal_actions';




const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <p className="dropdown">dropdown test</p> */}
            {/* <div> <SessionForm /> </div> */}
            <button className="user-button" onClick={() => openModal('login')}>Login</button>
            <button className="user-button" onClick={() => openModal('signup')}>SignUp </button>
            {/* <Link to="/login" className="greeting-login">Login</Link> */}
            {/* &nbsp;or&nbsp; */}
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}><Link to="/"> Log Out </Link></button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
