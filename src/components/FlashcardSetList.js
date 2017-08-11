import React from 'react'
import { connect } from 'react-redux'

// material-ui
import List from 'material-ui/List/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import reactComponentWithOpenState from '../helpers/reactComponentWithOpenState'
import FlashcardSetListItem from './FlashcardSetListItem'
import FlashcardSetNew from './FlashcardSetNewForm'
import { deleteFlashcardSet } from '../actions/index'


class FlashcardSetList extends reactComponentWithOpenState(true) {
    constructor(props) {
        super(props)
        this.state = this.stateOpenInit()
    }

    render() {
        return (
            <div>
                <List subheader={<h1>Sets</h1>}>
                    { 
                        this.props.sets.map((set) => {
                            return <FlashcardSetListItem
                                key = { set.id }
                                deleteSet = { this.props.deleteFlashcardSet }
                                set = { set }
                            />
                        })
                    }
                </List>
                <Button onClick = { this.stateOpenTrue } fab>
                    <AddIcon />
                </Button>
                <FlashcardSetNew
                    open = { this.stateOpenGet() }
                    onCancel = { this.stateOpenFalse }
                    onSubmit = { this.stateOpenFalse }
                />
            </div>
        )
    }
}

function mapStateToProps({ sets }) {
    return { sets }
}

const mapDispatchToProps = {
    deleteFlashcardSet
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetList)