import React from 'react';
import './Navbar.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import HomeButton from '../HomeButton/HomeButton';
import navBG from '../../assets/images/navbg.png';

export default function Navbar() {
    return (
        <div className="navbarContainer" style={{backgroundImage: `url(${navBG})`, backgroundSize: 'cover'}}>
            <div className="navbarLeft">
                GLRY
            </div>
            <div className="navbarRight">
                <HomeButton />
                <Login />
                <SignUp />
            </div>
        </div>
    )
}
