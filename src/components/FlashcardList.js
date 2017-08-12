import React from 'react'
import { connect } from 'react-redux'

// material-ui
import Button from 'material-ui/Button'

import FlashcardListItem from './FlashcardListItem'
import FlashcardNewForm from './FlashcardNewForm'

class FlashcardList extends React.Component {
    state = { open: false }

    open  = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

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
                <Button onClick = { this.open } >
                    Open
                </Button>
                <FlashcardNewForm 
                    open = { this.state.open }
                    onSubmit = { this.close }
                />
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