import React from 'react';
import './Navbar.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                GLRY
            </div>
            <div className="navbarRight">
                <Login />
                <SignUp />
            </div>
        </div>
    )
}
