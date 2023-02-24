import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./../pages/home/Home.js"
import Fareonozoico from "./../pages/farenozóico/Fareonozoico";
import Arqueano from "./../pages/arqueano/Arqueano";
import Hadeano from "./../pages/hadeano/Hadeano";
import Proterozoico from "./../pages/proterozoico/Proterozoico";
import Login from "./../pages/login/LoginPage";

const RoutingMap = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/farenozoico" element={<Fareonozoico />}> </Route>
        <Route path="/proterozoico" element={<Proterozoico />}> </Route>
        <Route path="/arqueano" element={<Arqueano />}> </Route>
        <Route path="/hadeano" element={<Hadeano />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>
  );
};

export default RoutingMap;
