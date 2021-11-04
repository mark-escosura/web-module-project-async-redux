import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { getActivity , fetchError } from '../actions/activityActions';

const Activity = ({ activity, isFetching, error, dispatch }) => {

    useEffect(()=> {
        dispatch(getActivity());
      }, []);

    if (error) {
        return <h2>Oh no! Error 🥺 </h2>
    }
    
    if (isFetching) {
        return <h2>Currently looking for something to do.. 🧐</h2>
    }

    const handleClick = () => {
        dispatch(getActivity());
    }

    return (
        <div className='container'>
            <h1>Give me something to do! 😁</h1>
            <h2><strong>Activity:</strong> {activity.activity}</h2>
            <h3>Type: {activity.type}</h3>
            <button className='activityButton' onClick={handleClick} >What To Do?</button>
            <p>⬆ Every time I click this button ⬆ it will give me a new activity ⬆</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.activity);
    return{
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Activity);