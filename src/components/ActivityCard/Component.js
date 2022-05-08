import React, { useState } from 'react';
import ActivityBar from '../ActivityBar/Component';
import styles from './style.module.scss';

const ActivityCard = ( {children} ) => {

    const { cardWrapper, addButton, textBox, upperBox } = styles;

    const weekOne = {
        monday: true,
        saturday: true,
        sunday: true,
    }

    const weekTwo = {
        sunday: true,
        tuesday: true,
        friday: true,
        saturday: true,
    }
    
    

    return (
        <div className={ cardWrapper }>
            <div className={ upperBox }>
                <div>
                    <h1>Toma de Reservas</h1>
                    <p>Cree y personalice los días y horarios  en los que estará disponible para responder solicitudes de RESERVAS</p>
                </div>
                <div>
                    <button className={ addButton }><span>+ Agregar Horario</span></button>
                </div>
            </div>
            <div>
                <ActivityBar daysObj={ weekOne }/>
                
            </div>
            
        </div>
    )
}

export default ActivityCard;