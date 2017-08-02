export const getFlashcardSet = () => ({
    type: 'FLASHCARD_SET_GET'
})

export const retrievedFlashcardSet = (sets) => ({
    type: 'FLASHCARD_SET_RETRIEVED',
    payload: sets
})