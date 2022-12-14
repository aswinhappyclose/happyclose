import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/screens/home/Home';
import Close from './components/screens/close/Close';
import Blog from './components/screens/blog/Blog';
import Reconcile from './components/screens/reconcile/Reconsile';
import Analyze from './components/screens/analyze/Analyze';
import AboutUs from './components/screens/aboutUs/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/close" element={<Close/>}/>
        <Route path="/product/reconcile" element={<Reconcile/>}/>
        <Route path="/product/analyze" element={<Analyze/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
