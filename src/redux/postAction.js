import { CHANGE_POST } from "./postTypes";

export const changePost = ( postId = 1) => {
    return {
        type : CHANGE_POST,
        payload : postId
    }
}
