import React from 'react';

interface ErrorIndicatorProps {
  message: string;
}

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ message }) => (
  <div className='flex items-center justify-center mt-5 h-screen'>
    <svg className='w-6 h-6 mr-2 inline-block text-red-700' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1'
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-8h2v6h-2V8z'
      ></path>
    </svg>
    <p className='text-lg text-red-700'>{message}</p>
  </div>
);

export default ErrorIndicator;
