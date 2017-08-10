import React from 'react'
import { connect } from 'react-redux'

// material-ui
import List from 'material-ui/List/List'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import FlashcardSetListItem from './FlashcardSetListItem'
import FlashcardSetNew from './FlashcardSetNewForm'
import { deleteFlashcardSet } from '../actions/index'



function  FlashcardItemWithActions(set, deleteAction) {

}
class FlashcardSetList extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = { openCreate: false }
        this.createOpen = () => this.setState({ openCreate: true })
        this.closeOpen = () => this.setState({ openCreate: false })
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
                <Button onClick = { this.createOpen } fab>
                    <AddIcon />
                </Button>
                <FlashcardSetNew
                    open = { this.state.openCreate }
                    onCancel = { this.closeOpen }
                    onSubmit = { this.closeOpen }
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