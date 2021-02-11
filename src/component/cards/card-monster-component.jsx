import React from 'react';

import './card-monster-style.css';

const CardMonster = props => (
     <div className="card-monster">
        <img src={`https://robohash.org/${props.monster.id}.png?set=set3`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);

export default CardMonster;
