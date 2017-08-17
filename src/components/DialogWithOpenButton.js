import React from 'react'

//material-ui
import Dialog from 'material-ui/Dialog'

import callableList from '../helpers/callableList'

class DialogWithOpenButton extends React.PureComponent {
    state = { open: this.props.initialState || false }

    close = () => this.setState({ open: false })

    open = () => this.setState({ open: true })

    render() {
        const nextProps = {
            closeDialog: this.close,
            ...this.props
        }

        return (
            <div>
                <Dialog 
                    open = { this.state.open }
                    onRequestClose = { this.close }
                >
                    {
                        React.createElement(this.props.component, nextProps)
                    }
                </Dialog>
                { React.createElement(this.props.button, { openDialog: this.open }) }
            </div>
        )
    }
}

export default DialogWithOpenButton