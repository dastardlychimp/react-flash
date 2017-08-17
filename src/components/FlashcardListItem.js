
import React from 'react'

// material-ui
import Card, { CardContent } from 'material-ui/Card'

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
                </Card>
            </div>
        )
    }
}

export default FlashcardListItem