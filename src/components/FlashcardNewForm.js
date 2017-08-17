import React from 'react'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
// material-ui
import TextField from 'material-ui/TextField'

import formDialog from './high/formDialog'
import ButtonNew from './ButtonNew'
import callIfFunction from '../helpers/callIfFunction'
import { required } from '../helpers/validation'
import { createFlashcard } from '../actions'

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
                    name = 'front'
                    component = { FaceField }
                    type = 'textfield'
                    validate = { validation }
                    label = 'Flashcard Front'
                />
            </div>
            <div>
                <Field
                    name = 'back'
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
    const { onSubmit, createFlashcard, setId } = props

    const submit = (form, props) => {
        console.log(form)
        createFlashcard(form)
        callIfFunction(onSubmit, form)
        props.reset()
        props.closeDialog()
    }

    return (
        <FlashcardFormDialog
            title    = 'Create Flashcard'
            content  = { FlashcardContent }
            button   = { FlashcardButton }
            onSubmit = { submit }
            initialValues = { { setId } }
        />
    )
}

function mapStateToProps(state, props) {
    const { setId } = props

    return {
        setId,
    }
}

const mapDispatchToProps = {
    createFlashcard
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardNewForm)