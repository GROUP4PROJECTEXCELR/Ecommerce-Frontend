import React from 'react';
import { Popular } from '../components/popular/popular';
import { Offers } from '../components/Offers/Offers';
import { NewCollections } from '../components/NewCollections/NewCollections';

export const Shop = () => {
  return (
    <div>
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
