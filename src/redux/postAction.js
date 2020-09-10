import { CHANGE_POST,
        GET_POST_BY_ID,
        FETCH_POSTS_FAILURE,
        FETCH_POSTS_REQUEST,
        FETCH_POSTS_SUCCESS }  from "./postTypes";

export const changePost = ( postId = 1) => {
    return {
        type : CHANGE_POST,
        payload : postId
    }
}

export const fetchPosts = () => {
    return (dispatch) => {

        dispatch(fetchPostsRequest());

        return fetch( "https://jsonplaceholder.typicode.com/posts" ).then( response => response.json()).then(
            posts => {
                // dall'url a cui viene fatta la richiesta arrivano 100 elementi
                // vengono presi solo i primi 3 e viene aggiunta la proprita' per contenere
                // il percorso alla foto
                posts = posts.slice(0,5);
                posts.map( post => post.imgPath = "https://picsum.photos/id/" + post.id + "/100/150"  ) ;

                dispatch( fetchPostsSuccess(posts) );
            } ).catch( error => {
                    dispatch( fetchPostsFailure(error.message) );
                }
            )
    }
}

export const fetchPostsRequest = () => {
    return {
        type : FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = posts => {
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : posts
    }
}

export const fetchPostsFailure = error => {
    return {
        type : FETCH_POSTS_FAILURE,
        payload : error
    }
}

export const getPostById = post => {
    return {
        type : GET_POST_BY_ID,
        payload : post
    }
}


