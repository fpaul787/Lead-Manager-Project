// where we make all our http request
import axios from 'axios'

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types'

// GET LEADS
// dispatch an action to our reducer
//making this async call is possible because
// of thunk

// getLeads returns a function
// Part 3 of thunk sequence
export const getLeads = () => dispatch => {
    // request to api made
    // Part 2 of thunk sequence
    axios
        .get('/api/leads/')
        .then(res => {
            // Redux Thunk call function with
            // dispatch
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            })
        }) // once resolved, dispatch is called with action
        .catch(err => console.log(err))
}

// Delete lead
export const deleteLeads = id => dispatch => {
    axios
        .delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            })
        })
        .catch(err => console.log(err))
}

// ADD LEAD
export const addLead = lead => dispatch => {
    axios
        .post('/api/leads/', lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            })
        })
        .catch(err => console.log(err))
}
