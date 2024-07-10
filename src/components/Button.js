import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick, onAddClick})=> {
  
  return (
    <button className='btn' style={{backgroundColor:color}} onClick={onAddClick}>{text}</button>
  )
}

Button.defaultProp={
    color:"rgb(6, 169, 233)",
    text:"Add"
}
Button.propTypes = {
text:PropTypes.string.isRequired,
color:PropTypes.string.isRequired,
onclick:PropTypes.func,
onAddClick:PropTypes.func
}

export default Button
