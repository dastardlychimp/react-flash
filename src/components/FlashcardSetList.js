import React from 'react'
import { connect } from 'react-redux'

// material-ui
import List from 'material-ui/List/List'

import FlashcardSetListItem from './FlashcardSetListItem'
import FlashcardSetNew from './FlashcardSetNewForm'
import { deleteFlashcardSet } from '../actions/index'


function FlashcardSetList(props) {
    return (
        <div>
            <List subheader={<h1>Sets</h1>}>
                { 
                    props.sets.map((set) => {
                        return <FlashcardSetListItem
                            key = { set.id }
                            deleteSet = { props.deleteFlashcardSet }
                            set = { set }
                        />
                    })
                }
            </List>
            <FlashcardSetNew
            />
        </div>
    )
}

function setSize(setId, flashcards) {
    return flashcards.filter((fc) => fc.setId == setId).length
}

function mapStateToProps(state) {
    const sets = state.sets.map((set) => {
        set.size = setSize(set.id, state.flashcards)
        return set
    })
    return { sets }
}

const mapDispatchToProps = {
    deleteFlashcardSet
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetList)