import React, { useState } from 'react';
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
    isEnable = true } ) => {

    const { circle, active, selected, inactive } = styles;

    const daysArr = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
    
    const [styleState, setStyleState] = useState(() => {
        let styleArr = [];

        const setInitialState = ( index ) => {
            if ( index ){
                if( isEnable) {
                    return clsName(circle, active);
                } else {
                    return clsName(circle, selected);
                }
            } else {
                return clsName(circle, inactive);
            }
        }

        for(let i = 0; i < 7 ; i++) {
            styleArr.push( [ setInitialState( daysArr[i] ), daysArr[i] ] );
        }

        console.log(styleArr);
        return styleArr;

    });


    const changingDay = ( day ) => {
        if ( isEnable ) {
            if( !styleState[ day ][1] ) {
                setStyleState( ( data ) => {
                    data[ day ][0] = clsName( circle, active );
                    data[ day ][1] = true;
                    return [...data];
                });
            } else {
                setStyleState( ( data ) => {
                    data[ day ][0] = clsName( circle, inactive );
                    data[ day ][1] = false;
                    return [...data];
                });
            }
            console.log( styleState[ day ][0] );
            console.log( styleState[ day ][1] );
        }
    }
      
    return (
        <div className={ styles.daysWrapper }>
            {console.log('aqui')}
            <button className={ styleState[0][0]} onClick={ () => { changingDay(0) } } >D</button>
            <button className={ styleState[1][0]} onClick={ () => { changingDay(1) } } >L</button>
            <button className={ styleState[2][0]} onClick={ () => { changingDay(2) } } >M</button>
            <button className={ styleState[3][0]} onClick={ () => { changingDay(3) } } >M</button>
            <button className={ styleState[4][0]} onClick={ () => { changingDay(4) } } >J</button>
            <button className={ styleState[5][0]} onClick={ () => { changingDay(5) } } >V</button>
            <button className={ styleState[6][0]} onClick={ () => { changingDay(6) } } >S</button>
        </div>
    )
}

export default WeekDays;