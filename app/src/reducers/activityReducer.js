import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/activityActions";

const InitialState = { // create InitialState and what goes inside the object

    activity: { 
        activity:'Learn how to beatbox',
        type: "recreational"
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = InitialState, action) => { // set state to InitialState
    switch (action.type) {
        case(FETCH_START):
            return ({
                ...state, 
                activity: {},
                isFetching: true,
                error: ''
            });

        case(FETCH_SUCCESS):
            return ({
                ...state,
                activity: action.payload,
                isFetching: false,
                error: ''
            });

        case(FETCH_ERROR):
            return ({
                ...state,
                activity: {},
                isFetching: false,
                error: action.payload
            });

        default:
            return state;
    }
}