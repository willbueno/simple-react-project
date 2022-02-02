import './Tooltip.css'
import { React, useState } from "react"

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Tooltip = props => {
    const [hover, setHover] = useState(false)
    const tooltipStyle = {
        display: hover ? 'block' : 'none'
    }

    const handleMouseIn = function () {
        setHover(true)
    }

    const handleMouseOut = function () {
        setHover(false)
    }

    return (
        <IconContext.Provider value={{ color: '#D51317' }}>
            <div className="Tooltip">
                <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                    <AiOutlineInfoCircle />
                </div>

                <div className='Info' style={tooltipStyle}>
                    {props.tooltip}
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Tooltip