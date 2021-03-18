import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";
import {Tabs, Tab, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

import {Menu, MenuItem} from "@material-ui/core"

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const {children} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

//solves the toolbar overflowing over text issue
const useStyles = makeStyles(theme => ({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },

    logo: {
        height: '8em'
    },

    logoContainer: {
        padding: 0,
        "&:hover": {
            "backgroundColor": 'transparent'
        }
    },

    tabContainer: {
        marginLeft: "auto"
    },

    //abstracting logic of tab into the theme!
    //fast re-usability expose feature!!!
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },

    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px"
    },

    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: 0
    },

    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }

}))

const tabConfig = [
    {pathname: '/', value: 0},
    {pathname: '/services', value: 1},
    {pathname: '/revolution', value: 2},
    {pathname: '/about', value: 3},
    {pathname: '/contact', value: 4},
    {pathname: '/estimate', value: 5},
]

export default function Header(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    //basically check when user refreshes the page set the correct active tab
    //if not set it via custom way
    useEffect(() => {

        for (let i = 0; i <= 5; i++) {

            if (window.location.pathname === tabConfig[i].pathname && value !== tabConfig[i].value) {
                setValue(i);
                return;
            }

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <>
            <ElevationScroll {...props}>
                <AppBar position="fixed" >
                    <Toolbar disableGutters={true}>

                        <Button
                            component={Link}
                            to={"/"}
                            className={classes.logoContainer}
                            onClick={()=>setValue(0)}
                            disableRipple
                        >
                            <img
                                src={logo}
                                alt="company logo"
                                className={classes.logo}
                            />
                        </Button>

                        <Tabs
                            value={value}
                            className={classes.tabContainer}
                            onChange={handleChange}
                            indicatorColor="primary"
                        >
                            <Tab
                                className={classes.tab}
                                component={Link}
                                to={'/'}
                                label="Home"
                            />

                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                onClick={event => handleClick(event)}
                                className={classes.tab}
                                component={Link}
                                to={'/services'}
                                label="Services"
                            />

                            <Tab
                                className={classes.tab}
                                component={Link}
                                to={'/revolution'}
                                label="The Revolution"
                            />

                            <Tab
                                className={classes.tab}
                                component={Link}
                                to={'/about'}
                                label="About us"
                            />

                            <Tab
                                className={classes.tab}
                                component={Link}
                                to={'/contact'}
                                label="Contact us"
                            />
                        </Tabs>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Free Estimate
                        </Button>

                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                            classes={{paper: classes.menu}}

                            //important we can set props on nested items
                            MenuListProps={{onMouseLeave: handleClose}}

                            elevation={0}
                        >
                            <MenuItem
                                onClick={() => {handleClose(); setValue(1)}}
                                component={Link}
                                to="/services"
                                classes={{root: classes.menuItem}}
                            >
                                Services
                            </MenuItem>

                            <MenuItem
                                onClick={() => {handleClose(); setValue(1)}}
                                component={Link}
                                to="/customsoftware"
                                classes={{root: classes.menuItem}}
                            >
                                Custom Software Development
                            </MenuItem>

                            <MenuItem
                                onClick={() => {handleClose(); setValue(1)}}
                                component={Link}
                                to="/mobileapps"
                                classes={{root: classes.menuItem}}
                            >
                                Mobile Development
                            </MenuItem>

                            <MenuItem
                                onClick={() => {handleClose(); setValue(1)}}
                                component={Link}
                                to="/websites"
                                classes={{root: classes.menuItem}}
                            >
                                Website Development
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}