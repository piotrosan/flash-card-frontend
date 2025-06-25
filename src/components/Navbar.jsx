import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Navbar(props) {
    let navigate = useNavigate();

    const onFlashCard = (event) => {
        navigate('/test-knowledge');
    };

    const onDashboard = (event) => {
        navigate('/dashboard');
    };


    return (
        <div></div>
    );
}

export default Navbar;
