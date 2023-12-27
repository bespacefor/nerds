import { FC } from 'react';

import { Card } from '../components/Card';
import { Filter } from '../components/Filter';
import { Search } from '../components/Search';

export const MainPage: FC = () => {
  return (
    <div>
      <h1>Main</h1>
      <Search />
      <Filter />
      <Card />
    </div>
  );
};
