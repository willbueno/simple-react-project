import './Home.css'
import React from 'react'

import ButtonIcon from '../components/button/ButtonIcon'

import { AiFillThunderbolt } from 'react-icons/ai'
import { BsBatteryHalf } from 'react-icons/bs'

import { IconContext } from 'react-icons'

const Home = props => {
    return (
        <div className="Home">
            <IconContext.Provider value={{ color: '#ff0000' }}>
                <ButtonIcon title='Nobreak' path='/nobreak' icon={<AiFillThunderbolt />} />
                <ButtonIcon title='Nobreak Simples' path='/simple' icon={<BsBatteryHalf />} />
            </IconContext.Provider>
        </div>
    )
}

export default Home