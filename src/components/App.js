import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlashcardSetList from './FlashcardSetList'

export default function App({store}) {
    return (
        <Provider store = { store }>
            {/* <MuiThemeProvider> */}
                <BrowserRouter>
                    <Switch>
                        <Route path='/sets' component = { FlashcardSetList } />
                        <Route path='/'>
                            <Redirect to='/sets' />
                        </Route>
                    </Switch>
                </BrowserRouter>
            {/* </MuiThemeProvider> */}
        </Provider>
    )
}

