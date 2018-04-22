import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './views/login'
import Dashboard from './views/dashboard'

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route  path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
)

export default Main