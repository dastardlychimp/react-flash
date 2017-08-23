import React from 'react'
import { connect } from 'react-redux'

import FlashcardListItem from './FlashcardListItem'
import FlashcardNewForm from './FlashcardNewForm'
import { deleteFlashcard } from '../actions'

function FlashcardList(props) {
    const { setId, flashcards, deleteFlashcard } = props

    return (
        <div>
            { 
                flashcards.map((flashcard) => (
                    <FlashcardListItem
                        key = { flashcard.id }
                        flashcard = { flashcard }
                        onDelete = { deleteFlashcard.bind(this, flashcard.id) }
                    />
                ))
            }
            <FlashcardNewForm 
                setId = { setId }
            />
        </div>
    )
}

function mapStateToProps(state, props) {
    const setId = props.match.params.id
    const flashcards = state.flashcards.filter((flashcard) => flashcard.setId == setId)

    return {
        setId,
        flashcards
    }
}

const mapDispathToProps = {
    deleteFlashcard
}

export default connect(mapStateToProps, mapDispathToProps)(FlashcardList)