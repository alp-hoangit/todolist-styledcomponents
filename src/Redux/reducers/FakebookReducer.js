import { ADD_COMMENT } from "../types/FakebookTypes";

/* eslint-disable default-case */
const stateDefault = {
    comments: [
        { name: 'Yone', content: 'Hi Yasuo!', avatar: `https://i.pravatar.cc/150?u=yone` },
        { name: 'Yasuo', content: 'Hi bro!', avatar: `https://i.pravatar.cc/150?u=yasuo` },
    ]
}

const FakebookReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            console.log(action.userComment);
            state.comments = [...state.comments, action.userComment];
            return { ...state };
        }
    }

    return { ...state };
}

export default FakebookReducer;