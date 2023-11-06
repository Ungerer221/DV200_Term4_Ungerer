import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// goes in one of the indexes files 
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Serve the React app's 'index.html' for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// goes into the dependencies 
// },
// "buildpacks": [
//     { "url": "heroku/nodejs" },
//     { "url": "https://github.com/mars/create-react-app-buildpack" }
//   ]

// }

// backend and front end on heroku 
// for fire base you need backend on heroku
// front end goes on firebase
// can type heroku open or url to find site.
//  heroku is for front end and back 

// install heroku cli 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
