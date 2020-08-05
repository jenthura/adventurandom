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
          .then(monster => this.context.setMonster(monster[Math.floor(Math.random()*(monster.length))]))
          .catch(error => console.log('error',error))

        LocaFlavorApiService.getLocaFlavor()
          .then(locaFlavor => this.context.setLocaFlavor(locaFlavor[Math.floor(Math.random()*(locaFlavor.length))]))
          .catch(this.context.setError)
    }

    render() {
        const {locaFlavor, charName, dungeonLoca, char, monster, numberOfEncounters} = this.context
        
        return (
            <div className='container'>
                <p>
                    You are <i>{charName}</i> the <i>{char.class_name}</i>. You venture into the <i>{dungeonLoca} {locaFlavor.loca_flavor_string}</i> to seek fortune and excitement!
                    <Encounter numberOfEncounters={numberOfEncounters} char_attack={'Axe'} monster_hitpoints={monster.hitpoints} monster_name={monster.monster_name}/>
                    You finish the dungeon! You find {monster.hitpoints*10} gold coins!<br /><br />
                    <div className='centered'>
                        <Link to='/story-form'><img src={restart} alt='start_button'/></Link>
                    </div>
                </p>    
            </div>
        )
    }
}


// {locaFlavor[locaFlavorNum]['id']}