export const required = value => ! value ? 'Required' : undefined


// Higher Order Validations
export const noneOf   = (prohibited, message) => {
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
    (value, _, { [prop]:prohibited }) => noneOf(prohibited, message)(value)
)