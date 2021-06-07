import React, {useState} from 'react'
import style from './style.module.scss';

import Friend from './Friend';

export default function SideBar() {
  const [arr, setArr] = useState(['x'])

  return (
    <div className={style.sideBar}>
      {arr.map((e, i) => <Friend/>)}
    </div>
  )
}
