import React from "react";
import { LoginScreen, MainScreen, SellScreen } from "./screens";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import "./App.css";
import { Assets } from "./components";
import { MenuBar } from "./modules";

function App() {
    return (
        <>
            <Assets />
            <Router>
                <AnimationApp />
            </Router>
        </>
    );
}

export function AnimationApp() {
    let location = useLocation();

    return (
        <TransitionGroup className="relative">
            <CSSTransition key={location.key} classNames="fade" timeout={250}>
                <Switch location={location}>
                    <Route
                        exact
                        path="/login"
                        children={
                            <div className="fill">
                                <LoginScreen />
                            </div>
                        }
                    />
                    <Route
                        exact
                        path="/"
                        children={
                            <div className="fill">
                                <div className="flex">
                                    <MenuBar />
                                    <MainScreen />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        exact
                        path="/sell"
                        children={
                            <div className="fill">
                                <div className="flex">
                                    <MenuBar />
                                    <SellScreen />
                                </div>
                            </div>
                        }
                    />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}
export default App;
