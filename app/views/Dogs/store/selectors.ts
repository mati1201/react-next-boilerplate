import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

export const getDogs = (state: RootState) => state.dogs;

export const getDogsSelector = createSelector(
  getDogs,
  (state) => state,
);
