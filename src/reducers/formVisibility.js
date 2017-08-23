import * as rh from '../helpers/reducerHelpers'
import { forms } from '../actions/forms'

const defaultState = Object.values(forms).reduce((acc, key) => {
    acc[key] = false
    return acc
}, {})

export default function formVisibility(state = defaultState, action) {
    switch (action.type) {
        case 'FORM_SHOW':
            return rh.objectReplace(state, action.payload, true)
        case 'FORM_HIDE':
            return rh.objectReplace(state, action.payload, false)
        default:
            return state
    }
}