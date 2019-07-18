import React from 'react'
import PropTypes from 'prop-types'
import Scrollchor from 'react-scrollchor'

import './styles.css'

const LetterBar = ({ contacts }) => (
  <div className="letterBar">
    {contacts.map(item => (
      <Scrollchor to={`#${item.letter}`} className="letterLink" key={item.id}>
        <div className="letter">{item.letter}</div>
      </Scrollchor>
    ))}
  </div>
)

LetterBar.propTypes = {
  contacts: PropTypes.array
}

export default LetterBar
