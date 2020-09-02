import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Card extends Component{
    render() {

        const { card } = this.props;

        return (
            <div className="card m-2">
                <img className="card-img-top mx-auto d-block m-2" src={ card.imgPath } style={{ width: '9rem' }} alt="post"/>
                    <div className="card-body">
                        <Link to={`/${card.id}`}>
                            <h5 className="card-title">{card.title}</h5>
                        </Link>
                        <p className="card-text"> {card.text}</p>
                    </div>
            </div>
        );
    }
}

export default Card;