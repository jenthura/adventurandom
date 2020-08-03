import React from 'react';

export default function Encounter(props) {
  const charDamage = Math.floor(Math.random()*100)
  const monsterDamage = Math.floor(Math.random()*100)
  let encounterResult = '';
  if (props.monster_hitpoints - charDamage <= 0) {
    encounterResult = [
      'The ',
      <i>{props.monster_name}</i>,
      ' dies horribly!',
    ];
  } else {
    encounterResult = `It has ${
      props.monster_hitpoints - charDamage
    } hitpoints remaining`;
  }

  return (
  <div className='encounter'>
      You attack a <i>{props.monster_name}</i> for {charDamage} damage! {encounterResult}<br/>
      The <i>{props.monster_name}</i> attacks you for {monsterDamage} damage!<br/>
  </div>
  )
}
