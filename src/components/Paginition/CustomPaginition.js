import React from 'react';
import Pagination from '@mui/material/Pagination';


const CustomPaginition = ({setPage, numOfPages = 10}) => {
    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0);
    };
  return (
    <div className="pagination-col">
            <Pagination 
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            color='primary'
            />
    </div>
  );
};

export default CustomPaginition;