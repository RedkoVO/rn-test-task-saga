import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './index.css'

const initApp = () => {
  const history = createBrowserHistory()

  ReactDOM.render(
    <BrowserRouter>
      <App history={history} />
    </BrowserRouter>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

initApp()
