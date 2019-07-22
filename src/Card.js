import React from 'react';
import './Card.css';
import STORE from './store';


function Card(props) {
    console.log(props.cards);
    const cardArray = STORE.allCards.map(item => {
        if (props.cards.includes(item)) {
            return 
                <div className="Card">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
        };
    })
    return (
        <div className="Card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;