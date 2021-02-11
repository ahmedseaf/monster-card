import React from 'react';

import CardMonster from '../cards/card-monster-component.jsx';

import './card-list-style.css';

export const  CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
           
            <CardMonster key={monster.id} monster={monster} />
        ))}
    </div>
);