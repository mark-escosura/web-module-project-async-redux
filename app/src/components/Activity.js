import React from 'react';
import axios from 'axios'

import { connect } from 'react-redux'

const Activity = ({ activity, isFetching, error, dispatch }) => {

    
    axios.get('https://www.boredapi.com/api/activity/')
        .then(resp => {
            console.log(resp.data);
        })
        .catch(err => {
            console.log(err)
        })

    return (
        <div className='container'>
            <h1>Activity 😁</h1>
            <h2>**Activity goes here **</h2>
            <button className='button'>What To Do?</button>
            <p>⬆ Every time I click this button ⬆ it will give me a new activity ⬆</p>
        </div>
        
    )
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return{
//         activity: state.activity
//     }
// }

export default Activity;