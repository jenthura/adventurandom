import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CharList from '../../routes/Char/CharList';
import Header from '../Header/Header';

export default class App extends Component {
  state = { hasError: false }

  render() {
    return (
      <div className='App'>
          <Switch>
            <Route exact path={'/'} component={Header} />
            <Route exact path={'/char'} component={CharList} />
            {/* <Route
              path={'/char/:id/attacks'}
              component={Attacks}
            />
            <Route
              path={'/char/:id/hitpoints'}
              component={Hitpoints}
            />
            <Route
              component={NotFoundPage}
            /> */}
          </Switch>
      </div>
    );
  }
}
