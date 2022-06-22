import React from 'react';

import { useAppSelector } from '@/store/hooks';
import { getDogsSelector } from './store/selectors';

const Dogs = () => {
  const {
    breeds,
    isFetching,
  } = useAppSelector(getDogsSelector);

  return (
    <div>
      <span>{isFetching ? <span>Loading...</span> : `Breeds count: ${Object.keys(breeds)?.length || 0}`}</span>
    </div>
  );
};

export default Dogs;
