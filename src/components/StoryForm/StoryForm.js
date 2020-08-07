import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import back from '../../img/back_button.png';
import './StoryForm.css';
import StoryContext from '../../contexts/StoryContext';

export default class StoryForm extends Component {
  static contextType = StoryContext;

  handleSubmit = () => {
    this.props.history.push('/story');
  };

  render() {
    const {
      setDungeonLoca,
      setNumberOfEncounters,
      setCharName,
      setCharClass,
    } = this.context;

    return (
      <div>
        <div className='container form'>
          <fieldset>
            <legend>Customise your adventure!</legend>
            <form onSubmit={this.handleSubmit} id='storyForm'>
              <label htmlFor='dungeonLoca'>Choose a location</label>
              <select
                id='dungeonLoca'
                name='dungeonLoca'
                onChange={(e) => setDungeonLoca(e.target.value)}
                required
              >
                <option></option>
                <option value='Castle'>Castle</option>
                <option value='Graveyard'>Graveyard</option>
                <option value='Dungeon'>Dungeon</option>
                <option value='Forest'>Forest</option>
              </select>
              <label>Number of encounters</label>
              <input
                type='number'
                min={1}
                max={10}
                onChange={(e) => setNumberOfEncounters(e.target.value)}
                required
              ></input>
              <label htmlFor='name'>Character Name</label>
              <input
                type='text'

                onChange={(e) => setCharName(e.target.value)}
                required
              ></input>
              <label htmlFor='class'>Choose a class </label>
              <select
                id='class'
                name='class'
                min={1}
                onChange={(e) => setCharClass(e.target.value)}
                required
              >
                <option></option>
                <option value={1}>Barbarian</option>
                <option value={2}>Monk</option>
                <option value={3}>Wizard</option>
              </select>
              <div className='button_bar centered'>
                <input type='submit' value='' />
                <Link to='/'>
                  <img src={back} alt='back_button' />
                </Link>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}
