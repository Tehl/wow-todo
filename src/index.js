import { h, render } from "preact";
import App from "./components/App";
import taskData from "./data/shadowlands";

import "./index.css";

const mountNode = document.getElementById("root");

render(<App taskData={taskData} />, mountNode, mountNode.lastChild);
