import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import ContactsPage from '../../ContactsPage'

class RootRoute extends Component {
  render() {
    const { location } = this.props

    return (
      <Switch location={location}>
        <Route path={'/'} component={ContactsPage} />
      </Switch>
    )
  }
}

export default RootRoute
