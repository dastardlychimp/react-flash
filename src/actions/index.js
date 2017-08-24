export const getFlashcardSet = () => ({
    type: 'FLASHCARD_SET_GET'
})

export const retrievedFlashcardSet = (sets) => ({
    type: 'FLASHCARD_SET_RETRIEVED',
    payload: sets
})

export const deleteFlashcardSet = (setId) => ({
    type: 'FLASHCARD_SET_DELETE',
    payload: setId
})

export const createFlashcardSet = (set)  => ({
    type: 'FLASHCARD_SET_CREATE',
    payload: set
})

export const createFlashcard = ({setId, front, back}) => ({
    type: 'FLASHCARD_CREATE',
    payload: { setId, front, back }
})

export const deleteFlashcard = (flashcardId) => ({
    type: 'FLASHCARD_DELETE',
    payload: flashcardId
})