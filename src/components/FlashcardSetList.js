import React from 'react'
import { connect } from 'react-redux'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ListItemText from 'material-ui/List/ListItem'
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction'
import Button from 'material-ui/Button'
import ButtonIcon from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import CreateIcon from 'material-ui-icons/Create'

function FlashcardSetList(props) {
    return (
        <div>
            <List subheader={<h1>Sets</h1>}>
                { props.sets.map(FlashcardSetListItem) }
            </List>
        </div>
    )
}

function FlashcardSetListItem(set) {
    return(
        <ListItem
            key = { set.id }
            divider
            button
        >
            <ListItemText primary={ set.name } /> 
            <ListItemSecondaryAction>
                <ButtonIcon>
                    <CreateIcon />
                </ButtonIcon>
                <ButtonIcon>
                    <DeleteIcon />
                </ButtonIcon>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

function mapStateToProps({ sets }) {
    return { sets }
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps)(FlashcardSetList)