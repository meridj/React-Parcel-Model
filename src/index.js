/**
 * Packages
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Styles
 */
import './styles/reset.css';
import './styles/index.css';

const App = () => <h1>React-Parcel-Model</h1>;
const targetRootNode = document.getElementById('root');

ReactDOM.render(<App />, targetRootNode);
