import React from 'react';
import './List.css';
import Card from './Card'
import STORE from './store';

function List(props) {
    const listArray = STORE.lists.map(item => 
        <section className="List" key={item.id}>
            <header className="List-header">
                <h2>{item.header}</h2>
            </header>
            <div className="List-cards">
                <Card 
                    cards={item.cardIds} 
                    
                />
                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
    );
    
    return (
        <div className="App-list">
            {listArray}
        </div>
    )
}

export default List;