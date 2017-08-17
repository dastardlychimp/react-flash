import React from 'react'
import { connect } from 'react-redux'

// material-ui
import Button from 'material-ui/Button'

import FlashcardListItem from './FlashcardListItem'
import FlashcardNewForm from './FlashcardNewForm'

class FlashcardList extends React.Component {
    render() {
        return (
            <div>
                { 
                    this.props.flashcards.map((flashcard) => (
                        <FlashcardListItem
                            key = { flashcard.id }
                            flashcard = { flashcard } 
                        />
                    ))
                }
                <FlashcardNewForm />
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const setId = props.match.params.id
    const set   = state.sets.find((set) => set.id == setId)

    return {
        flashcards: set.flashcards
    }
}

export default connect(mapStateToProps)(FlashcardList)