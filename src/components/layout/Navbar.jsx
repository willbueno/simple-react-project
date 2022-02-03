import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

import SubMenu from './SubMenu'
import SidebarData from './SidebarData'

const Navbar = props => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="Nav">
                <Link className='NavIcon' to='#'>
                    <FaBars style={{ color: '#205cff' }} onClick={showSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'SidebarNav active' : 'SidebarNav'}>
                <div className='SidebarWrap'>
                    <Link className='NavIcon' to='#'>
                        <AiOutlineClose style={{ color: '#205cff' }} onClick={showSidebar} />
                    </Link>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />
                    })}
                </div>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar