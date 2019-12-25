import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Header from './layout/Header'
import Dashboard from './leads/Dashboard'
import Alerts from './layout/Alerts'

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
}

// Provider makes Redux store available
// to rest of my app
import { Provider } from 'react-redux'
import store from '../store'
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
