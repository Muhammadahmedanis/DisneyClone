import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import store from './features/store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
            <Routes>
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
