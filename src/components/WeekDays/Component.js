import React from 'react';
import styles from './style.module.scss';


const WeekDays = () => {

    return (
        <>
            <div className={styles.circle}><span>D</span></div>
            <div className={styles.circle}><span>L</span></div>
            <div className={styles.circle}><span>M</span></div>
            <div className={styles.circle}><span>M</span></div>
            <div className={styles.circle}><span>J</span></div>
            <div className={styles.circle}><span>V</span></div>
            <div className={styles.circle}><span>S</span></div>
        </>
    )
}

export default WeekDays