// import React, { Component } from 'react'

// export const nullChar = {
//   id: 0,
//   class_name: '',
//   hitpoints: 0,
//   has_spells: false,
// }

// const CharContext = React.createContext({
//   char: nullChar,
//   setError: () => {},
//   clearError: () => { },
//   setChar: () => {},
//   clearChar: () => {},
  
// })

// export default CharContext

// export class CharProvider extends Component {
//   state = {
//     char: nullChar,
//     error: null,
//   };

//   setError = error => {
//     console.error(error)
//     this.setState({ error })
//   }

//   clearError = () => {
//     this.setState({ error: null })
//   }

//   setChar = char => {
//     this.setState({ char })
//   }

//   clearChar = () => {
//     this.setChar(nullChar)
//   }


//   render() {
//     const value = {
//       char: this.state.char,
//       error: this.state.error,
//       setError: this.setError,
//       clearError: this.clearError,
//       setChar: this.setChar,
//       clearChar: this.clearChar,
//     }
//     return (
//       <CharContext.Provider value={value}>
//         {this.props.children}
//       </CharContext.Provider>
//     )
//   }
// }
