import React from 'react'
import homeImg from '../../assets/images/homeimg.png';

export default function HomeBody() {
    return (
        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '20vh'}}>
            <div>
                <img src={homeImg} alt="site logo"/>
            </div>
            <p style={{fontSize: '30px'}}>Your Perspective.</p>
        </div>
    )
}
