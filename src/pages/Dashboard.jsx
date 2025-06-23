import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Dashboard(props) {
    useEffect(() => {
        // axios.then(setMembers)
        //     .catch(err => console.error(err.toJSON()));
    }, []); // empty dependencies array means this only runs on mount

    return (
        <div>Dashboard</div>
    );
}

export default Dashboard;
