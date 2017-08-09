import React from 'react'
import PropTypes from 'prop-types'

// material-ui
import Dialog, { DialogContent, DialogActions } from 'material-ui/Dialog'
import Button from 'material-ui/Button'

function CancelConfirmAlert(props) {
    return (
        <Dialog open = { props.open || false }>
            <DialogContent>
                { props.message }
            </DialogContent>
            <DialogActions>
                <Button onClick = { props.onCancel }>Cancel</Button>
                <Button onClick = { props.onConfirm }>{ props.actionName }</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CancelConfirmAlert