import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import FlashcardSetList from './FlashcardSetList'

export default function App({store}) {
    return (
        <Provider store = { store }>
            <BrowserRouter>
                <Switch>
                    <Route path='/sets' component = { FlashcardSetList } />
                    <Route path='/'>
                        <Redirect to='/sets' />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

