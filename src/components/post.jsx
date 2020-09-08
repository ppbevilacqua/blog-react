import React from "react";
import { changePost } from "../redux/postAction";
import { connect } from "react-redux";
import data from "../fetchCards";

const Post = props => {

    const card = data.cards.find( card => card.id === props.currentIdPost) ;

    return (
        <div className="m-2">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
