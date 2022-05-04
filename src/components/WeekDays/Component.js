import React from 'react';
import clsname from 'classnames';
import styles from './style.module.scss';

const WeekDays = ( {sunday, monday, tuesday, wednesday, thursday, friday, saturday} ) => {
    
    const { circle, active, selected, inactive } = styles;
    
    const changingDay = ( opt ) => {
        let f = '';
        switch( opt ){
            case 'active':
                f = clsname( circle, active );
                break;
            case 'inactive':
                f = clsname( circle, inactive );
                break;
            case 'selected':
                f= clsname( circle, selected );
                break;
            default:
                f = clsname( circle, inactive );
                break;
        };
        return f;
    }; 
      
    return (
        <div className={ styles.daysWrapper }>
            <div className={ changingDay( sunday ) }><span>D</span></div>
            <div className={ changingDay( monday ) }><span>L</span></div>
            <div className={ changingDay( tuesday ) }><span>M</span></div>
            <div className={ changingDay( wednesday ) }><span>M</span></div>
            <div className={ changingDay( thursday ) }><span>J</span></div>
            <div className={ changingDay( friday ) }><span>V</span></div>
            <div className={ changingDay( saturday ) }><span>S</span></div>
        </div>
    )
}

export default WeekDays;