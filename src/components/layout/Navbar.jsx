import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import { SidebarData } from './SidebarData'

const Navbar = props => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaBars style={{ color: '#000' }} onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                <ul className='nav-menu-items' onClick={showSidebar}>

                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose style={{ color: '#000' }} />
                        </Link>
                    </li>

                    <IconContext.Provider value={{ color: '#ff0000' }}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </IconContext.Provider>

                </ul>

            </nav>
        </>
    )
}

export default Navbar