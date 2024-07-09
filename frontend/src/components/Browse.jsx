/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import SearchMovie from './SearchMovie';

export default function Browse() {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store =>store.movie.toggle);
  const navigate = useNavigate();
  
 //My custom hook...
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  
  
  useEffect(()=>{
    if(!user) {
      navigate('/');
    }
    

  },[])
  
  return (
    <div>
        <Header/>
        <div>
        {
             toggle ? <SearchMovie /> : (
               <>
                   <MainContainer />
                   <MovieContainer />
               </>

                )
        }
        </div>
    </div>
  )
}
