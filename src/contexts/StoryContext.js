import React, { Component } from 'react'

export const nullChar = {
  id: 0,
  class_name: '',
  hitpoints: 0,
  has_spells: false,
}

export const nullMonster = {
    monster_name: '',
    hitpoints: 0,
    damage_die: 0,
}

export const nullDungeonLocation = ''

export const nullNumberOfEncounters = 0

export const nullCharName = ''

export const nullCharClass = -1

const StoryContext = React.createContext({
  char: nullChar,
  monster: nullMonster,
  dungeonLocation: nullDungeonLocation,
  numberOfEncounters: nullNumberOfEncounters,
  charName: nullCharName,
  charClass: nullCharClass,
  setError: () => {},
  clearError: () => {},
  setChar: () => {},
  clearChar: () => {},
  setMonster: () => {},
  clearMonster: () => {},
 
})

export default StoryContext

export class StoryProvider extends Component {
  state = {
    char: nullChar,
    monster: nullMonster,
    dungeonLocation: nullDungeonLocation,
    numberOfEncounters: nullNumberOfEncounters,
    charName: nullCharName,
    charClass: nullCharClass,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setChar = char => {
    this.setState({ char })
  }

  clearChar = () => {
    this.setChar(nullChar)
  }

  setMonster = monster => {
    this.setState({ monster })
  }

  clearMonster = () => {
    this.setMonster(nullMonster)
  }

  setDungeonLocation = dungeonLocation => {
    this.setState({dungeonLocation})
  }

  clearDungeonLocation = () => {
    this.DungeonLocation(nullDungeonLocation)
  }

  setNumberOfEncounters = numberOfEncounters => {
    this.setState({numberOfEncounters})
  }

  clearNumberOfEncounters = () => {
    this.NumberOfEncounters(nullNumberOfEncounters)
  }

  setCharName = charName => {
    this.setState({charName})
  }

  clearCharName = () => {
    this.CharName(nullCharName)
  }

  setCharClass = charClass => {
    this.setState({charClass})
  }

  clearCharClass = () => {
    this.CharClass(nullCharClass)
  }


  render() {
    const value = {
      char: this.state.char,
      monster: this.state.monster,
      dungeonLocation: this.state.dungeonLocation,
      numberOfEncounters: this.state.numberOfEncounters,
      charName: this.state.charName,
      charClass: this.state.charClass,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setChar: this.setChar,
      clearChar: this.clearChar,
      setMonster: this.setMonster,
      clearMonster: this.clearMonster,
      setDungeonLocation: this.setDungeonLocation,
      clearDungeonLocation: this.clearDungeonLocation,
      setNumberOfEncounters: this.setNumberOfEncounters,
      clearNumberOfEncounters: this.clearNumberOfEncounters,
      setCharName: this.setCharName,
      clearCharName: this.clearCharName,
      setCharClass: this.setCharClass,
      clearCharClass: this.clearCharClass,
    }
    return (
      <StoryContext.Provider value={value}>
        {this.props.children}
      </StoryContext.Provider>
    )
  }
}
