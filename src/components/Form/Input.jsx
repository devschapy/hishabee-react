import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

export const Input = ({ divStyle, type, className, label, placeholder, name, id }) => {
  return (
    <div className={divStyle}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        className={`${className} ${styles.formGroup}`}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.element.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string || PropTypes.number
}


export default Input