import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./components/Index";


class App extends Component {
  render() {
  return (
    <div className="App">
       <Router>
       <Route exact path="/" component={Index} />
    <Route exact path="/Footer" component={Footer} />
    <Route exact path="/Header" component={Header} />
    <Route exact path="/Content" component={Content} />
    <Route exact path="/Logout" component={Logout} />
        </Router>  
       
    </div>
  );
}
}

export default App;
