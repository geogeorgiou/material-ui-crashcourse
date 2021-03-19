import React from 'react';

import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";


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
    },

    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em'
        }
    },

    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down('xs')]: {
            right: "0.6em"
        }
    }
}))

const Footer = (props) => {

    const classes = useStyles();

    return (
        <footer
            className={classes.footer}
        >
            <Hidden mdDown>
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
                                onClick={() => props.setValue(0)}
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
                                onClick={() => {
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
                                onClick={() => {
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
                                onClick={() => {
                                    props.setValue(1);
                                    props.setSelectedIndex(2)
                                }}
                                to="/mobileapps"
                            >
                                 iOS/Android App Development
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => {
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
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => props.setValue(2)}
                                to="/revolution"
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => props.setValue(2)}
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
                                onClick={() => props.setValue(3)}
                                to="/about"
                            >
                                About us
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => props.setValue(3)}
                                to="/about"
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                component={Link}
                                className={classes.link}
                                onClick={() => props.setValue(3)}
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
                            onClick={() => props.setValue(4)}
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
            </Hidden>

            <img
                alt="black decorative"
                src={footerAdornment}
                className={classes.adornment}
            />

            {/*watch carefully to use flexbox along with css properties*/}
            {/*here we use flexbox to align right and then use absolute positioning in CSS*/}
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="facebook logo" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img src={twitter} alt="twitter logo" className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="instagram logo" className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;