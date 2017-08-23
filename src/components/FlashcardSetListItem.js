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
import UnstyledLink from './UnstyledLink'
import FlashcardSetForm from './FlashcardSetNewForm'
import callableList from '../helpers/callableList'

class FlashcardSetListItem extends React.PureComponent {
    state     = { openDelete: false }
    deleteSet = this.props.deleteSet.bind(this, this.props.set.id)

    toggleDelete = (e) => {
        this.setState({ openDelete: ! this.state.openDelete})
        e.preventDefault()
    }

    openSetForm = (e) => {
        e.preventDefault()
    }

    render() {
        const set = this.props.set

        return(
            <UnstyledLink to = {`/sets/${set.id}`}>
                <ListItem
                    divider
                    button
                >
                    <ConfirmDelete
                        onDelete = { callableList(this.deleteSet, this.toggleDelete) }
                        onCancel = { this.toggleDelete }
                        message = "Are you sure you want to delete this flashcard set?"
                        open = { this.state.openDelete }
                    /> 
                    <Badge badgeContent = { set.size } color = "primary">
                        <ChromeReaderModeIcon />
                    </Badge>
                    <ListItemText primary = { set.name } /> 
                    <ListItemSecondaryAction>
                        <ButtonIcon onClick = { this.openSetForm }>
                            <CreateIcon />
                        </ButtonIcon>
                        <ButtonIcon onClick = { this.toggleDelete } >
                            <DeleteIcon />
                        </ButtonIcon>
                    </ListItemSecondaryAction>
                </ListItem>
            </UnstyledLink>
        )
    }
}

export default FlashcardSetListItem