import { useState } from 'react';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {img_300, img_500, unavailable} from "../../config/config";
import { useEffect } from 'react';


const SingleMovie = () => {
  const {movieId, mediaType} = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const [cast, setCast] = useState([]);


  const fetchSingleMovies = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
    `);
    // console.log(data);
    setSingleMovie({...data});
  }


  const fetchCast = async () =>{
    const { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    // console.log(data);
    setCast([...data.cast]);
  }

  useEffect(() =>{
    fetchSingleMovies();
    fetchCast();
    // eslint-disable-next-line
  },[]);


  useEffect(() =>{
    console.log('Cast ->', cast);
    // eslint-disable-next-line
  },[cast])




  return (
    <div className='single-movie-container'>
      <div className='single-movie-poster'>
        {/* {console.log(`${img_500}${singleMovie.poster_path}`)} */}
        <img src={singleMovie.poster_path? `${img_500}${singleMovie.poster_path}` : unavailable} alt='movie-banner' width='600' height='885'></img>
      </div>

      <div className='single-movie-content'>
      
      <div className='movie-title'>
        <h2>{singleMovie.title}</h2>
      </div>

      <div className='movie-desc'>
        <p>{singleMovie.overview}</p>
      </div>

      <div className='single-movie-btn'>
      <Button 
      variant="outlined">Watch On Youtube</Button>
      </div>
      <div className='cast-wrapper'>

      
      {
        cast.length && cast.map((singleCast) =>{
          return <div className='single-movie-cast' key={singleCast.id}>
          <div className='cast-img'>
            <img src={singleCast.profile_path? `${img_300}${singleCast.profile_path}` : unavailable} alt='movie-cast' width='150' height='200'/>
            <b>{singleCast.name}</b>
          </div>
      </div>
        })
      }
      </div>
      
      </div>
    </div>
  )
}

export default SingleMovie;