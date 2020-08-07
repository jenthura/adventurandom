import React, { Component } from 'react'

export const nullChar = {
  id: 0,
  class_name: '',
  hitpoints: 0,
  has_spells: false,
}

export const nullMonster = [{
  monster_name: '',
  hitpoints: 0,
  damage_die: 0,
}]

export const nullDungeonLoca = ''

export const nullNumberOfEncounters = 0

export const nullCharName = ''

export const nullCharClass = -1

export const nullLocaFlavor = {}

const StoryContext = React.createContext({
  char: nullChar,
  monster: nullMonster,
  dungeonLoca: nullDungeonLoca,
  numberOfEncounters: nullNumberOfEncounters,
  charName: nullCharName,
  charClass: nullCharClass,
  locaFlavor: nullLocaFlavor,
  setError: () => {},
  clearError: () => {},
  setChar: () => {},
  clearChar: () => {},
  setMonster: () => {},
  clearMonster: () => {},
  setCharClass: () => {},
  clearCharClass: () => {},
  setLocaFlavor: () => {},
  clearLocaFlavor: () => {}
})

export default StoryContext

export class StoryProvider extends Component {
  state = {
    char: nullChar,
    monster: nullMonster,
    dungeonLoca: nullDungeonLoca,
    numberOfEncounters: nullNumberOfEncounters,
    charName: nullCharName,
    charClass: nullCharClass,
    locaFlavor: nullLocaFlavor,
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

  setDungeonLoca = dungeonLoca => {
    this.setState({dungeonLoca})
  }

  clearDungeonLoca = () => {
    this.DungeonLoca(nullDungeonLoca)
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

  setLocaFlavor = locaFlavor => {
    this.setState({locaFlavor})
  }

  clearLocaFlavor = () => {
    this.LocaFlavor(nullLocaFlavor)
  }


  render() {
    const value = {
      char: this.state.char,
      monster: this.state.monster,
      dungeonLoca: this.state.dungeonLoca,
      numberOfEncounters: this.state.numberOfEncounters,
      charName: this.state.charName,
      charClass: this.state.charClass,
      locaFlavor: this.state.locaFlavor,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setChar: this.setChar,
      clearChar: this.clearChar,
      setMonster: this.setMonster,
      clearMonster: this.clearMonster,
      setDungeonLoca: this.setDungeonLoca,
      clearDungeonLoca: this.clearDungeonLoca,
      setNumberOfEncounters: this.setNumberOfEncounters,
      clearNumberOfEncounters: this.clearNumberOfEncounters,
      setCharName: this.setCharName,
      clearCharName: this.clearCharName,
      setCharClass: this.setCharClass,
      clearCharClass: this.clearCharClass,
      setLocaFlavor: this.setLocaFlavor,
      clearLocaFlavor: this.clearLocaFlavor,
    }
    return (
      <StoryContext.Provider value={value}>
        {this.props.children}
      </StoryContext.Provider>
    )
  }
}
