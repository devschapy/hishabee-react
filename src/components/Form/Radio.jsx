import React from 'react'
import PropTypes from 'prop-types'

function Radio({ name, label, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} id={id} />
    </div>
  )
}


Radio.propTypes = {
  id: PropTypes.element.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}


export default Radio