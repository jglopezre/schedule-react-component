import React, { useState } from 'react'
import EditButton from '../EditButton/Component';
import SelectorKnob from '../SelectorKnob/Component';
import WeekDays from '../WeekDays/Component';
import styles from './style.module.scss';

const ActivityBar = ({ daysObj }) => {

  const { barWrapper } = styles;

  const [ { knobSelectorState, editButtonState }, setBarState ] = useState({
    knobSelectorState: false,
    editButtonState: false,
  });

  const [daysStates, setDaysStates] = useState( daysObj );

  return (
    <div className={ barWrapper }>
      
        <SelectorKnob 
          selectState={ setBarState }
          isEnabled={ knobSelectorState }
        />

        <WeekDays
          { ...daysStates }
          changeDaysFunction={ setDaysStates }
          isEnabled={ knobSelectorState }
          isEditable={ editButtonState }
        />

        <EditButton
          isEnabled={ knobSelectorState }
          buttonState={ setBarState }
        />


    </div>
  )
}

export default ActivityBar