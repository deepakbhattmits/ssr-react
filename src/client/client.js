// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const rootElement= document.querySelector("#root");
/*
** ReactDOM.hydrate() is same as render(),
** but it is used to hydrate(attach event listeners) a container whose HTML contents were rendered by ReactDOMServer.
** React will attempt to attach event listeners to the existing markup.
*/
ReactDOM.hydrate(<Home/>,rootElement);