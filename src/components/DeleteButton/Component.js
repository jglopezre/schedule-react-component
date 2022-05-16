import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './style.module.scss';

const DeleteButton = ({ isEnabled = false }) => {

    const { deleteButtonBox, deleteButton, active } = styles;

    const deleteBarAction = () => {
        console.log('delete');
    }

    const [{ buttonStyle, buttonState }, setDeleteButtonState] = useState({
        buttonStyle: classNames( deleteButton ),
        buttonState: false
    });

    const settingInitialStyle = () => {
        console.log(isEnabled)
        if( isEnabled ) {
            setDeleteButtonState( state => {
                return {
                    ...state,
                    buttonStyle: classNames( deleteButton, active)
                }
            });
        } else {
            setDeleteButtonState( state => {
                return {
                    ...state,
                    buttonStyle: classNames( deleteButton )
                }
            });
        }
    }

    useEffect(() => {
      settingInitialStyle();
    }, [isEnabled])
    

    return (
        <div className={ deleteButtonBox }>
            <button className={ buttonStyle } onClick={ () => { deleteBarAction() } } >
                <FontAwesomeIcon icon={ faTrashCan } color={'red'} size={'xl'} />
            </button>
        </div>
    )
}

export default DeleteButton;