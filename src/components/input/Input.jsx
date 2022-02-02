import './Input.css'
import React from "react"

import Tooltip from '../tooltips/Tooltip'

const Input = props => {
    return (
        <div className="Input">

            <label>{props.text}</label>

            <Tooltip tooltip={props.tooltip} />

            <input
                type='number'
                value={props.value}
                onChange={e => props.onChange(+e.target.value)}
            />
        </div>
    )
}

export default Input