import { CREATE_MESSAGE } from './types'

// CREATE MESSAGE
export const createMessage = msg => {
    return {
        // no need to pass dispatch
        // no async call being made

        type: CREATE_MESSAGE,
        payload: msg,
    }
}
