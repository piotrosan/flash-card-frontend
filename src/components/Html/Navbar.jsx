import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

function Navbar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <Menu
            keepMounted
            // anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}>
            <MenuItem onClick={handleClose}>

            </MenuItem>
            <MenuItem onClick={handleClose}>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Logout
            </MenuItem>
        </Menu>
    );
}

export default Navbar;
