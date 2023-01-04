import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/screens/home/Home";
// import Close from "./components/screens/product/Product.js";
// import Blog from "./components/screens/blog/Blog";
// import AboutUs from "./components/screens/aboutUs/AboutUs";
import ScheduleDemo from "./components/screens/scheduleDemo/ScheduleDemo";
import { ToastContainer } from "react-toastify";
import "./components/themes/css/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Close />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} /> */}
       <Route path="/scheduledemo" element={<ScheduleDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
