import React from 'react'
import { CoverImage, Title } from '../styles/AnimeItem'
import { useLocation } from 'wouter'

export default function AnimeItem({ cover, title }) {
  
  return (
    <div >
      <CoverImage src={cover} />
      <Title>{title}</Title>
    </div>
  )
}
