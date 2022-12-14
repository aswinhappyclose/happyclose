import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/screens/home/Home';
import Close from './components/screens/close/Close';
import Blog from './components/screens/blog/Blog';
import Reconcile from './components/screens/reconcile/Reconsile';
import Analyze from './components/screens/analyze/Analyze';
import AboutUs from './components/screens/aboutUs/AboutUs';

const Outlet=()=>{
return(
    <>
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
    </>
)
}
export default Outlet