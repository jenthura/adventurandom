import React, { Component } from 'react';
import MonsterApiService from '../../services/monster-api-service';
import StoryContext from '../../contexts/StoryContext';
import CharApiService from '../../services/char-api-service';


export default class Encounter extends Component {

  static contextType = StoryContext;

  componentDidMount() {
    MonsterApiService.getMonster()
      .then((monster) =>
        this.context.setMonster(monster)
      )
      .catch((error) => console.log('error', error));

    CharApiService.getCharById(this.context.charClass)
      .then((char) => this.context.setChar(char))
      .catch(this.context.setError);
  }

  render() {
    const { char, monster } = this.context;
    const monsterId = Math.floor(Math.random() * monster.length);
    const charDamage = Math.floor(Math.random() * 7);
    const monsterDamage = Math.floor(Math.random() * monster[monsterId].damage_die);

    return (
      <div className='encounter'>
        A <i>{monster[monsterId].monster_name}</i> pops out!
        <br />
        You attack a <i>{monster[monsterId].monster_name}</i> with your <i>{char.has_spells ? 'Fire Bolt spell' : 'Greataxe'}</i> for{' '}
        {charDamage} damage!{' '}
        {`It has ${monster[monsterId].hitpoints - charDamage} hitpoints remaining`}
        <br />
        The <i>{monster[monsterId].monster_name}</i> attacks you for {monsterDamage}{' '}
        damage!
        <br />
        You attack a <i>{monster[monsterId].monster_name}</i> with your <i>{char.has_spells ? 'Fire Bolt spell' : 'Greataxe'}</i> for{' '}
        {charDamage + 50} damage!{' '}
        {['The ', <i>{monster[monsterId].monster_name}</i>, ' dies horribly!']}
        <br />
      </div>
    );
  }
}
