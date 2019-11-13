import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import City from './pages/City';
import Add from './pages/Add';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:city" component={City} />
        <Route exact path="/add" component={Add} />
        <Route
          path='/not-found'
          component={NotFound}
        />
        <Redirect to='/not-found' />
      </Switch>
  )
}
