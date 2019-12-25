import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'
import errors from './errors'
import messages from './messages'

// leadsReducer is some function
// (our state) that is being
// returned from leadsReducer.js
export default combineReducers({
    leadsReducer,
    errors,
    messages,
})
