export const required = value => ! value ? 'Required' : undefined


// Higher Order Validations
export const noneOf = (prohibited, message) => {
    return value => {
        if ( Array.isArray(prohibited) && prohibited.includes(value) ) {
            return typeof message === 'function' ? message(value) : message
        }
        else {
            return undefined
        }
    }
}

export const noneOfProps = (prop, message) => (
    (value, _, { [prop]:prohibited }) => (
        noneOf(prohibited, message)(value)
    )
)

export const testProps = (cbContains, validation) => {
    return (value, _allValues, props) => {
        return cbContains(props)
            ? validation(value, _allValues, props)
            : undefined
    }
}

export const ifProp = (prop, validation) => (
    testProps((props) => props[prop], validation)
)