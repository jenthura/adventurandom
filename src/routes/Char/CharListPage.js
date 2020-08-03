// import React, { Component } from 'react';
// import CharApiService from '../../services/char-api-service';
// import CharContext from '../../contexts/CharContext'
// // const JSON = require 'JSON';

// export default class CharList extends Component {

//   static defaultProps = {
//     match: { params: {} },
//   }

//   static contextType = CharContext

//   componentDidMount() {
//     // CharApiService.getChar()
//     //   // .then(this.context.setChar({char: 'name'}))
//     //   .then(char => this.context.setChar(char[1]))
//     //   // .catch(this.context.setError)
//     //   .catch(error => console.log(error))

//     const {id} = this.props.match.params

//     CharApiService.getCharById(id)
//       .then(char => this.context.setChar(char))
//       .catch(error => console.log(error))
//   }

//   render() {
//     const { char } = this.context
//     // const name = char.class_name
//     return (
//       <div className="container">
//         <ul>
//           <li>
//             ID: {char.id}
//           </li>
//           <li>
//             Class Name: {char.class_name}
//           </li>
//           <li>
//             Hitpoints: {char.hitpoints}
//           </li>
//           <li>
//             Has spells: {char.has_spells ? 'True' : 'False'}
//           </li>
//         </ul> 
//       </div>
//     )
//   }
// }
