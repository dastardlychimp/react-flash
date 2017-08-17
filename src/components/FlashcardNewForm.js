import React from 'react'
import { Form, Field } from 'redux-form'
// material-ui
import TextField from 'material-ui/TextField'

import formDialog from './high/formDialog'
import ButtonNew from './ButtonNew'
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
    const { openDialog } = props
    return <ButtonNew onClick = { openDialog } /> 
}

function FlashcardNewForm(props) {
    const { onSubmit } = props

    return (
        <FlashcardFormDialog
            title    = 'Create Flashcard'
            content  = { FlashcardContent }
            button   = { FlashcardButton }
        />
    )
}

export default FlashcardNewForm