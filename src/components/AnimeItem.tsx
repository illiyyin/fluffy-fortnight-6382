import React from 'react'
import { CoverImage } from '../styles/ListAnime'

export default function AnimeItem({cover,title}) {
  return (
    <div>
      <CoverImage src={cover} />
      <h2>{title}</h2>
    </div>
  )
}
