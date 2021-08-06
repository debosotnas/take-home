import "normalize.css";
import "./styles/main.sass";

import { h } from "dom-chef";
import App from "./app/App.js";

document.querySelector("#root").appendChild(<App />);
