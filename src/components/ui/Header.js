import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";

const Header = () => {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" >
                    Arc Development
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;