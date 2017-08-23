import React from 'react'

// material-ui
import ListItem from 'material-ui/List/ListItem'
import ListItemText from 'material-ui/List/ListItemText'
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction'
import Button from 'material-ui/Button'
import ButtonIcon from 'material-ui/Button'
import Badge from 'material-ui/Badge'
import DeleteIcon from 'material-ui-icons/Delete'
import CreateIcon from 'material-ui-icons/Create'
import ChromeReaderModeIcon from 'material-ui-icons/ChromeReaderMode'

import reactComponentWithOpenState from '../helpers/reactComponentWithOpenState'
import ConfirmDelete from './ConfirmDelete'
import callableList from '../helpers/callableList'


class FlashcardSetListItem extends reactComponentWithOpenState(true) {
    constructor(props) {
        super(props)
        this.state     = this.stateOpenInit()
        this.deleteSet = this.props.deleteSet.bind(this, this.props.set.id)
    }

    render() {
        const set = this.props.set

        return(
            <ListItem
                divider
                button
                onClick = {}
            >
                 <ConfirmDelete
                    onDelete = { callableList(this.deleteSet, this.stateOpenFalse ) }
                    onCancel = { this.stateOpenFalse }
                    message = "Are you sure you want to delete this flashcard set?"
                    open = { this.stateOpenGet() }
                /> 
                <Badge badgeContent = { set.size } color = "primary">
                    <ChromeReaderModeIcon />
                </Badge>
                <ListItemText primary = { set.name } /> 
                <ListItemSecondaryAction>
                    <ButtonIcon>
                        <CreateIcon />
                    </ButtonIcon>
                    <ButtonIcon onClick = { this.stateOpenTrue } >
                        <DeleteIcon />
                    </ButtonIcon>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default FlashcardSetListItem