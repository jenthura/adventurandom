import React, { Component } from 'react';
import CharApiService from '../../services/char-api-service';
import MonsterApiService from '../../services/monster-api-service';
import LocaFlavorApiService from '../../services/location-api-service';
import StoryContext from '../../contexts/StoryContext';
import Encounter from '../Encounter/Encounter';
import { Link } from 'react-router-dom';
import restart from '../../img/restart_button.png';
import treasure from '../../img/treasure.jpg';

export default class Story extends Component {

    static contextType = StoryContext

    componentDidMount() {

        const { charClass } = this.context;
        CharApiService.getCharById(charClass)
          .then(char => this.context.setChar(char))
          .catch(this.context.setError);

        MonsterApiService.getMonster()
          .then((monster) => this.context.setMonster(monster))
          .catch((error) => console.log('GET monster error', error));

        LocaFlavorApiService.getLocaFlavor()
          .then(locaFlavor => this.context.setLocaFlavor(locaFlavor[Math.floor(Math.random()*(locaFlavor.length))]))
          .catch(this.context.setError);

        CharApiService.getCharAttacks(this.context.charClass)
          .then((charAttacks) => this.context.setCharAttacks(charAttacks))
          .then(this.context.toggleIsLoading())
          .catch((error) => console.log('GET char attacks error', error))
    }

    render() {
        const {locaFlavor, charName, dungeonLoca, char, charAttacks, numberOfEncounters, monster} = this.context
        if (charName === '') {
            this.props.history.push('/story-form');
        };
        const randomMonsters = []
        for (let i = 0; i < numberOfEncounters; i ++) {
            let randomMonsterId = Math.floor(Math.random()*monster.length)
            randomMonsters.push(monster[randomMonsterId])
        };
        const randomAttacks = []
        for (let i = 0; i < numberOfEncounters; i ++) {
            let randomAttackId = Math.floor(Math.random()*charAttacks.length)
            randomAttacks.push(charAttacks[randomAttackId])
        };

        return (
            <div className='container'>
                <p>
                    <b>You are {charName} the {char.class_name}. You venture into the "<i>{dungeonLoca} {locaFlavor.location_flavor_string}</i>" to seek fortune and excitement! You enter the danger zone! And...</b>
                    <br />
                    <br />

                    {randomMonsters.map(monster => <Encounter 
                        monsterHitpoints={monster.hitpoints} 
                        monsterLength={monster.length} 
                        monsterName={monster.monster_name}
                        attackName={randomAttacks.map(attack => attack.attack_name)[0]}
                        attackDamageDie={randomAttacks.map(attack => attack.damage_die)[0]}
                        attackDamageType={randomAttacks.map(attack => attack.damage_type)[0]}
                    />)}

                    You reach the end of the {dungeonLoca}! You find {numberOfEncounters*10} gold coins!<br /><br />
                    <img src={treasure} alt='A chest full of gold coins and loot!'/>
                    <div className='centered'>
                        <Link to='/story-form'><img src={restart} alt='start_button'/></Link>
                    </div>
                </p>    
            </div>
        )
    }
};


// {locaFlavor[locaFlavorNum]['id']}