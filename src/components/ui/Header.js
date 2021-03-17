import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";
import {Tabs, Tab, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

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
        height: '7em'
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
    }

}))

export default function Header(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    return (
        <>
            <ElevationScroll {...props}>
                <AppBar position="fixed" >
                    <Toolbar disableGutters={true}>
                        <img
                            src={logo}
                            alt="company logo"
                            className={classes.logo}
                        />
                        <Tabs
                            value={value}
                            className={classes.tabContainer}
                            onChange={handleChange}
                            indicatorColor="primary"
                        >
                            <Tab className={classes.tab} component={Link} to={'/'} label="Home"/>
                            <Tab className={classes.tab} component={Link} to={'/services'} label="Services"/>
                            <Tab className={classes.tab} component={Link} to={'/revolution'} label="The Revolution"/>
                            <Tab className={classes.tab} component={Link} to={'/about'} label="About us"/>
                            <Tab className={classes.tab} component={Link} to={'/contact'} label="Contact us"/>
                        </Tabs>

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                        >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}