import React, { Component } from 'react'
// import MonsterApiService from '../../services/monster-api-service';
import StoryContext from '../../contexts/StoryContext'
// import CharApiService from '../../services/char-api-service';

export default class Encounter extends Component {
  static contextType = StoryContext

  render() {
    const { isLoading } = this.context
    const {
      monsterName,
      monsterHitpoints,
      attackName,
      attackDamageDie,
      attackDamageType,
    } = this.props
    if (isLoading === true) {
      return 'Loading...'
    }

    const charDamage = Math.floor(Math.random() * attackDamageDie)
    const monsterDamage = Math.floor(Math.random() * 12)

    return (
      <div className='encounter'>
        A {monsterName} pops out!
        <br />
        <br />
        You attack a {monsterName} with your {attackName} for {charDamage}{' '}
        {attackDamageType} damage!{' '}
        {`It has ${monsterHitpoints - charDamage} hitpoints remaining`}
        <br />
        <br />
        The {monsterName} attacks you for {monsterDamage} damage!
        <br />
        <br />
        You attack a {monsterName} with your {attackName} for {charDamage + 50}{' '}
        {attackDamageType} damage! The {monsterName} dies horribly!
        <br />
        <hr />
        <br />
      </div>
    )
  }
}
