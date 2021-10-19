import "reflect-metadata";
import * as React from "react";
import * as ReactDom from "react-dom";
import "./assets/index.css";
import { App } from "./component/App";

ReactDom.render(<App />, document.getElementById("root"));
