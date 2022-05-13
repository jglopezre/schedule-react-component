import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';




const EditButton = ({ isEnabled = true, buttonState }) => {

  const { editButton, active, enable, inactive, hover } = styles;

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

  const [ { buttonStyle, isActive, enabled, buttonText }, setButtonState ] = useState( () => {
    return settingInitialStyle(isEnabled );
  });

  useEffect(() => {
    setButtonState( ( data ) => {
      return {...settingInitialStyle( isEnabled, data )};
    })
  }, [isEnabled]);
  
  
  const changingButtonState = () => {
    if ( enabled ) {
      
      if( isActive ) {
        setButtonState( (data) => {
          data.buttonStyle =  classNames(editButton, enable, hover);
          data.isActive = false;
          data.buttonText = 'Editar';
         console.log(data)
          return {...data};
        });
        buttonState( (state) => {
          return {
            ...state,
            editButtonState: false
          }
        });
      } else {
        setButtonState( (data) => {
          data.buttonStyle = classNames(editButton, active, hover);
          data.isActive = true;
          data.buttonText = 'Guardar';
          return {...data};
        });
        buttonState( (state) => {
          return {
            ...state,
            editButtonState: true
          }
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