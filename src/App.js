import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './components/Nav';
import Main from './components/Main';
import Portfolio from './components/Portfolio';

import About from './components/About';
import Contact from './components/Contact';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div>
<React.Fragment>
  <Container fluid>
    <Router basename={process.env.PUBLIC_URL}>
<Navigation/>
<Switch>
<Route exact path="/" component={Main}/>
<Route path="/portfolio" component={Portfolio}/>
<Route path="/about" component={About}/>
<Route path="/about" component={Contact}/>
</Switch>
    </Router>
  </Container>
</React.Fragment>
    </div>
  );
}

export default App;
