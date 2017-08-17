
import React from 'react'

// material-ui
import Card, { CardContent, CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

// { id: 12521, front: 'Moo?', back: 'Cow' }
class FlashcardListItem extends React.PureComponent {
    state = { face: true }

    flip = () => {
        this.setState({ face: ! this.state.face })
    }

    render() {
        const { flashcard } = this.props

        return (
            <div>
                <Card onClick = { this.flip }>
                    <CardContent>
                        { this.state.face ? flashcard.front : flashcard.back }
                    </CardContent>
                    <CardActions>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default FlashcardListItem