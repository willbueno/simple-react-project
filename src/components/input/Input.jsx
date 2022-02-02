import './Input.css'
import React from "react"

const Input = props => {
    return (
        <div className="Input">

            <label>{props.text}</label>

            <input
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}
            />
            
        </div>
    )
}

export default Input