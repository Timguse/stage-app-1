import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/navbar';
import Maincontainer from './components/maincontainer';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Maincontainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
