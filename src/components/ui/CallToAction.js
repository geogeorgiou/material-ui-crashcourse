import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        },
    },

    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },

    estimateButton : {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0
        }
    }
}))

const CallToAction = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid
            container
            alignItems="center"
            justify={matchesSM ? "center" : "space-between"}
            style={{height: '60em'}}
            className={classes.background}
            direction={matchesSM ? "column" : "row"}
        >
            <Grid item style={{
                marginLeft:  matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : "inherit"
            }}>

                <Grid container direction="column">

                    <Grid item>
                        <Typography variant="h2">Simple Software. <br/>Revolutionary</Typography>
                        <Typography variant="subtitle2" style={{fontSize: '1.5rem'}}>Take advantage of 21st century</Typography>
                    </Grid>

                </Grid>
                <Grid container justify={matchesSM ? "center" : undefined}>

                    <Grid item>
                        <Button
                            className={classes.learnButton}
                            variant="outlined"
                        >
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item >

                <Button variant="contained" className={classes.estimateButton}>
                    Free Estimate
                </Button>

            </Grid>

            {/*<div className={classes.background}></div>*/}

        </Grid>
    );
}

export default CallToAction;