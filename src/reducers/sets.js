import * as rh from '../helpers/reducerHelpers'

export default function reducerSets(state = [], action) {
    switch (action.type) {
        case 'FLASHCARD_SET_DELETE':
            return rh.arrayDeleteById(state, action.payload)
        case 'FLASHCARD_SET_CREATE':
            return createSet(state, action)
        default:
            return state
    }
}

const createSet = (state, action) => {
    const newSet = rh.objectAdd(action.payload, 'id', rh.generateTestId())
    return rh.arrayAdd(state, newSet)
}