import { FC, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

import { ElixirCard } from '../components/ElixirCard';
import { ElixirsFilter } from '../components/forms/ElixirsFilter';
import { ElixirsSearch } from '../components/forms/ElixirsSearch';
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
  const dispatch = useAppDispatch();
  const { error, loading, elixirs } = useAppSelector((state) => state.elixir);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchElixirs());
  }, [dispatch]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = elixirs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(elixirs.length / itemsPerPage);

  const pageChangeHandler = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % elixirs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col gap-5 mb-5 px-5'>
        <IntroText />
        <ElixirsSearch />
        <ElixirsFilter />

        {loading && <LoadingIndicator />}
        {error && <ErrorIndicator message={error} />}

        {!loading && !error && <ElixirsList elixirs={currentItems} />}
      </div>
      <ReactPaginate
        className='flex justify-center items-center p-5 bg-black bg-opacity-50'
        breakLabel='...'
        nextLabel='>'
        onPageChange={pageChangeHandler}
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
