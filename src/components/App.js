import React, {useState} from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./LandingPage";

import theme from './ui/Theme';

function App() {

    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <ThemeProvider theme={theme}>

            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}/>

                <Switch>
                    <Route exact path="/"
                           render={props =>
                               <LandingPage
                                   {...props}
                                   setValue={setValue}
                                   setSelectedIndex={setSelectedIndex}
                               />
                           }
                    />
                    <Route exact path="/services" component={() => <p>Services</p>}/>
                    <Route exact path="/customsoftware" component={() => <p>Custom Software</p>}/>
                    <Route exact path="/mobileapps" component={() => <p>Mobile Apps</p>}/>
                    <Route exact path="/websites" component={() => <p>Websites</p>}/>
                    <Route exact path="/revolution" component={() => <p>Revolution</p>}/>
                    <Route exact path="/about" component={() => <p>About us</p>}/>
                    <Route exact path="/contact" component={() => <p>Contact Us</p>}/>
                    <Route exact path="/estimate" component={() => <p>Estimate</p>}/>
                </Switch>

                <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>

            </BrowserRouter>

        </ThemeProvider>
    );
}

export default App;
