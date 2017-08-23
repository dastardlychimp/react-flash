import * as rh from '../helpers/reducerHelpers'

export default function reducerFlashcards(state = [], action) {
    switch(action.type) {
        case 'FLASHCARD_CREATE':
            return createFlashcard(state, action.payload)
        case 'FLASHCARD_DELETE':
            return rh.arrayDeleteById(state, action.payload)
        case 'FLASHCARD_SET_DELETE':
            return rh.arrayDeleteByProp(state, 'setId', action.payload)
        default:
            return state
    }
}

const createFlashcard = (state, flashcard) => {
    const fc = rh.objectAdd(flashcard, 'id', rh.generateTestId())
    return rh.arrayAdd(state, fc)
}