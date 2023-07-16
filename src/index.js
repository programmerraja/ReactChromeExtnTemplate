import React from "react";
import ReactDOM from "react-dom/client";
import Home from './Pages/Home'

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
    position: fixed;
    right: 0;
    top: 0;
    width: 490px;
    height: 100vh;
    overflow: hidden;
    padding: 1rem;
    color: white;
    font-weight: bold;
    background: #000000c2;
    border-right: 1px solid #c2c2c2;
    z-index: 999999999;
    overflow-y:scroll;
    user-select: text;
    transition: width 1s, height 1s;
  }
`;
if(window.location.href.includes("meet.google.com") || window.location.href.includes("http://localhost:3000") ){
  document.body.appendChild(rootElement);
  document.body.appendChild(globalStyles);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
