import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import {
    HomePage,
    LoginPage,
    SignUpPage,
} from './ui/uiComponents'

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/signUp' component={SignUpPage} />
                <Route path='/home/:username' component={HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
