import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import FlashcardSetList from './FlashcardSetList'

export default function App({store}) {
    return (
        <Provider store = { store }>
            <BrowserRouter>
                <div>
                    <Route path='/'>
                        Hello World!
                        <Link to='/sets'>Flashcard Sets</Link>
                    </Route>
                    <Route path = '/sets' component = { FlashcardSetList } />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

