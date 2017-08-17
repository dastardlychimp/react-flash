import React from 'react'
import { Form, Field } from 'redux-form'
// material-ui
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import AddIcon from 'material-ui-icons/Add'

import formDialog from './high/formDialog'
import { required } from '../helpers/validation'

const FlashcardFormDialog = formDialog('newFlashcard')
const validation = [
    required
]

function FaceField(props) {
    const { label, input, meta: { error, touched, dirty } } = props
    const visibleError = (touched || dirty) && !!error

    return <TextField
        inputProps = { input }
        label      = { label }
        required   = { true }
        multiline  = { true }
        rows       = { 4 }
        helperText = { visibleError && error }
        error      = { visibleError }
    />
}

function FlashcardContent(props) {
    return (
        <div>
            <div>
                <Field
                    name = 'faceA'
                    component = { FaceField }
                    type = 'textfield'
                    validate = { validation }
                    label = 'Flashcard Front'
                />
            </div>
            <div>
                <Field
                    name = 'faceB'
                    component = { FaceField }
                    type = 'textfield'
                    validate = { validation }
                    label = 'Flashcard Back'
                /> 
            </div>
        </div>
    )
}

function FlashcardButton(props) {
    return (
        <Button onClick={props.openDialog} fab>
            <AddIcon />
        </Button>
    )
}

function FlashcardNewForm(props) {
    const onSubmit = (form) => {
        props.onSubmit && props.onSubmit()
        console.log(form)
    }

    return (
        <FlashcardFormDialog
            title    = "Create Flashcard"
            onSubmit = { onSubmit }
            content  = { FlashcardContent }
            button   = { FlashcardButton }
        />
    )
}

export default FlashcardNewForm