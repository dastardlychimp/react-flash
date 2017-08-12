import React from 'react'
import { reduxForm, Form, Field } from 'redux-form'
// material-ui
import Dialog, { 
    DialogContent, 
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog'

function FormDialog(props) {
    console.log(props)
    const submit = props.handleSubmit
        ? props.handleSubmit(props.onSubmit)
        : props.onSubmit

    return (
        <Dialog open = { props.open }>
            <DialogTitle>
                { props.title }
            </DialogTitle>
            <form onSubmit={submit}>
                <DialogContent>
                    { React.createElement( props.content, props ) }
                </DialogContent>
                <DialogActions>
                    { React.createElement( props.actions, props ) }
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