import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import App from './components/App'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const testState = {
    sets: [
        {
            id: 15214,
            name: 'Farm Animals',
            flashcards: [
                { id: 12521, faceA: 'Moo?', faceB: 'Cow' },
                { id: 35251, faceA: 'Quack?', faceB: 'Duck'}
            ]
        },
        {
            id: 62,
            name: 'Hess Family',
            flashcards: [
                { id: 14, faceA: 'Oldest Child', faceB: 'Darien' },
                { id: 35251, faceA: 'Youngest Child', faceB: 'Jameson'}
            ]
        }
    ]
}

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, testState, middleware)

function init() {
    createContainer();
    ReactDOM.render(<App store={store} />, document.querySelector('#container'))
    console.log('rendered')
}

function createContainer() {
    let div = document.createElement('div')
    div.setAttribute('id', 'container')
    document.body.appendChild(div)
    return div
}

document.addEventListener('DOMContentLoaded', init, false)