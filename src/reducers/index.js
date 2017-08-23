import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import sets from './sets'
import flashcards from './flashcards'

export default combineReducers({
    form,
    sets,
    flashcards,
})