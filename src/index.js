import "normalize.css";
import "./styles/main.sass";
import { h } from "dom-chef";
import { docSel } from "./app/components/form/helpers";
import App from "./app/App.js";

docSel("#root").appendChild(<App />);
