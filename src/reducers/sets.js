export default function reducerSets(state = [], action) {
    switch (action.type) {
        case 'FLASHCARD_SET_DELETE':
            return deleteSet(state, action.payload)
        case 'FLASHCARD_SET_CREATE':
            return [createSet(action.payload), ...state]
        case 'FLASHCARD_CREATE':
            const { setId, front, back } = action.payload
            return modifySet(state, setId, (set) => {
                const fc = createFlashcard(front, back)
                return {
                    ...set,
                    flashcards: [fc, ...set.flashcards]
                }
            })
        default:
            return state
    }
}

const deleteSet = (sets, id) => (
    sets.filter(set => set.id !== id)
)

const createSet = (name, id, flashcards = []) => {
    const testId = id || generateTestId()
    return {id: testId, name, flashcards}
}

const findSet = (sets, id) => (
    sets.find((set) => set.id = id)
)

const findSetIndex = (sets, id) => (
    sets.findIndex((set) => set.id = id)
)

const modifySet = (sets, id, transform) => {
    const index = findSetIndex(sets, id)
    return [
        ...sets.slice(0, findSetIndex),
        transform(findSet(sets, id)),
        ...sets.slice(index)
    ]
}

const generateTestId = () => Math.floor(Math.random() * Math.pow(10, 7))

// FLASHCARDS
const createFlashcard = (front, back, id) => {
    const testId = id || generateTestId()
    return {
        front,
        back,
        id: testId,
    }
}