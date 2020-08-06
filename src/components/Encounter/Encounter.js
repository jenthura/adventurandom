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
    console.log(char.damage_die)
    const charDamage = Math.floor(Math.random() * char.damage_die);
    const monsterDamage = Math.floor(Math.random() * monster.damage_die);

    console.log(monster.monster_hitpoints);

    return (
      <div className='encounter'>
        A <i>{monster.monster_name}</i> pops out!
        <br />
        You attack a <i>{monster.monster_name}</i> with your <i>{'Axe'}</i> for{' '}
        {charDamage} damage!{' '}
        {`It has ${monster.monster_hitpoints - charDamage} hitpoints remaining`}
        <br />
        The <i>{monster.monster_name}</i> attacks you for {monsterDamage}{' '}
        damage!
        <br />
        You attack a <i>{monster.monster_name}</i> with your <i>{'Axe'}</i> for{' '}
        {charDamage + 50} damage!{' '}
        {['The ', <i>{monster.monster_name}</i>, ' dies horribly!']}
        <br />
      </div>
    );
  }
}
