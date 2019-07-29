import React from 'react';
import './Card.css';


function Card(props) {
    return (
        <div className="Card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button 
                type="button" 
                className="Card-delete-button"
                onClick={() => props.delete(props)}>
                Delete
            </button>
        </div>
    )
}

export default Card;