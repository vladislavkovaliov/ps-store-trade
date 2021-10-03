import React from "react";
import { LoginScreen } from "./screens";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";

import "./App.css";
import { Assets } from "./components";

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
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}
export default App;
