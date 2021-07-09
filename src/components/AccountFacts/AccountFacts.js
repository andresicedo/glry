import React from 'react';
import './AccountFacts.css';
import { Avatar } from '@material-ui/core';
import UserImg from '../../assets/images/img1.JPG';


export default function AccountFacts() {
    return (
        <div>
            <div className="username">
                <Avatar className="userAvatar"><img src={UserImg} alt="user" style={{width: '120px', height: 'auto'}}/></Avatar>
                <div>
                    <p style={{fontSize: '45px'}}>@andresicedo</p>
                    <div className="facts">
                        <p>Images: 9</p>
                        <p>Albums: 1</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
