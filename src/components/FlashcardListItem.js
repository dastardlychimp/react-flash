
import React from 'react'

// material-ui
import Card, { CardContent, CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import callableList from '../helpers/callableList'
import ConfirmDelete from './ConfirmDelete'

// { id: 12521, front: 'Moo?', back: 'Cow' }
class FlashcardListItem extends React.PureComponent {
    state = { face: true, openDelete: false }

    flip = () => {
        this.setState({ face: ! this.state.face })
    }

    toggleDelete = () => {
        this.setState({ openDelete: !this.state.openDelete })
    }

    render() {
        const { flashcard, onDelete } = this.props

        return (
            <div>
                <Card onClick = { this.flip }>
                    <CardContent>
                        { this.state.face ? flashcard.front : flashcard.back }
                    </CardContent>
                    <CardActions>
                        <IconButton onClick={ this.toggleDelete }>
                            <DeleteIcon />
                        </IconButton>
                        <ConfirmDelete
                            onDelete = { callableList(onDelete, this.toggleDelete) }
                            onCancel = { this.toggleDelete }
                            message = 'Are you sure you want to delete this flashcard?'
                            open = { this.state.openDelete }
                        />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default FlashcardListItem