import React, { useState } from 'react'
import SelectorKnob from '../SelectorKnob/Component';
import WeekDays from '../WeekDays/Component';
import styles from './style.module.scss';

const ActivityBar = ({ daysObj, children }) => {

  const { barWrapper, okButton } = styles;
  const buttonText = 'Editar';

  const [ barState, setBarState ] = useState( true );

  const [daysStates, setDaysStates] = useState( daysObj );

  return (
    <div className={ barWrapper }>
        <SelectorKnob selectState={ setBarState } isEnabled={ true }/>
        <WeekDays { ...daysStates } changeDaysFunction={ setDaysStates } isEnabled={ barState } />
        <button className={ okButton }><span>{ buttonText }</span></button>
    </div>
  )
}

export default ActivityBar