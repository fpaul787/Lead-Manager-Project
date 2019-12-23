import { combineReducers } from 'redux'
import leadsReducer from './leadsReducer'

// leadsReducer is some function
// (our state) that is being
// returned from leadsReducer.js
export default combineReducers({
    leadsReducer,
})
