import React from 'react'
import { Form, Field } from 'redux-form'
// material-ui
import Button from 'material-ui/Button'

import formDialog from './high/formDialog'

const FlashcardFormDialog = formDialog('newFlashcard')

function FaceField(props) {
    return <textarea />
}

function FlashcardContent(props) {
    return (
        <div>
            <Field
                name = 'faceA'
                component = { FaceField }
            />
            <Field
                name = 'faceB'
                component = { FaceField }
            />
        </div>
    )
}

function FlashcardActions(props) {
    return (
        <div>
            <Button onClick = { props.onCancel }>Cancel</Button>
            <Button type="submit">Submit</Button>
        </div>
    )
}

function FlashcardNewForm(props) {
    const onSubmit = (form) => {
        props.onSubmit && props.onSubmit()
        console.log(form)
    }

    return (
        <FlashcardFormDialog
            title    = "Create Flashcard"
            onSubmit = { onSubmit }
            content  = { FlashcardContent }
            actions  = { FlashcardActions }
            open     = { props.open }
        />
    )
}

export default FlashcardNewForm
// export default FormDialogWrapper(FlashcardNewForm)