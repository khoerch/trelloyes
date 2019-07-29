import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    return (
        <section className="List" key={props.key}>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card, i) => (
                    <Card 
                        key={i} 
                        list={props.list}
                        title={card.title} 
                        content={card.content}
                        delete={props.delete}
                    />
                ))}
                <button 
                    type="button" 
                    className="List-add-button"
                    onClick={() => props.random(props.list)}>
                    + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;