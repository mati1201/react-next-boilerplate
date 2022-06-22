import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, AnyAction } from '@reduxjs/toolkit';

const initialState = {};

const hydrateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(HYDRATE, (state, action: AnyAction) => ({
      ...state,
      ...action.payload,
    }));
});

export default hydrateReducer;
