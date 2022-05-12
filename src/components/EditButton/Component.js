import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';


const { editButton, active, enable, inactive } = styles;

const EditButton = ({ isEnabled = true }) => {

  const settingInitialStyle = ( enabled, stateData = {} ) => {
    stateData.enabled = enabled;
    stateData.isActive = false;
    stateData.buttonText = 'Editar';

    if( stateData.enabled ) {
      stateData.buttonStyle = classNames( editButton, enable );
    } else {
      stateData.buttonStyle = classNames( editButton, inactive );
    }
    
    return stateData;
  }

  const [ buttonState, setButtonState ] = useState( () => {
    return settingInitialStyle(isEnabled );
  });

  const { buttonStyle, isActive, enabled, buttonText } = buttonState;

  useEffect(() => {
    setButtonState( ( data ) => {
      return {...settingInitialStyle( isEnabled, data )};
    })
  }, [isEnabled]);
  
  
  const changingButtonState = () => {
    if ( enabled ) {
      
      if( isActive ) {
        setButtonState( (data) => {
          data.buttonStyle =  classNames(editButton, enable);
          data.isActive = false;
          data.buttonText = 'Editar';
         console.log(data)
          return {...data};
        })
      } else {
        setButtonState( (data) => {
          data.buttonStyle = classNames(editButton, active);
          data.isActive = true;
          data.buttonText = 'Guardar';
          return {...data};
        });
      }
    }
  }

  return (
    <div>
        <button className={ buttonStyle } onClick={ () => { changingButtonState() }}>{buttonText}</button>
    </div>
  )
}

export default EditButton