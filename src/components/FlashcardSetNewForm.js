import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form, Field } from 'redux-form'

//material-ui
import TextField from 'material-ui/TextField'

import formDialog from './high/formDialog'
import ButtonNew from './ButtonNew'
import callIfFunction from '../helpers/callIfFunction'
import { required, noneOfProps } from '../helpers/validation'
import { createFlashcardSet } from '../actions/index'

const SetFormDialog = formDialog('newSet')
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
    const { openDialog } = props
    return <ButtonNew onClick = { openDialog } /> 
}

function FlashcardSetNewForm(props) {
    const { onSubmit, createFlashcardSet } = props

    const submit = (form, props) => {
        const { closeDialog, reset } = props
        createFlashcardSet(form.name)
        callIfFunction(onSubmit, form)
        closeDialog()
        reset()
    }
    
    return (
        <SetFormDialog
            title    = 'Create Set'
            content  = { SetContent }   
            button   = { SetButton }
            onSubmit = { submit }
        />
    )
}

function mapStateToProps(state, props) {
    return {
        setsNames: state.sets.map((set) => set.name),
        open: props.open || false
    }
}

const mapDispatchToProps = {
    createFlashcardSet
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetNewForm)