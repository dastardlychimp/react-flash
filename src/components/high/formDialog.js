import React from 'react'
import { reduxForm, Form, Field } from 'redux-form'
// material-ui
import Button from 'material-ui/Button'
import Dialog, { 
    DialogContent, 
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog'

import boundPropsComponent from './BoundPropsComponent'
import DialogWithOpenButton from '../DialogWithOpenButton'

function FormActions(props) {
    return (
        <div>
            <Button onClick = { props.closeDialog }>Cancel</Button>
            <Button type="submit">Submit</Button>
        </div>
    )
}

function FormDialogContent(props) {
    const {
        handleSubmit,
        onSubmit,
        title,
        content,
        actions = FormActions,
        ...rest
    } = props

    const submit = props.handleSubmit
        ? props.handleSubmit(onSubmit)
        : props.onSubmit

    return (
        <div>
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
        </div>
    )
}

const FormDialog = boundPropsComponent({ component: FormDialogContent })(DialogWithOpenButton)

export default function formDialog(formName) {
    return reduxForm({
        form: formName
    })(FormDialog)
}