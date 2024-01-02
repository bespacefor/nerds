import { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout: FC = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
