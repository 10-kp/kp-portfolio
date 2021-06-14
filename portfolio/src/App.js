import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='App-header'>
          <Header />
        </div>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Portfolio} />
          <Route path='/resume' component={Contact} />
        </Switch>

        {/* <div className='About'>
        <About/>
      </div> */}

        {/* <div className='Portfolio'>
        <Portfolio/>
      </div> */}

        {/* <div className='Contact'>
        <Contact/>
      </div> */}
      </div>
    </Router>
  );
}

export default App;
