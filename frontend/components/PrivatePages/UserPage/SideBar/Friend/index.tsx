import React, {useState} from 'react'
import style from './style.module.scss';

export default function index({image, id, userID}) {
  const [news, setNews] = useState([])

  return (
    <div className={style.friend} id={id}>
      {news.length > 0 && <div className={style.newsIndicator}>{news.length}</div>}
      <img src={image} />
    </div>
  )
}
