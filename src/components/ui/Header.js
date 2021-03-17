import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";

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
        ...theme.mixins.toolbar
    }

}))

export default function Header(props) {

    const classes = useStyles();

    return (
        <>
            <ElevationScroll {...props}>
                <AppBar position="fixed" >
                    <Toolbar>
                        <Typography variant="h3">
                            Netu Development
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
}