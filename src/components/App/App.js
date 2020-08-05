import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import StoryForm from '../StoryForm/StoryForm';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Story from '../Story/Story';


export default class App extends Component {
  state = { 
    hasError: false
  }

  handleClickBegin = () => {
    console.log('Begin clicked')
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Route exact path={'/'} onClickBegin={this.handleClickBegin} component={Main} />
        <Route path={'/about'} component={About} />
        <Route path={'/story-form'} component={StoryForm} />
        <Route path={'/story'} component={Story} />
      </div>
    );
  }
}
