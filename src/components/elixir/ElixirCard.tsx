import { useNavigate } from 'react-router-dom';

import { IElixir } from '../../models/models';

interface ElixirCardProps {
  elixir: IElixir;
}

export function ElixirCard({ elixir }: ElixirCardProps) {
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/elixir/${elixir.id}`);

  return (
    <div
      className='border rounded-md py-4 px-6 hover:shadow-lg hover:transition-all cursor-pointer'
      onClick={clickHandler}
    >
      <p className='text-lg font-bold'>{elixir.name}</p>
      <p>{elixir?.effect}</p>
      <p>{elixir?.sideEffects}</p>
      <p>{elixir?.characteristics}</p>
      <p>{elixir?.time}</p>
      <p>{elixir?.manufacturer}</p>
      <p className='text-pink-500'>{elixir?.difficulty}</p>
    </div>
  );
}
