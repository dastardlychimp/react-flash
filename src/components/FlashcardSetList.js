import React from 'react'
import { connect } from 'react-redux'

// material-ui
import List from 'material-ui/List/List'

import FlashcardSetListItem from './FlashcardSetListItem'
import { deleteFlashcardSet } from '../actions/index'

function FlashcardSetList(props) {
    const FlashcardItemWithActions = (set) => {
        return <FlashcardSetListItem
            key = { set.id }
            deleteSet = { props.deleteFlashcardSet }
            set = { set }
        />
    }

    return (
        <div>
            <List subheader={<h1>Sets</h1>}>
                { props.sets.map(FlashcardItemWithActions) }
            </List>
        </div>
    )
}

function mapStateToProps({ sets }) {
    return { sets }
}

const mapDispatchToProps = {
    deleteFlashcardSet
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetList)