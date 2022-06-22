import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getConfig from 'next/config';

import { AppDispatch } from '@/store/store';

const { BACKEND_URL } = getConfig().publicRuntimeConfig;

interface Slice {
  breeds: any;
  isFetching: boolean;
  hasError: boolean;
}

export const initialState: Slice = {
  breeds: [],
  isFetching: false,
  hasError: false,
};

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    request(state) {
      state.isFetching = true;
      state.hasError = false;
    },
    success(state, action: PayloadAction<any>) {
      state.isFetching = false;
      state.hasError = false;
      state.breeds = action.payload;
    },
    failure(state) {
      state.isFetching = false;
      state.hasError = true;
    },
  },
});

const { actions, reducer } = dogsSlice;
const { request, success, failure } = actions;

export const getBreeds = () => async (dispatch: AppDispatch) => {
  dispatch(request());

  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/api/breeds/list/all`,
    );

    dispatch(success(data.message));
  } catch (err) {
    dispatch(failure());
  }
};

export default reducer;
