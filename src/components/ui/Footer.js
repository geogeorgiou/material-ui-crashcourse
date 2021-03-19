import React from 'react';

import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },

    adornment: {
        width: '25em',
        verticalAlign: 'bottom', //used to align photos!!!,
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },

    mainContainer: {
        position: "absolute"
    },

    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },

    gridItem: {
        margin: '3em'
    }
}))

const Footer = (props) => {

    const classes = useStyles();

    return (
        <footer
            className={classes.footer}
        >
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(0)}
                            to="/"
                        >
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=> {
                                props.setValue(1);
                                props.setSelectedIndex(0)
                            }}
                            to="/services"
                        >
                            Services
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=> {
                                props.setValue(1);
                                props.setSelectedIndex(1)
                            }}
                            to="/customsoftware"
                        >
                            Custom Software Development
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=> {
                                props.setValue(1);
                                props.setSelectedIndex(2)
                            }}
                            to="/mobileapps"
                        >
                            Mobile App Development
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=> {
                                props.setValue(1);
                                props.setSelectedIndex(3)
                            }}
                            to="/websites"
                        >
                            Websites
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(2)}
                            to="/revolution"
                        >
                            The Revolution
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(2)}
                            to="/revolution"
                        >
                            Vision
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(2)}
                            to="/revolution"
                        >
                            Technology
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(2)}
                            to="/revolution"
                        >
                            Process
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                    >
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(3)}
                            to="/about"
                        >
                            About us
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(3)}
                            to="/about"
                        >
                            History
                        </Grid>
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            onClick={()=>props.setValue(3)}
                            to="/about"
                        >
                            Team
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                        onClick={()=>props.setValue(4)}
                    >
                        <Grid
                            item
                            component={Link}
                            className={classes.link}
                            to="/contact"
                        >
                            Contact us
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            <img
                alt="black decorative"
                src={footerAdornment}
                className={classes.adornment}
            />
        </footer>
    )
}

export default Footer;