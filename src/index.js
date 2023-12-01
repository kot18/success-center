import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

//В "методе" ReactDOM.render сначала передаём то, что хотим отрисовать, а вторым параметром блок в который хотим вставить новый элемент

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);