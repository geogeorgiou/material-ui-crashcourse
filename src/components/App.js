import React from "react";
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from './ui/Theme';

function App() {

    return (
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={() => <p>Home page</p>}/>
                    <Route exact path="/services" component={() => <p>Services</p>}/>
                    <Route exact path="/customsoftware" component={() => <p>Custom Software</p>}/>
                    <Route exact path="/mobileapps" component={() => <p>Mobile Apps</p>}/>
                    <Route exact path="/websites" component={() => <p>Websites</p>}/>
                    <Route exact path="/revolution" component={() => <p>Revolution</p>}/>
                    <Route exact path="/about" component={() => <p>About us</p>}/>
                    <Route exact path="/contact" component={() => <p>Contact Us</p>}/>
                    <Route exact path="/estimate" component={() => <p>Estimate</p>}/>
                </Switch>
            </BrowserRouter>

        </ThemeProvider>
    );
}

export default App;
