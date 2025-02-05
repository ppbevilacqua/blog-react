import React from 'react';
import {Link} from "react-router-dom";
import {changePost} from "../redux/postAction";
import {connect} from "react-redux";

const Card = ( {card, changePost} ) => {

    return (
        <div className="card m-2 w-25">
            <img className="card-img-top mx-auto d-block m-2" src={ card.imgPath } style={{ width: '9rem' }} alt="post"/>
            <div className="card-body">
                <Link to={`/${card.id}`} onClick={ () => changePost(card.id) } >
                    <h5 className="card-title">{ card.title.substring(0,25) + (card.title.length > 25 ? "..." : "") }</h5>
                </Link>
                <p className="card-text"> { card.body.substring(0,40) + (card.body.length > 25 ? "..." : "") }</p>
            </div>
        </div>
    );
}

const mapStateToProps = ( {post} ) => {
    return {
        currentIdPost : post.currentIdPost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePost : (id) => dispatch( changePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);