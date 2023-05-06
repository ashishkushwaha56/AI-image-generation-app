import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import ImageGenerationForm from './components/Generator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes className="bg-[#fffaf0]">
          <Route path='/' element={<Home />} />
          <Route path='/generate' element = {<ImageGenerationForm/>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;