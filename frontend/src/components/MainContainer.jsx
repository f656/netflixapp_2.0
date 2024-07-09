/* eslint-disable no-unused-vars */
import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

export default function MainContainer() {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return;//Early return in react
  console.log(movie);

  const{overview,id,title} =movie[4];
  

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}
