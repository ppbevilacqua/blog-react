import { CHANGE_POST } from "./postTypes";

const initialState = {
    currentIdPost : 1,
    lastPostsViewed : []
}

const postReducer = ( state = initialState, action) => {

    switch(action.type){
        case CHANGE_POST:
            state = {
                ...state,
                currentIdPost: action.payload,
                lastPostsViewed: [...state.lastPostsViewed, action.payload]
            };
    }
    return state;
};

export default postReducer;
