import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import sets from './sets'

export default combineReducers({
    form,
    sets
})