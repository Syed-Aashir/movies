import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const tabUrl = {
    "0" : "/",
    "1" : "/movies",
    "2" : "/series",
    "3" : "/search"
}

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() =>{
    const pageUrl = tabUrl[value]
       navigate(pageUrl);
  },[value]);

  return (
    <Box sx={{ 
        width: '100%',
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100 
        }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}