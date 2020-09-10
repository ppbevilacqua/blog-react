import { CHANGE_POST,
        FETCH_POSTS_FAILURE,
        FETCH_POSTS_REQUEST,
        FETCH_POSTS_SUCCESS }  from "./postTypes";

const initialState = {
    lastPostsViewed : [],
    loading : false,
    posts : [],
    error : "",
    expandedPost : {}
}

const postReducer = ( state = initialState, action) => {

    switch(action.type){
        case CHANGE_POST:
            return {
                ...state,
                lastPostsViewed: [...state.lastPostsViewed, action.payload],
                expandedPost: state.posts ? (state.posts.find( post => post.id === action.payload) ) : {}
            };

        case FETCH_POSTS_REQUEST :
            return {
                ...state,
                loading : true
            };

        case FETCH_POSTS_SUCCESS :
            return {
                ...state,
                loading : false,
                posts: action.payload
            };

        case FETCH_POSTS_FAILURE :
            return {
                ...state,
                loading : false,
                error : action.payload
            };

        default : return state;

    }
};

export default postReducer;
