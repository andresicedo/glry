import React from 'react';
import './Navbar.css';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import HomeButton from '../HomeButton/HomeButton';
import navBG from '../../assets/images/navbg.png';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function Navbar() {
    return (
        <div className="navbarContainer" style={{backgroundImage: `url(${navBG})`, backgroundSize: 'cover'}}>
            <div className="navbarLeft">
                <Button 
                    component={NavLink} 
                    to="/" 
                    style={{
                        fontSize: '33px', 
                        fontFamily: 'Open Sans Condensed, sans-serif',
                        fontWeight: 'Bold'}}>
                            GLRY
                </Button>
            </div>
            <div className="navbarRight">
                <HomeButton />
                <Login />
                <SignUp />
            </div>
        </div>
    )
}
