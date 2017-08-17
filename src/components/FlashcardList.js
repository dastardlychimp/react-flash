import React from 'react'
import { connect } from 'react-redux'

import FlashcardListItem from './FlashcardListItem'
import FlashcardNewForm from './FlashcardNewForm'

function FlashcardList(props) {
    return (
        <div>
            { 
                props.flashcards.map((flashcard) => (
                    <FlashcardListItem
                        key = { flashcard.id }
                        flashcard = { flashcard } 
                    />
                ))
            }
            <FlashcardNewForm 
                setId = { props.setId }
            />
        </div>
    )
}

function mapStateToProps(state, props) {
    const setId = props.match.params.id
    const set   = state.sets.find((set) => set.id == setId)

    return {
        setId,
        flashcards: set.flashcards
    }
}

export default connect(mapStateToProps)(FlashcardList)