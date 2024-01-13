import { FC, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { ElixirCard } from '../components/elixir/ElixirCard';
import { ElixirFilter } from '../components/elixir/ElixirFilter';
import { ElixirSearch } from '../components/elixir/ElixirSearch';
import { IntroText } from '../components/IntroText';
import ErrorIndicator from '../components/toasts/ErrorIndicator';
import LoadingIndicator from '../components/toasts/LoadingIndicator';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { IElixir } from '../models/models';
import { fetchElixirs } from '../store/actions/elixirActions';

interface ElixirsListProps {
  elixirs: IElixir[];
}

interface PaginatedListProps {
  itemsPerPage: number;
}

const ElixirsList: FC<ElixirsListProps> = ({ elixirs }) => (
  <>
    {elixirs.map((elixir) => (
      <ElixirCard key={elixir.id} elixir={elixir} />
    ))}
  </>
);

export const MainPage: FC<PaginatedListProps> = ({ itemsPerPage }) => {
  const { error, loading, elixirs } = useAppSelector((state) => state.elixir);
  const dispatch = useAppDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredElixirs, setFilteredElixirs] = useState<IElixir[]>([]);

  useEffect(() => {
    dispatch(fetchElixirs());
  }, [dispatch]);

  useEffect(() => {
    setFilteredElixirs(elixirs);
  }, [elixirs]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredElixirs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredElixirs.length / itemsPerPage);

  const filtersChangeHandler = (difficulty: string) => {
    if (difficulty === '') {
      setFilteredElixirs(elixirs);
    } else {
      const filteredItems = elixirs.filter((elixir) => elixir.difficulty === difficulty);
      setFilteredElixirs(filteredItems);
    }

    setItemOffset(0);
  };

  return (
    <>
      <div className='flex flex-col gap-5 mb-5 px-5 min-h-screen'>
        <IntroText />
        <ElixirSearch />
        <ElixirFilter onFilterChange={filtersChangeHandler} />

        {loading && <LoadingIndicator />}
        {error && <ErrorIndicator message={error} />}

        {!loading && !error && <ElixirsList elixirs={currentItems} />}
      </div>
      <ReactPaginate
        className='flex justify-center items-center p-5 bg-black bg-opacity-50'
        breakLabel='...'
        nextLabel='>'
        onPageChange={(event) => {
          const newOffset = (event.selected * itemsPerPage) % filteredElixirs.length;
          setItemOffset(newOffset);
        }}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel='<'
        containerClassName='flex space-x-2 font-medium'
        pageClassName='cursor-pointer p-2 w-10 text-center '
        activeClassName='border border-gray-300 rounded-full text-white'
        previousClassName='p-2'
        nextClassName='p-2'
        breakClassName='p-2'
      />
    </>
  );
};
