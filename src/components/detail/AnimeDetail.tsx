import React from 'react'
import { Header } from '../../styles/DetailAnime'

interface IProps{
  color:string
}

export default function AnimeDetail({color}:IProps) {
  return (
    <div>
      <Header bg={color}>

      </Header>

      
    </div>
  )
}
