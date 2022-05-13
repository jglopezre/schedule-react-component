import React, { useState } from 'react';
import ActivityBar from '../ActivityBar/Component';
import styles from './style.module.scss';

const ActivityCard = ( {children} ) => {

    const { cardWrapper, addButton, upperBox } = styles;

    const [activityBars, setActivityBars] = useState([]);

    const addNewActivityBar = () => {
        setActivityBars( (data) => {
            data.push( <ActivityBar key={ Math.random() }/> );
            return [...data];
        });
    };
    console.log(activityBars);

    return (
        <div className={ cardWrapper }>
            <div className={ upperBox }>
                <div>
                    <h1>Toma de Reservas</h1>
                    <p>Cree y personalice los días y horarios  en los que estará disponible para responder solicitudes de RESERVAS</p>
                </div>
                <div>
                    <button className={ addButton } onClick={ () => {addNewActivityBar()} }><span>+ Agregar Horario</span></button>
                </div>
            </div>
            <div>
                { activityBars }
            </div>
        </div>
    )
}

export default ActivityCard;