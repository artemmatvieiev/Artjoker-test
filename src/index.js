import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

import './index.css';

const Root = (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
