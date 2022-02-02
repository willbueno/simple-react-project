import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/Home'
import Nobreak from '../../pages/Nobreak'
import NotFound from '../../pages/NotFound'
import SimpleNobreak from '../../pages/SimpleNobreak'

const Content = props => (
    <div className="Content">
        <Routes>
            <Route path="/nobreak" element={<Nobreak />} />
            <Route path="/simple" element={<SimpleNobreak />} />
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
)

export default Content