import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);

  return (
    <Router>
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
