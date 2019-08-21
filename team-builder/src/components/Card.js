import React from 'react';

const Card = props => {
    console.log("Card Props: ", props);
    return(
        <div className="cards">
            <h3>V Rendered cards should display here V</h3>
            {props.cardList.map(card => {
                return(
                    <div className="card" key={card.id}>
                        <h2>{card.name}</h2>
                        <p>{card.role}</p>
                        <p>{card.email}</p>
                    </div>
                );
            })}
        </div>
        );
};

export default Card;