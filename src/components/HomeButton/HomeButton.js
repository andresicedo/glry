import React from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './HomeButton.css';

export default function HomeButton() {
    return (
        <div>
            <Button className="homeButton" component={NavLink} to="/">
                Home
            </Button>
        </div>
    )
}
