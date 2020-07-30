import React, { Component } from 'react';
import CharApiService from '../../services/char-api-service';
import CharContext from '../../contexts/CharContext'

export default class CharList extends Component {

  static contextType = CharContext

  componentDidMount() {
    CharApiService.getChar(1)
      .then(this.context.setChar)
      .catch(this.context.setError)
  }

  render() {
    const { char } = this.context
    console.log(char.class_name)
    return <div><p>Hey! {char.class_name}</p></div>
  }
}
