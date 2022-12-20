import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";


ReactDOM.render(<App></App>, document.getElementById('root'));


// line:1,2- react library is responsible for creating views whereas ReactDOM library is responsible to actually render UI in the browser.
// line:3 - all the components which were imported into App component will get the index.css styling.
// line:4 - App is the parent component of all other components.
// line:5 - css styling will be applied to bootstrap classes.
//line: 6 - access to use font awesome icons in our components.
//line: 9 - the purpose of the ReactDom function is to display the specified HTML code (<App></App>) inside the specified HTML element(div with root id inside the index.html file).
// render function/method converts code into interactive pages i.e process of displaying data in a UI component.