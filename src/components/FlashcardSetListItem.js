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

import ConfirmDelete from './ConfirmDelete'
import callableList from '../helpers/callableList'


class FlashcardSetListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { confirmDeleteOpen: false }

        this.deleteSet          = this.props.deleteSet.bind(this, this.props.set.id)
        this.confirmDeleteOpen  = () => this.setState({ confirmDeleteOpen: true })
        this.confirmDeleteClose = () => this.setState({ confirmDeleteOpen: false })
    }

    render() {
        const set = this.props.set

        return(
            <ListItem
                divider
                button
            >
                 <ConfirmDelete
                    onDelete = { callableList(this.deleteSet, this.confirmDeleteClose) }
                    onCancel = { this.confirmDeleteClose }
                    message = "Are you sure you want to delete this flashcard set?"
                    open = { this.state.confirmDeleteOpen }
                /> 
                <Badge badgeContent = { set.flashcards.length } color = "primary">
                    <ChromeReaderModeIcon />
                </Badge>
                <ListItemText primary = { set.name } /> 
                <ListItemSecondaryAction>
                    <ButtonIcon>
                        <CreateIcon />
                    </ButtonIcon>
                    <ButtonIcon onClick = { this.confirmDeleteOpen } >
                        <DeleteIcon />
                    </ButtonIcon>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default FlashcardSetListItem