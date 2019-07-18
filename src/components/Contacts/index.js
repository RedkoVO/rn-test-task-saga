import React from 'react'
import PropTypes from 'prop-types'

import Contact from './components/Contact'
import LetterBar from './components/LetterBar'

import './styles.css'

const Contacts = ({ contacts }) => (
  <div className="contacts">
    {contacts.map(item => (
      <div id={item.letter} key={item.id}>
        <div className="title">{item.letter}</div>
        {item.contacts.map(info => (
          <Contact key={info.id} info={info} />
        ))}
      </div>
    ))}

    <LetterBar contacts={contacts} />
  </div>
)

Contacts.propTypes = {
  contacts: PropTypes.array
}

export default Contacts
