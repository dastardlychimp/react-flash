import React from 'react'
import { connect } from 'react-redux'

import FlashcardListItem from './FlashcardListItem'

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
        </div>
    )
}

function mapStateToProps(state, props) {
    const setId = props.match.params.id
    const set   = state.sets.find((set) => set.id == setId)

    return {
        flashcards: set.flashcards
    }
}

export default connect(mapStateToProps)(FlashcardList)