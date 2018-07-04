import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import Cities from "./js/cities";

document.addEventListener("DOMContentLoaded", () => {
    var root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
    window.Cities = Cities;
});