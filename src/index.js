import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navvbar from './Components/Navvbar';
// import Modern from './Modern';
// import Sty from './Sty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Navvbar/> */}
    {/* <Modern/> */}
    <App />
    {/* <Sty/> */}
    {/* <Helmet>
        <title>myntra</title>
        <link rel="icon" href="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" />
      </Helmet> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
