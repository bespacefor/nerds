import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation: FC = () => {
  return (
    <nav>
      <Link to='/'>Nerds</Link>
      <Link to='/auth'>AuthPage</Link>
    </nav>
  );
};
