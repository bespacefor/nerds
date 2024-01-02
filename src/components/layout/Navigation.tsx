import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <nav className='flex justify-between px-10 h-[50px] bg-slate-400 items-center shadow-md'>
      <Link to='/'>The Nerds Order &trade;</Link>
      <Link to='/auth'>Auth Page</Link>
    </nav>
  );
};
