import { AppDispatch } from '..';
import axios from '../../axios';
import { IElixir } from '../../models/models';
import { elixirSlice } from '../slices/elixirSlice';

export const fetchElixirs = (difficulty: string = 'advanced', page: number = 1) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(elixirSlice.actions.fetching());
      const response = await axios.get<IElixir[]>('elixirs', {
        // params: {
        //   difficulty,
        //   page
        // }
      });
      //console.log(response.data);
      dispatch(elixirSlice.actions.fetchSuccess(response.data));
    } catch (e) {
      dispatch(elixirSlice.actions.fetchError(e as Error));
    }
  };
};
