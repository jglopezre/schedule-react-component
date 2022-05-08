import React, { useState } from 'react';
import styles from './style.module.scss';

const SelectorKnob = ({ selectState, isEnabled = true }) => {
  
  const { selectorContainer, selectorKnobInactive, selectorKnobActive, selectorKnobToInactive, selectorKnobToActive } = styles;

  const [selectorState, setSelectorState] = useState(() => {
    let style = {};
    if( isEnabled ) {
      style = {
        slotStyle: selectorKnobActive,
        slotActive: true
      }
    } else {
      style = {
        slotStyle: selectorKnobInactive,
        slotActive: false
      }
    }
    return style;
  });

  const { slotStyle, slotActive } = selectorState;

  const changingSelector = ( state ) => {
    if ( !state ) {
      setSelectorState({
        slotStyle: selectorKnobToActive,
        slotActive: true
      });
      selectState( true );
    } else {
      setSelectorState({
        slotStyle: selectorKnobToInactive,
        slotActive: false
      });
      selectState( false );
    }
    
  }

  return (
    <div className={selectorContainer}>
      <div className={ slotStyle }>
        <div onClick={ () => { changingSelector(slotActive) }}>{/*KNOB*/}</div>
      </div>
    </div>
  )
}

export default SelectorKnob;