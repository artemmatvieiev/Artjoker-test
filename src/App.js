import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Modal } from './Modal';

import './App.css';

export const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Modal />
    </div>
  </MuiThemeProvider>
);
