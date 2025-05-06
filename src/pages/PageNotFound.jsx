import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h3 className='text-xl font-semibold mb-4'><span className='text-red-500 text-4xl'>404!</span> Page not found</h3>
     <div className='border-2 rounded-4xl '> <Tooltip title="Go to Dashboard">
        <IconButton
          onClick={() => navigate('/')}
          color="primary"
          size="large"
        >
          <DashboardIcon />
          <span className="text-lg">Go to Dashboard</span>
        </IconButton>

      </Tooltip></div>
    </div>
  );
};

export default PageNotFound;
