import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/' render={() => <Redirect to="/home" />} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
