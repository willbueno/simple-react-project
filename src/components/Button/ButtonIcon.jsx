import './ButtonIcon.css'
import React from "react"
import { Link } from "react-router-dom"

const ButtonIcon = props => {
    return (
        <div className="ButtonIcon">
            <Link to={props.path}>
                {props.icon}
                <span>{props.title}</span>
            </Link>
        </div>
    )
}

export default ButtonIcon