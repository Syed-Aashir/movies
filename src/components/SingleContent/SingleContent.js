import React from 'react';
import {img_300, unavailable} from "../../config/config";
import "./SingleContent.css";
// import { Badge } from '@mui';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';


const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {

  const navigate = useNavigate();
  const handleMovieCard = () =>{
    navigate(`/movies/${id}/${media_type}`);
  }

  return (
    <div className="media" onClick={handleMovieCard}>
    <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'secondary'} />
        <img className="poster" src={poster? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className="title">{title}</b>
        <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
        </span>
        
    </div>
  )
}

export default SingleContent;