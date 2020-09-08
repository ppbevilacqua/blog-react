import React from 'react';
import Card from "./card";

const CardGroup = props => {

    const { cards } = props;

    return (
        <div className="card-group">
        {
            cards.map( (card) => (
                <Card key = {card.id} card = {card} changePost={ props.changePost }/>
            ))
        }
    </div>
    )
};

export default CardGroup;

