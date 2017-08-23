import React from 'react'
import { reduxForm, Form, Field } from 'redux-form'
// material-ui
import Button from 'material-ui/Button'
import Dialog, { 
    DialogContent, 
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog'

import DialogWithOpenButton from '../DialogWithOpenButton'

function FormActions(props) {
    return (
        <div>
            <Button onClick = { props.onCancel }>Cancel</Button>
            <Button type="submit">Submit</Button>
        </div>
    )
}

function FormDialog(props) {
    const {
        open,
        handleSubmit,
        onSubmit,
        title,
        content,
        actions = FormActions,
        ...rest
    } = props

    const submit = handleSubmit((form) => onSubmit(form, props))

    return (
        <Dialog 
            open = { open }
            onRequestClose = { props.onCancel }
        >
            <DialogTitle>
                { title }
            </DialogTitle>
            <form onSubmit = { submit }>
                <DialogContent>
                    { React.createElement( content, rest ) }
                </DialogContent>
                <DialogActions>
                    { React.createElement( actions, rest ) }
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default function formDialog(formName) {
    return reduxForm({
        form: formName
    })(FormDialog)
}