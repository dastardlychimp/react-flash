import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form, Field } from 'redux-form'

//material-ui
import TextField from 'material-ui/TextField'

import formDialog from './high/formDialog'
import ButtonNew from './ButtonNew'
import callIfFunction from '../helpers/callIfFunction'
import { required, noneOfProps } from '../helpers/validation'
import { createFlashcardSet, updateFlashcardSet } from '../actions/index'
import { forms, formShow, formHide } from '../actions/forms'

const SetFormDialog = formDialog(forms.set)
const validation = [
    required,
    noneOfProps('setsNames', value => `You already have a set named ${value}`)
]

function NameField(field) {
    const { input, meta: { error, touched, dirty } } = field
    const visibleError = (touched || dirty) && !!error

    return (
        <div>
            <TextField
                label = 'Set Name'
                type  = 'text'
                error = { visibleError }
                InputProps = { input }
                helperText = { visibleError && error }
                autoComplete ='off'
                autoFocus
            />
        </div>
    )
}

function SetContent(props) {
    return (
        <Field 
            name       = 'name' 
            component  = { NameField }
            validate   = { validation }
        />
    )
}

function SetButton(props) {
    const { formOpen } = props
    return <ButtonNew onClick = { formOpen } /> 
}


function FlashcardSetForm(props) {
    const {
        setsNames,
        onSubmit,
        createFlashcardSet,
        updateFlashcardSet,
        formClose,
        formOpen,
        open
    } = props

    const action = props.update
        ? updateFlashcardSet
        : createFlashcardSet

    const submit = (form, props) => {
        const { closeDialog, reset } = props
        action(form)
        callIfFunction(onSubmit, form)
        formClose()
        reset()
    }
    
    return (
        <div>
            <SetFormDialog
                title     = 'Create Set'
                content   = { SetContent }   
                onSubmit  = { submit }
                onCancel  = { formClose }
                formOpen  = { formOpen }
                open      = { open }
                setsNames = { setsNames }
            />
            <SetButton 
                formOpen = { formOpen }
            />
        </div>
    )
}

function mapStateToProps(state, props) {
    const {
        initialValues = {},
        ...rest
    } = props

    const {
        sets,
        formVisibility: {[forms.set]: open }
    } = state

    return {
        setsNames: sets.map((set) => set.name),
        open,
        initialValues,
        ...rest
    }
}

const mapDispatchToProps = {
    createFlashcardSet,
    updateFlashcardSet,
    formClose: formHide.bind(this, forms.set),
    formOpen:  formShow.bind(this, forms.set)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetForm)