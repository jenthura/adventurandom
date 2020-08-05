import React from 'react';

export default function Encounter(props) {
  const charDamage = Math.floor(Math.random() * 10);
  const monsterDamage = Math.floor(Math.random() * 10);

  return (
    <div className='encounter'>
      A <i>{props.monster_name}</i> pops out!
      <br />
      You attack a <i>{props.monster_name}</i> with your{' '}
      <i>{props.char_attack}</i> for {charDamage} damage! {`It has ${
      props.monster_hitpoints - charDamage
    } hitpoints remaining`}
      <br />
      The <i>{props.monster_name}</i> attacks you for {monsterDamage} damage!
      <br />
      You attack a <i>{props.monster_name}</i> with your{' '}
      <i>{props.char_attack}</i> for {charDamage + 50} damage!{' '}
      {['The ', <i>{props.monster_name}</i>, ' dies horribly!']}
      <br />
    </div>
  );
}
