import React from 'react'

// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
import { AiFillHome, AiFillThunderbolt } from 'react-icons/ai'
import { BsBatteryHalf } from 'react-icons/bs'

export const SidebarData = [
  {
    title: 'Página Inicial',
    path: '/',
    icon: <AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Nobreak',
    path: '/nobreak',
    icon: <AiFillThunderbolt />,
    className: 'nav-text'
  },
  {
    title: 'Nobreak Simples',
    path: '/simple',
    icon: <BsBatteryHalf />,
    className: 'nav-text'
  }
]