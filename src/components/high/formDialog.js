import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Form, Field } from 'redux-form'
// material-ui
import Button from 'material-ui/Button'
import Dialog, { 
    DialogContent, 
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog'

import DialogWithOpenButton from '../DialogWithOpenButton'
import { formShow, formHide } from '../../actions/forms'

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
        formHide,
        actions = FormActions,
        ...rest
    } = props

    const submit = handleSubmit((form, ...args) => {
        formHide()
        onSubmit(form, props, ...args)
    })

    const cancel = (...args) => {
        formHide()
        onCancel(...args)
    }

    return (
        <Dialog 
            open = { open }
            onRequestClose = { cancel }
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
    const mapDispatchToProps = {
        formShow: formShow.bind(this, formName),
        formHide: formHide.bind(this, formName)
    }

    const form = reduxForm({
        form: formName
    })(FormDialog)

    return connect(null, mapDispatchToProps)(form)
}