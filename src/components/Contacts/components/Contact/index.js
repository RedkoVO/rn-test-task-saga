import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AvatarIcon from '../../../../assets/images/avatar1.png'

import './styles.css'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: true
    }
  }

  toggleCheck = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked
    }))
  }

  render() {
    const { info } = this.props
    const { isChecked } = this.state

    return (
      <div className="contact">
        <img src={AvatarIcon} className="avatar" alt="" />
        <div className="info">
          <div className="name">{info.name}</div>
          <div className="phone">{info.phone}</div>
        </div>
        <span onClick={this.toggleCheck}>
          <input type="checkbox" checked={isChecked} readOnly />
          <span />
        </span>
      </div>
    )
  }
}

Contact.propTypes = {
  info: PropTypes.object
}

export default Contact
