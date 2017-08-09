import React from 'react'

import CancelConfirmAlert from './CancelConfirmAlert'

function ConfirmDelete(props) {
    const { onDelete, onCancel, message, ...rest } = props
    return <CancelConfirmAlert
        actionName = "Delete"
        onConfirm  = { onDelete }
        onCancel   = { onCancel }
        message    = { message }
        { ...rest }
    />
}

export default ConfirmDelete