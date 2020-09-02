import React, {Component} from 'react';
import Card from "./card";

class CardGroup extends Component{

    render() {
        const { cards } = this.props;

        return(
            <div className="card-group">
                {
                    cards.map( (card) => (
                        <Card key = {card.id} card = {card} />
                    ))
                }
            </div>
        );
    }
}

export default CardGroup;