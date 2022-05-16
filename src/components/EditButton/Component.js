import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';



const EditButton = ({ isEnabled = true, buttonState }) => {

  const { editButton, active, enable, inactive, hover, deleteButtonBox } = styles;

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

  return <button className={ buttonStyle } onClick={ () => { changingButtonState() }}>{buttonText}</button>
}

export default EditButton