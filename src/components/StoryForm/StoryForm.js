import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import next from '../../img/next_button.png';
import back from '../../img/back_button.png';
import './StoryForm.css';
import StoryContext from '../../contexts/StoryContext';

export default class StoryForm extends Component {
  static contextType = StoryContext;

  nextClickHandler = (event) => {
    debugger
    event.preventDefault()
    this.refs.storyForm_01.submit();
    this.props.history.push('/story');
  }

  render() {
    const {
      setDungeonLocation,
      setNumberOfEncounters,
      setCharName,
      setCharClass,
    } = this.context;

    return (
      <div>
        <div className='container form'>
          <fieldset>
            <legend>Customise your adventure!</legend>
            <form ref='storyForm_01' id='storyForm'>
              <p>
                <label for='location'>Choose a location </label>
                <select
                  id='location'
                  name='location'
                  onChange={(e) => setDungeonLocation(e.target.value)}
                  required
                >
                  <option></option>
                  <option value='Castle'>Castle</option>
                  <option value='Graveyard'>Graveyard</option>
                  <option value='Dungeon'>Dungeon</option>
                  <option value='Forest'>Forest</option>
                </select>
              </p>
              <p>
                <label>Number of encounters</label>
                <input
                  type='number'
                  min={1}
                  max={10}
                  onChange={(e) => setNumberOfEncounters(e.target.value)}
                  required
                ></input>
              </p>
              <p>
                <label for='name'>Character Name</label>
                <input
                  type='text'
                  onChange={(e) => setCharName(e.target.value)}
                  required
                ></input>
              </p>
              <p>
                <label for='class'>Choose a class </label>
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
              </p>
              {/* <input value='Save' type='submit'/> */}
            </form>
          </fieldset>
        </div>
        <div className='container centered form-buttons'>
          <Link to='/'>
            <img src={back} alt='back_button' />
          </Link>
          <Link to='/story' onClick={this.nextClickHandler(event)}>
            <img src={next} alt='next_button' />
          </Link>
        </div>
      </div>
    );
  }
}
