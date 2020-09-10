import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from "./card";
import { fetchPosts} from "../redux/postAction";

const CardGroup = ( {posts, fetchPosts} ) => {

    useEffect( () => { fetchPosts() }, []);

    return posts.loading ? (<h4>Loading</h4>) :
        posts.error ? ( <h4> {posts.error} </h4> ) :
            (
                <div className="card-group">
                    {
                        posts.map( (card) => (
                            <Card key = {card.id} card = {card} />
                        ))
                    }
                </div>
            )
};

const mapStateToProps = state => {
    return {
        posts : state.post.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts : () => dispatch( fetchPosts() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGroup);

