import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalServices } from "./services/utils";

export function init() {
    return {
        stores: {},
        services: createGlobalServices(),
    };
}

export function render() {
    const { services } = init();

    return (
        <Provider services={services}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    );
}

ReactDOM.render(render(), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
