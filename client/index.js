import React from "react";
import { ReactDOM } from "react-dom";
import "./index.css";
import App from ".App";
ReactDOM.render(
    <Browser.Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Browser.Router>,
    document.getElementById("root")
);