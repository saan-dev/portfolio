import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'antd/dist/antd.css';
import App from './App';
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});
ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Route
        component={({ history }) => {
          window.appHistory = history;
          return <App />;
        }}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

