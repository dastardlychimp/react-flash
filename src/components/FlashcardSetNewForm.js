import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form, Field } from 'redux-form'

//material-ui
import TextField from 'material-ui/TextField'

import formDialog from './high/formDialog'
import ButtonNew from './ButtonNew'
import callIfFunction from '../helpers/callIfFunction'
import { required, noneOfProps, testProps } from '../helpers/validation'
import { createFlashcardSet } from '../actions/index'
import { forms, formShow, formHide } from '../actions/forms'

const SetFormDialog = formDialog(forms.set)

const validation = [
    required,
    testProps(
        (props) => ! props.initialValues || ! props.initialValues.id,
        noneOfProps('setsNames', (value) => `You already have a set named ${value}`)
    )
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
        formClose,
        formOpen,
        open
    } = props

    const submit = (form, props) => {
        const { reset } = props
        createFlashcardSet(form)
        callIfFunction(onSubmit, form)
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
        sets,
        formVisibility: {[forms.set]: open }
    } = state

    return {
        setsNames: sets.map((set) => set.name),
        open,
        ...props
    }
}

const mapDispatchToProps = {
    createFlashcardSet,
    formClose: formHide.bind(this, forms.set),
    formOpen:  formShow.bind(this, forms.set)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetForm)