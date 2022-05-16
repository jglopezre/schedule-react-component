import React, { useState } from 'react'
import DeleteButton from '../DeleteButton/Component';
import EditButton from '../EditButton/Component';
import SelectorKnob from '../SelectorKnob/Component';
import WeekDays from '../WeekDays/Component';
import styles from './style.module.scss';

const ActivityBar = ({ daysObj }) => {

  const { barWrapper, editButtonWrapper } = styles;

  const [ { knobSelectorState, editButtonState }, setBarState ] = useState({
    knobSelectorState: false,
    editButtonState: false,
  });

  const [daysStates, setDaysStates] = useState( daysObj );
  console.log( editButtonState )
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
      <div className={ editButtonWrapper }>
        <EditButton
          isEnabled={ knobSelectorState }
          buttonState={ setBarState }
        />

        <DeleteButton isEnabled={ editButtonState } />
      </div>
    </div>
  )
}

export default ActivityBar