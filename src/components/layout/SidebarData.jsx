import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
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
    title: 'Dimensionamento',
    path: '',
    icon: <AiFillThunderbolt />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: 'Nobreak',
        path: '/nobreak',
        icon: <AiFillThunderbolt />,
      },
      {
        title: 'Nobreak simples',
        path: '/simple',
        icon: <AiFillThunderbolt />,
      },
    ],
  },
  {
    title: 'Historico',
    path: '/',
    icon: <AiFillThunderbolt />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: 'Nobreak',
        path: '/nobreak/history',
        icon: <AiFillThunderbolt />,
      },
      {
        title: 'Nobreak simples',
        path: '/simple/history',
        icon: <AiFillThunderbolt />,
      },
      {
        title: 'Acessos',
        path: '/access',
        icon: <AiFillThunderbolt />,
      },
    ],
  },
  {
    title: 'Sobre',
    path: '/about',
    icon: <BsBatteryHalf />,
  }
]

export default SidebarData