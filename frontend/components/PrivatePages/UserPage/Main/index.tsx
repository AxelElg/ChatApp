import React from 'react'

import style from './style.module.scss'

export default function SideBar({children}) {
  return (
    <div className={style.main}>
      {children}
    </div>
  )
}
