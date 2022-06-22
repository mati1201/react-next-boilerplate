import React from 'react';
import { NextPage } from 'next';

import { wrapper } from '@/store/store';
import { getBreeds } from '@/views/Dogs/store/dogsSlice';
import Dogs from '@/views/Dogs';

const DogsPage: NextPage = () => (
  <Dogs />
);

DogsPage.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await store.dispatch(getBreeds());
});

export default DogsPage;
