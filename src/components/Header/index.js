import React from 'react'

import ReturnIcon from '../../assets/images/Return.png'
import SettingIcon from '../../assets/images/Setting.png'

import './styles.css'

const Header = () => (
  <header className="header">
    <img src={ReturnIcon} alt="" />
    Контакты
    <img src={SettingIcon} alt="" />
  </header>
)

export default Header
