import { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from '../../axios';
import { useDebounce } from '../../hook/debounce';
import { useInput } from '../../hook/input';
import { IElixir } from '../../models/models';

export const ElixirSearch: FC = () => {
  const input = useInput('');
  const [elixirs, setElixirs] = useState<IElixir[]>([]);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const debouncedValue = useDebounce<string>(input.value, 500);

  async function searchElixirs() {
    try {
      const formattedName = debouncedValue.charAt(0).toUpperCase() + debouncedValue.slice(1);
      const response = await axios.get(`elixirs`, {
        params: { name: formattedName }
      });
      setElixirs(response.data);
    } catch (error) {
      console.error('Error fetching elixirs:', error);
    }
  }

  useEffect(() => {
    if (debouncedValue.length >= 3) {
      searchElixirs().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debouncedValue]);

  function renderDropdown() {
    if (elixirs.length === 0) {
      return <p className='py-2 px-6 text-center bg-pink'>OOPS... No results found! Try again &#x263B;</p>;
    }

    return elixirs.map((elixir) => (
      <li
        key={elixir.id}
        onClick={() => navigate(`/elixir/${elixir.id}`)}
        className='py-2 px-6 hover:bg-gray-300 hover:transition-colors cursor-pointer hover:text-white'
      >
        {elixir.name}
      </li>
    ));
  }

  return (
    <div className='relative'>
      <input
        type='text'
        className='border py-2 px-6 outline-0 w-full h-9'
        placeholder='Search for elixir by name...'
        {...input}
      />

      {dropdown && (
        <ul className='list-none absolute left-0 right-0 bg-white top-9 rounded-b-md shadow-lg overflow-y-scroll'>
          {renderDropdown()}
        </ul>
      )}
    </div>
  );
};
