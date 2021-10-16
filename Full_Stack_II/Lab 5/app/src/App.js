import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Student from './component/Student';
import history from './History';
import Redirect from './component/Redirect';

class App extends React.Component {
  render() { 
    return (
      <BrowserRouter history={history}>
          <div>
            <Navigation />
          </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/student/:studentname/:studentno?" component={Student} />
          <Route path="/redirect" component={Redirect} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;