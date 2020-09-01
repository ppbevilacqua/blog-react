import React, {Component} from 'react';

class Card extends Component{
    render() {
        return (
            <div className="card m-2">
                <img className="card-img-top " src="https://picsum.photos/100/150" alt="Card image cap" style={{ width: '9rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">Lorem ipsum</h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
            </div>
        );
    }
}

export default Card;