import './ButtonConfirm.css'
import React from "react"

const ButtonConfirm = props => {
    return (
        <button className="Confirm" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonConfirm