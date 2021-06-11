// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
// import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
// import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <div>
      <About />
    </div>
  );
}

export default App;
