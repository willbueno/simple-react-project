import './Button.css'
import React from "react"

const Button = props => {
    const style = props.type + ' Button'

    return (
        <button className={style} onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button