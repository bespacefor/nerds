import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout: FC = () => {
  return (
    <div className='flex flex-col justify-between items-center bg-blue-950'>
      <Navigation />
      <div className='container pt-10 max-w-screen-lg min-h-screen bg-amber-500'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
