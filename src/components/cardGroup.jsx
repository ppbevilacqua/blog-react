import React, {Component} from 'react';
import Card from "./card";

class CardGroup extends Component{
    render() {
        return(
            <div className="card-group">
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}

export default CardGroup;