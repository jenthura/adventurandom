import React, { Component } from 'react'
import CharApiService from '../../services/char-api-service';
import MonsterApiService from '../../services/monster-api-service';
import StoryContext from '../../contexts/StoryContext'
import Encounter from '../Encounter/Encounter'

export default class Story extends Component {

    static contextType = StoryContext

    componentDidMount() {

        const { charClass } = this.context;
    
        CharApiService.getCharById(charClass)
          .then(char => this.context.setChar(char))
          .catch(this.context.setError)

        MonsterApiService.getMonsterById(2)
          .then(monster => this.context.setMonster(monster))
          .catch(error => console.log('error',error))
    }

    render() {
        const {charName, dungeonLocation, char, monster} = this.context
        const locationFlavor = [' of the Twisted Root', ' of the Mad King', 'Undying']
        return (
            <div className='container'>
                <p>
                    You are <i>{charName}</i> the <i>{char.class_name}</i>. You venture into the <i>{dungeonLocation}</i> to seek fortune and excitement!
                    <Encounter monster_hitpoints={monster.hitpoints} monster_name={monster.monster_name}/>
                </p>
            </div>
        )
    }
}
