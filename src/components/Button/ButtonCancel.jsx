import './ButtonCancel.css'
import React from "react"

const ButtonCancel = props => {
    return (
        <button className="Cancel" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default ButtonCancel