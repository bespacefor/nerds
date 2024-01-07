import React from 'react';

const LoadingIndicator: React.FC = () => (
  <div className='flex items-center justify-center mt-5 h-screen'>
    <svg className='animate-spin h-5 w-5 mr-3 text-blue-700' viewBox='0 0 24 24'>
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V2.83A10 10 0 002 12h2zm12 0a8 8 0 018 8V21.17A10 10 0 0022 12h-2zm-2 0a4 4 0 11-8 0 4 4 0 018 0z'
      ></path>
    </svg>
    <p className='text-lg'>Loading data...</p>
  </div>
);

export default LoadingIndicator;
