import React, { Component } from 'react'
import CharApiService from '../../services/char-api-service';
import MonsterApiService from '../../services/monster-api-service';
import LocaFlavorApiService from '../../services/location-api-service';
import StoryContext from '../../contexts/StoryContext'
import Encounter from '../Encounter/Encounter'
import { Link } from 'react-router-dom';
import restart from '../../img/restart_button.png';

export default class Story extends Component {

    static contextType = StoryContext

    componentDidMount() {

        const { charClass } = this.context;
    
        CharApiService.getCharById(charClass)
          .then(char => this.context.setChar(char))
          .catch(this.context.setError)

        MonsterApiService.getMonster()
          .then(monster => this.context.setMonster(monster))
          .catch(error => console.log('error',error))

        LocaFlavorApiService.getLocaFlavor()
          .then(locaFlavor => this.context.setLocaFlavor(locaFlavor[Math.floor(Math.random()*(locaFlavor.length))]))
          .catch(this.context.setError)
    }

    render() {
        const {locaFlavor, charName, dungeonLoca, char, numberOfEncounters} = this.context
        if (charName === '') {
            return (
                <div className='centered container'>
                    Sorry, no data found.<br/><br/>
                    <div className='centered'>
                        <Link to='/story-form'><img src={restart} alt='start_button'/></Link>
                    </div>
                </div>
            )
        }
        const emptyArray = []
        for (let i = 0; i < numberOfEncounters; i ++) {
            emptyArray.push('count')
        }

        return (
            <div className='container'>
                <p>
                    You are <i>{charName}</i> the <i>{char.class_name}</i>. You venture into the <i>{dungeonLoca} {locaFlavor.location_flavor_string}</i> to seek fortune and excitement!
                    {emptyArray.map(element => <Encounter/>)}
                    You finish the dungeon! You find {numberOfEncounters*10} gold coins!<br /><br />
                    <div className='centered'>
                        <Link to='/story-form'><img src={restart} alt='start_button'/></Link>
                    </div>
                </p>    
            </div>
        )
    }
}


// {locaFlavor[locaFlavorNum]['id']}