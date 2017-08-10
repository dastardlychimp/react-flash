export default function reducerSets(state = [], action) {
    switch (action.type) {
        case 'FLASHCARD_SET_DELETE':
            return state.filter(set => set.id !== action.payload)
        case 'FLASHCARD_SET_CREATE':
            const testId = Math.floor(Math.random() * Math.pow(10, 7))
            return [{ id: testId, name: action.payload, flashcards: []}, ...state]
        default:
            return state
    }
}