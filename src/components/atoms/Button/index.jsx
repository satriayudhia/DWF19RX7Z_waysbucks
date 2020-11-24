import React from 'react'
import './Button.scss'

const Button = ({title, ...rest}) => {
    return (
        <button className="btn" {...rest}>{title}</button>
    )
}

export default Button
