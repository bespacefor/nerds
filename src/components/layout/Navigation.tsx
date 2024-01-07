import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <nav className='flex justify-between items-center w-full px-10 h-16 bg-gray-300 shadow-lg shadow-black'>
      <Link to='/'>The Nerds Order &trade;</Link>
      <Link
        to='/auth'
        className='rounded p-1 hover:bg-amber-400 active:bg-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500'
      >
        Auth Page
      </Link>
    </nav>
  );
};
