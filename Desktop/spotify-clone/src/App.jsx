import { useState } from 'react'

import './App.css'
import React from'react';
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Login"

export default App

import './App.css';

import Main from './components/Main.jsx'
import LeftSidebar from './components/LeftSidebar.jsx'
import RightSidebar from './components/RightSidebar.jsx'
import 'remixicon/fonts/remixicon.css';


function App() {
  return (
    <div className="App">
      <LeftSidebar />
      <Main />
      <RightSidebar />

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;