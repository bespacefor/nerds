import { AppDispatch } from '..';
import axios from '../../axios';
import { IElixir } from '../../models/models';
import { elixirSlice } from '../slices/elixirSlice';

export const fetchElixirs = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(elixirSlice.actions.fetching());
      const response = await axios.get<IElixir[]>('elixirs', {});
      dispatch(elixirSlice.actions.fetchSuccess(response.data));
    } catch (e) {
      dispatch(elixirSlice.actions.fetchError(e as Error));
    }
  };
};
