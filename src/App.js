
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Single from './pages/Single';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blog/:title" component={Single}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
