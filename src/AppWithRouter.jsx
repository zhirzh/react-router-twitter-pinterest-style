import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './App';

function AppWithRouter() {
  return (
    <Router basename="/react-router-twitter-pinterest-style">
      <Route component={App} />
    </Router>
  );
}

export default AppWithRouter;
