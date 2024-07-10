import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, data, onAddClick, checkText}) => {
  
  return (
   <header className='header'>
<h1>{title}</h1>
<Button color={!checkText?"rgb(6, 169, 233)":"red"} text={!checkText? "Add":"Close"}  onAddClick= {onAddClick}/>
   </header>
  )
}

Header.propTypes = {
title:PropTypes.string.isRequired
}

export default Header
