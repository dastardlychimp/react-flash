import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form, Field } from 'redux-form'

//material-ui
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, { DialogContent, DialogActions, DialogTitle }from 'material-ui/Dialog'

import { required, noneOfProps } from '../helpers/validation'
import { createFlashcardSet } from '../actions/index'


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

function FlashcardSetNewForm(props) {
    const submit = (form) => {
        props.createFlashcardSet(form.name)
        props.onSubmit()
        props.reset()
    }

    return (
        <Dialog open = { props.open }>
            <DialogTitle>
                Create Flashcard Set
            </DialogTitle>
            <form onSubmit={props.handleSubmit(submit)}>
                <DialogContent>
                    <Field 
                        name       = 'name' 
                        component  = { NameField }
                        validate   = { validation }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick= {props.onCancel}>Cancel</Button>
                    <Button type = 'submit' color="primary">Submit</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const CreateForm = reduxForm({ 
    form: 'newSet',
})(FlashcardSetNewForm)

function mapStateToProps(state, props) {
    return {
        setsNames: state.sets.map((set) => set.name),
        open: props.open || false
    }
}

const mapDispatchToProps = {
    createFlashcardSet
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)