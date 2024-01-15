import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IElixir } from '../../models/models';

interface ElixirState {
  loading: boolean;
  error: string;
  elixirs: IElixir[];
}

const initialState: ElixirState = {
  loading: false,
  error: '',
  elixirs: []
};

export const elixirSlice = createSlice({
  name: 'elixir',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IElixir[]>) {
      state.error = '';
      state.loading = false;
      state.elixirs = action.payload;
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export default elixirSlice.reducer;
