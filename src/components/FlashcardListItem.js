
import React from 'react'

// material-ui
import Card, { CardContent } from 'material-ui/Card'

// { id: 12521, faceA: 'Moo?', faceB: 'Cow' }
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
                        { this.state.face ? flashcard.faceA : flashcard.faceB }
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default FlashcardListItem