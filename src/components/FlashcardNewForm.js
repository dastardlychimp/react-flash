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
import { forms, formShow, formHide } from '../actions/forms'

const FlashcardFormDialog = formDialog(forms.flashcard)
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
    const { formOpen } = props
    return <ButtonNew onClick = { formOpen } /> 
}

function FlashcardNewForm(props) {
    const {
        open,
        onSubmit,
        createFlashcard,
        setId,
        formOpen,
        formClose,
    } = props

    const submit = (form, props) => {
        createFlashcard(form)
        callIfFunction(onSubmit, form)
        formClose()
        props.reset()
    }

    return (
        <div>
        <FlashcardFormDialog
            title    = 'Create Flashcard'
            content  = { FlashcardContent }
            button   = { FlashcardButton }
            onSubmit = { submit }
            onCancel = { formClose }
            initialValues = { { setId } }
            open = { open }
        />
        <FlashcardButton formOpen = { formOpen } />
        </div>
    )
}

function mapStateToProps(state, props) {
    const { setId } = props
    const {
        formVisibility: { [forms.flashcard]: open }
    } = state

    return {
        setId,
        open
    }
}

const mapDispatchToProps = {
    createFlashcard,
    formOpen:  formShow.bind(this, forms.flashcard),
    formClose: formHide.bind(this, forms.flashcard)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardNewForm)