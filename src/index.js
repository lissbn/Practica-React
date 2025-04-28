// En esta seccion Index se crea root  para crear el documento

import React from 'react'; // importa react
import ReactDOM from 'react-dom/client'; // importreactdom
import './index.css'; // importa formato de index
import App from './App'; // importa App
import reportWebVitals from './reportWebVitals'; // importa reportwebvital
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root')); // creat constante root

root.render( // ejecuta lo que hay en root para mostrarlo
  <React.StrictMode>
    <App2 /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();