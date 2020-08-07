import React, { Component } from 'react';
import MonsterApiService from '../../services/monster-api-service';
import StoryContext from '../../contexts/StoryContext';
import CharApiService from '../../services/char-api-service';


export default class Encounter extends Component {
  static contextType = StoryContext;

  componentDidMount() {
    MonsterApiService.getMonster()
      .then((monster) => this.context.setMonster(monster))
      .catch((error) => console.log('GET monster error', error));

    CharApiService.getCharById(this.context.charClass)
      .then((char) => this.context.setChar(char))
      .catch((error) => console.log('GET char error', error));

    CharApiService.getCharAttacks(this.context.charClass)
      .then((charAttacks) => this.context.setCharAttacks(charAttacks))
      .then(this.context.toggleIsLoading())
      .catch((error) => console.log('GET char attacks error', error))
      
  }

  render() {
    const { char, monster, charAttacks, isLoading} = this.context;
    if (isLoading === true) {
      return 'Loading...'
    }
    if (monster[0].monster_name==='' || charAttacks[0].attack_name==='') {
      return 'Loading...';
    }

    const monsterId = Math.floor(Math.random() * monster.length);
    const attackId = Math.floor(Math.random() * charAttacks.length);
    const charDamage = Math.floor(Math.random() * 7);
    const monsterDamage = Math.floor(Math.random() * monster[monsterId].damage_die)
    
    return (
      <div className='encounter'>
        A {monster[monsterId].monster_name} pops out!
        <br />
        <br />
        You attack a {monster[monsterId].monster_name} with your{' '}
        {charAttacks[attackId].attack_name} for{' '}
        {charDamage} damage!{' '}
        {`It has ${
          monster[monsterId].hitpoints - charDamage
        } hitpoints remaining`}
        <br />
        <br />
        The {monster[monsterId].monster_name} attacks you for{' '}
        {monsterDamage} damage!
        <br />
        <br />
        You attack a {monster[monsterId].monster_name} with your{' '}
        {charAttacks[attackId].attack_name} for{' '}
        {charDamage + 50} damage!{' '}
        The {monster[monsterId].monster_name} dies horribly!
        <br />
        <br />
      </div>
    );
  }
}
