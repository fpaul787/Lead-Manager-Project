import { CREATE_MESSAGE, GET_ERRORS } from './types'

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        // no need to pass dispatch
        // no async call being made

        type: CREATE_MESSAGE,
        payload: msg,
    }
}

// ACTION TO RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status },
    }
}
