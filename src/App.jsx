import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/detail' element={<Detail />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
