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

export const createFlashcardSet = (name)  => ({
    type: 'FLASHCARD_SET_CREATE',
    payload: name
})