import axios from 'axios';

export const getActivity = () => {
    return(dispatch) => {

        dispatch(fetchStart())

        axios.get('https://www.boredapi.com/api/activity/')
        .then(resp => {
            dispatch(fetchSuccess(resp.data))
        })
        .catch(err => {
            dispatch(fetchError(err));
        });
    }
}

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_ERROR = "FETCH ERROR"

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (activity) => {
    return({type:FETCH_SUCCESS, payload: activity})
}

export const fetchError= (errorMessage) => {
    return({type:FETCH_ERROR, payload: errorMessage})
}