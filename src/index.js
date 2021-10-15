import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Maincontainer from './components/maincontainer';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Maincontainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
