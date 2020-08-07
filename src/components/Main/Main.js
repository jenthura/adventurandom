import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import about from '../../img/about_button.png';
import start from '../../img/start_button.png';

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className='container '>
          <h1 className='centered'>It's time to adventure!</h1>
          <p>
            This story-builder is very simple to understand. Choose a number of
            parameters for your story and the rest is up to us! Be wary of
            making it too difficult! You just might not make it back alive!
            <br/>
          </p>
          <div className='centered'>
            <Link to='/story-form'><img src={start} alt='start_button'/></Link>
          </div>
        </div>
        <div className='container tutorial'>
          <h2 className='centered'>Instructions</h2>
          <h3>Location</h3>
          <p>
            Currently the location does not affect anything. In future versions,
            this will change the difficulty of the adventure, and change which
            monsters you can meet. e.g. Vampires in the Castle, Zombies in the
            Graveyard, etc...
          </p>
          <h3>Number of Encounters</h3>
          <p>
            This is how many times you will meet a monster and fight. The more
            of these you add, the more gold you can stand to gain,
            but the difficulty also rises.
          </p>
          <h3>Character Name</h3>
          <p>
            Your name! It matters! When you proudly show off your story to your
            friends and family they will all know exactly who you are!
          </p>
          <h3>Character Level</h3>
          <p>
            The lower level you are, the weaker attacks and vice versa for a higher level. In future versions, this will also determine how many experience points you need to level up.
          </p>
          <h3>Class</h3>
          <p>
            Your class dictates the attacks you can use, and what weapons you wield!
          </p>
        </div>
        <div className='container centered'>
          <Link to='/about'>
          <img src={about} alt='about_button'/>
          </Link>
        </div>
      </div>
    );
  }
}
