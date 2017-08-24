import {
    initialize
} from 'redux-form'

export const forms = {
    set: 'setForm',
    flashcard: 'flashcardForm'
}

export const initializeSetForm = (data) => {
    return initialize(forms.set, data)
}

export const formShow = (form) => {
    return {
        type: 'FORM_SHOW',
        payload: form
    }
}

export const formHide = (form) => {
    return {
        type: 'FORM_HIDE',
        payload: form
    }
}

export const initialValuesSet = (set) => {
    return initialize(forms.set, set)
}