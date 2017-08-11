import React from 'react'

const defaultOpenProp  = '_open'
const defaultOpenState = false

const reactComponentWithOpenState = (pureComponent = false) => {
    const baseClass = pureComponent
        ? React.PureComponent
        : React.Component

    return class extends baseClass {
        stateOpenInit(state = {}, props = defaultOpenProp) {
            if ( props === defaultOpenProp ) {
                this.stateOpenTrue   = this.stateOpenTrue.bind(this, defaultOpenProp)
                this.stateOpenFalse  = this.stateOpenFalse.bind(this, defaultOpenProp)
                this.stateOpenGet    = this.stateOpenGet.bind(this, defaultOpenProp)
                this.stateOpenToggle = this.stateOpenToggle.bind(this, defaultOpenProp)
            }

            const openState = Array.isArray(props)
                ? props.reduce((acc, prop) => ({ ...acc, [prop]: defaultOpenState }), {})
                : { [props]: defaultOpenState }

            return { ...openState, ...state }
        }

        stateOpenTrue(prop) {
            return this.setState({ [prop]: true })
        }

        stateOpenFalse(prop) {
            return this.setState({ [prop]: false })
        }

        stateOpenToggle(prop) {
            return this.setState({ [prop]: !this.state[prop] })
        }

        stateOpenGet(prop) {
            return this.state[prop]
        }
    }
}

export default reactComponentWithOpenState