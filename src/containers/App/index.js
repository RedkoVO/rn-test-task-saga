import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../redux/sagas'
import rootReducer from '../../redux/reducers'

import RootRoute from './Routing/RootRoute'

class App extends Component {
  render() {
    const { history } = this.props
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    return (
      <Provider store={store}>
        <Router history={history}>
          <RootRoute />
        </Router>
      </Provider>
    )
  }
}

export default App
