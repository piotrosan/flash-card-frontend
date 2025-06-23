import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import {Link, MenuList} from "@mui/material";
import TestKnowledge from "../pages/TestKnowledge";
import {Navigate, useNavigate} from 'react-router-dom';

function Navbar(props) {
    let navigate = useNavigate();

    const onFlashCard = (event) => {
        navigate('/test-knowledge');
    };


    return (
        <MenuList>
            <MenuItem>
                <Link
                    component="button"
                    variant="body2"
                    onClick={onFlashCard}>
                </Link>
            </MenuItem>
        </MenuList>
    );
}

export default Navbar;
