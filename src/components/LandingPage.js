import React from 'react';

import Lottie from 'react-lottie';
import {makeStyles} from "@material-ui/styles";
import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({

}));

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

export default function LandingPage() {

    return (
        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
    )
}
