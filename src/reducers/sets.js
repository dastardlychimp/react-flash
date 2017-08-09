export default function reducerSets(state = [], action) {
    switch (action.type) {
        case 'FLASHCARD_SET_DELETE':
            return state.filter(set => set.id !== action.payload)
        default:
            return state
    }
}