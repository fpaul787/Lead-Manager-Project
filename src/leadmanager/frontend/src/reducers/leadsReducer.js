import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js'

const initialState = {
    leads: [],
}

// action is passed from lead.js in actions
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload,
            }
        case DELETE_LEAD:
            return {
                ...state,
                // remember, we sent the id that we're deleting
                // as the payload from the action
                leads: state.leads.filter(lead => lead.id !== action.payload),
            }
        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, action.payload],
            }
        default:
            return state
    }
}
