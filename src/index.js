import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from "./stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={ stores }>
      <Router>  
        <Container>
          <App />
        </Container>
      </Router>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
