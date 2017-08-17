import React from 'react'
// material-ui
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

export default function ButtonNew(props) {
    return (
        <Button {...props}>
            <AddIcon />
        </Button>
    )
}