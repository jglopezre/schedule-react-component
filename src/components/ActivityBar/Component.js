import React from 'react'
import WeekDays from '../WeekDays/Component';
import styles from './style.module.scss';

const ActivityBar = ({ daysObj, children }) => {

  const { barWrapper, okButton } = styles;
  const buttonText = 'Editar';

  return (
    <div className={ barWrapper }>
        <WeekDays { ...daysObj } />
        <button className={ okButton }><span>{ buttonText }</span></button>
    </div>
  )
}

export default ActivityBar