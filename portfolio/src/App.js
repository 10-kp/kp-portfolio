import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <ScrollToTop />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/project' component={Projects} /> */}
          <Route path='/about' component={About} />
          {/* <Route path='/resume' component={Resume} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
