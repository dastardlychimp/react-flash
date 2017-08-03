import React from 'react'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ListItemText from 'material-ui/List/ListItem'

export default function(props) {
    return (
        <div>
            FlashcardSetList
            <List>
                <ListItem><ListItemText>George</ListItemText></ListItem>
                <ListItem>Mark</ListItem>
            </List>
        </div>
    )
}