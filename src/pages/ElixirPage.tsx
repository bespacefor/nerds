import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from '../axios';
import LoadingIndicator from '../components/toasts/LoadingIndicator';
import { IElixir } from '../models/models';

export const ElixirPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [elixir, setElixir] = useState<IElixir | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetailsElixir = async () => {
      try {
        const response = await axios.get<IElixir>(`/elixirs/${id}`);
        setElixir(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching elixir details:', error);
        setLoading(false);
      }
    };

    fetchDetailsElixir();
  }, [id]);

  if (loading) return <LoadingIndicator />;

  return (
    <div className='flex flex-col gap-5 p-6 m-5 border rounded-md bg-black bg-opacity-25'>
      <Link to='/'>
        <button className='rounded-full p-2 bg-gray-300 hover:bg-gray-600 focus:outline-none shadow-md shadow-black hover:transition-all'>
          <svg
            className='h-6 w-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
          </svg>
        </button>
      </Link>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-5'>{elixir?.name}</h1>
      </div>
      <div>
        <p>
          <strong>Effect:</strong> {elixir?.effect ?? '—'}
        </p>
        <p>
          <strong>Side effects:</strong> {elixir?.sideEffects ?? '—'}
        </p>
        <p>
          <strong>Characteristics:</strong> {elixir?.characteristics ?? '—'}
        </p>
        <p>
          <strong>Time:</strong> {elixir?.time ?? '—'}
        </p>
        <p>
          <strong>Difficulty:</strong> {elixir?.difficulty ?? '—'}
        </p>
        <p>
          <strong>Ingredients:</strong>{' '}
          {(elixir?.ingredients?.length ?? 0) > 0
            ? elixir?.ingredients?.map((el, index) => (
                <span key={el?.id}>
                  {el?.name}
                  {index !== (elixir?.ingredients?.length ?? 0) - 1 && ', '}
                </span>
              ))
            : '—'}
        </p>
        <p>
          <strong>Inventors:</strong>{' '}
          {(elixir?.inventors?.length ?? 0) > 0
            ? elixir?.inventors?.map((el, index) => (
                <span key={el.id}>
                  {el.firstName} {el.lastName}
                  {index !== (elixir?.inventors?.length ?? 0) - 1 && ', '}
                </span>
              ))
            : '—'}
        </p>
        <p>
          <strong>Manufacturer:</strong> {elixir?.manufacturer ?? '—'}
        </p>
      </div>
    </div>
  );
};
