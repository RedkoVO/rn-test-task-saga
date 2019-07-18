import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchContacts } from '../../redux/actions/contacts'

import Header from '../../components/Header'
import Contacts from '../../components/Contacts'
import Button from '../../components/Button'

import './styles.css'

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
})

class ContactsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchContacts())
  }

  render() {
    const { contacts } = this.props

    return (
      <div className="contactsPage">
        <Header />
        <Contacts contacts={contacts} />
        <Button />
      </div>
    )
  }
}

ContactsPage.propTypes = {
  contacts: PropTypes.array,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}

export default connect(mapStateToProps)(ContactsPage)
