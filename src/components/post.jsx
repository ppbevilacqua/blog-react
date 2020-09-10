import React from "react";
import { changePost } from "../redux/postAction";
import { connect } from "react-redux";

const Post = ( {match, expandedPost} ) => {

    console.log();
    return expandedPost && expandedPost.title ?
        (
            <div className="m-2">
                <h3>{expandedPost.title}</h3>
                <p>{expandedPost.body}</p>
            </div>
     ) : ( <div> <h3>Errore caricamento post </h3></div>);
}

const mapStateToProps = ( {post} ) => {
    return {
        expandedPost : post.expandedPost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePost : (id) => dispatch( changePost(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
