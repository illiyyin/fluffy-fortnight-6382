import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Container, Grid } from '../../styles/ListAnime'

export default function SkeletonAnimeList() {
  return (
    <Container>
      <Skeleton height={50} />
      <Grid>
        <Skeleton height={340}/>
        <Skeleton height={340}/>
        <Skeleton height={340}/>
        <Skeleton height={340}/>
      </Grid>
    </Container>
  )
}
