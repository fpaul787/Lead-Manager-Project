// A store holds the whole state tree of your application
// The only way to change the state inside it is to
// dispatch an action on it.

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

// redux-thunk gives us
/// direct control over the dispatch method
/// so when we make a call to our actions
// thunk takes over and call then dispatch
// method
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
