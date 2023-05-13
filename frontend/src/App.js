import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Homepage from "./components/Homepage";
import Clproject from "./components/Clproject";
import Flviewpro from "./components/Flviewpro"; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path ="/" element={<Homepage/>}/>
     <Route path ="/login" element={<Login/>}/>
     <Route path ="/signin" element={<Signin/>}/>
     <Route path ="/clproject" element={<Clproject/>}/>
    <Route path = "/flviewpro" element={<Flviewpro/>}/>

    </Routes>
    </BrowserRouter>
  );
}
export default App;