import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
const root = ReactDOM.createRoot(document.getElementById('root'));
  const tags=['fool','idiot','hoes']
root.render(

  <React.StrictMode>
    {/* <NameCard name='kingchongeng' isHuman tags={tags} number={1234567890} />
    <LikesButton />
    <DigitalClock /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
