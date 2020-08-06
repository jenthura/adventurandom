import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import StoryForm from '../StoryForm/StoryForm';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Story from '../Story/Story';


export default class App extends Component {
  state = { 
    pageId: 0, 
    hasError: false
  }

  render() {
    return (
      <div className='App'>
        <Header/>
          <Route exact path={'/'} component={Main} />
          <Route path={'/about'} component={About} />
          <Route path={'/story-form'} component={StoryForm} />
          <Route path={'/story'} component={Story} />
      </div>
    );
  }
}
