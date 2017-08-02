import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import App from './components/App'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, middleware)

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