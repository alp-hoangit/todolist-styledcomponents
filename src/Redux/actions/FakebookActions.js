import { ADD_COMMENT } from "../types/FakebookTypes"


export const AddCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment
    }
}