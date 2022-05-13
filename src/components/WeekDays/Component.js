import React, { useEffect, useState } from 'react';
import clsName from 'classnames';
import styles from './style.module.scss';

const WeekDays = ( {
    sunday = false,
    monday = false,
    tuesday = false,
    wednesday = false,
    thursday = false,
    friday = false,
    saturday = false,
    isEnabled = false,
    isEditable = false,
    changeDaysFunction } ) => {

    const { circle, active, selected, inactive, disabled, hover } = styles;

    let daysArr = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
    
    const settingInitialStyle = ( weekArray, enabled, editable ) => {
        
        let styleArr = [];

        const setInitialState = ( isActive ) => {
            if ( isActive ){
                if( enabled ) {
                    if ( editable ){
                        return clsName(circle, active, hover);
                    } else {
                        return clsName(circle, active);
                    }
                } else {
                    return clsName(circle, selected, disabled);
                }
            } else {
                if ( enabled ){
                    if ( editable ) {
                        return clsName(circle, inactive, hover);
                    } else {
                        return clsName(circle, inactive);
                    }
                } else {
                    return clsName(circle, inactive, disabled)
                }
            }
        }

        for(let i = 0; i < 7 ; i++) {
            styleArr.push( [ setInitialState( weekArray[i] ), weekArray[i] ] );
        }

        return styleArr;
    }

    const [styleState, setStyleState] = useState( () => {
        return settingInitialStyle( daysArr, isEnabled, isEditable );
    });

    
    useEffect( () => {
        setStyleState( () => {
            return [...settingInitialStyle( daysArr, isEnabled, isEditable )];
        })
    }, [isEnabled, isEditable]);

    const changingDay = ( day, dayElements ) => {
        if ( isEnabled && isEditable ) {
            if( !styleState[ day ][1] ) {
                setStyleState( ( data ) => {
                    data[ day ][0] = clsName( circle, active, hover );
                    data[ day ][1] = true;
                    return [...data];
                });
                dayElements[ day ] = true;
            } else {
                setStyleState( ( data ) => {
                    data[ day ][0] = clsName( circle, inactive, hover );
                    data[ day ][1] = false;
                    return [...data];
                });
                dayElements[ day ] = false;
            }
            changeDaysFunction({
                sunday: dayElements[0],
                monday: dayElements[1],
                tuesday: dayElements[2],
                wednesday: dayElements[3],
                thursday: dayElements[4],
                friday: dayElements[5],
                saturday: dayElements[6]
            })
        }
    }

   
    return (
        <div className={ styles.daysWrapper }>
            <button className={ styleState[0][0]} onClick={ () => { changingDay(0, daysArr) } } >D</button>
            <button className={ styleState[1][0]} onClick={ () => { changingDay(1, daysArr) } } >L</button>
            <button className={ styleState[2][0]} onClick={ () => { changingDay(2, daysArr) } } >M</button>
            <button className={ styleState[3][0]} onClick={ () => { changingDay(3, daysArr) } } >M</button>
            <button className={ styleState[4][0]} onClick={ () => { changingDay(4, daysArr) } } >J</button>
            <button className={ styleState[5][0]} onClick={ () => { changingDay(5, daysArr) } } >V</button>
            <button className={ styleState[6][0]} onClick={ () => { changingDay(6, daysArr) } } >S</button>
        </div>
    )
}

export default WeekDays;