import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
//import Card from "./components/cards/Card";
//import Form from "./components/form/Form";
// import ShowList from "./components/showList/ShowList";
// import { useState } from "react";
// import MyName from "./components/myName/MyName";
// import Saudacao from "./components/saudacao/Saudacao";
import Home from "./pages/home/Home.js"
import Fareonozoico from "./pages/farenozóico/Fareonozoico";
import Arqueano from "./pages/arqueano/Arqueano";
import Hadeano from "./pages/hadeano/Hadeano";
import Proterozoico from "./pages/proterozoico/Proterozoico";
import Footer from "./components/footer/Footer";

function App() {
  return (    
    <>   
    <Router>      
    <Navbar></Navbar>      
      <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route path="/farenozoico" element={<Fareonozoico/>}> </Route>
        <Route path="/proterozoico" element={<Proterozoico/>}> </Route>
        <Route path="/arqueano" element={<Arqueano/>}> </Route>
        <Route path="/hadeano" element={<Hadeano/>}> </Route>
      </Routes>
      <Footer></Footer>
      
    </Router>
    </>
  );
}

export default App;
