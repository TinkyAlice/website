import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Geschichte from './components/Geschichte';
import Home from './components/Home';

import React from 'react';
//import { Routes } from 'react-router';
import ReactDOM from "react-dom";
import {Routes,Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
      </div>
      <div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Geschichte' element= {<Geschichte/>}/>

        </Routes>

      </div>
    </div>
  );
}

export default App;
