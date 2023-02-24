import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar/Navbar";
//import Card from "./components/cards/Card";
//import Form from "./components/form/Form";
// import ShowList from "./components/showList/ShowList";
// import { useState } from "react";
// import MyName from "./components/myName/MyName";
// import Saudacao from "./components/saudacao/Saudacao";
import RoutingMap from "./Routes/RoutingMap.js"
import Footer from "./components/footer/Footer";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";

function App() {
  return (    
      <BrowserRouter>
        <Navbar></Navbar>
        <RoutingMap />
        <Footer></Footer>
      </BrowserRouter>    
  );
}

export default App;
