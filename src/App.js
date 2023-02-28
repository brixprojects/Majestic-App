import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from"./components/Header";
import About from "./pages/About";
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';

function App() {
  return (
   <Router>
    <div className="App">
      <Header/>
      <ToastContainer/>
        <Routes>
        <Route path="/" element={<Home />}></Route> 
        <Route path ="/add" element={<AddEdit />}></Route>
        <Route path ="/update/:id" element={<AddEdit />}></Route>
        <Route path ="/view/:id" element={<View />}></Route>
        <Route path ="/about" element={<About />}></Route>
        </Routes>
      </div>
      </Router>
  );
};

export default App;
 