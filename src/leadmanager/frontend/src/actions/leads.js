// where we make all our http request
import axios from 'axios'

import { createMessage, returnErrors } from './messages'
import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './types'
import { tokenConfig } from './auth'

// GET LEADS
// dispatch an action to our reducer
//making this async call is possible because
// of thunk

// getLeads returns a function
// Part 3 of thunk sequence
export const getLeads = () => (dispatch, getState) => {
    // request to api made
    // Part 2 of thunk sequence
    axios
        .get('/api/leads/', tokenConfig(getState))
        .then(res => {
            // Redux Thunk call function with
            // dispatch
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            })
        }) // once resolved, dispatch is called with action
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        )
}

// Delete lead
export const deleteLeads = id => (dispatch, getState) => {
    axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteLead: 'Lead Deleted' }))
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            })
        })
        .catch(err => console.log(err))
}

// ADD LEAD
export const addLead = lead => (dispatch, getState) => {
    axios
        .post('/api/leads/', lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: 'Lead Added' }))
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            })
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        )
}
