import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RenderImages from '../../components/RenderImages/RenderImages';
import AccountFacts from '../../components/AccountFacts/AccountFacts';

export default function UserProfile() {
    return (
        <div>
            <Navbar />
            <AccountFacts />
            <RenderImages />
        </div>
    )
}
