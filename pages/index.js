import React from 'react';
import useSWR from 'swr';
import { Spinner } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';

import { fetcher } from '../libs/fetcher';
import HeroComponent from '../components/hero/hero_component';
import LayoutComponent from '../components/layout/layout';
import ProductListWrapper from '../components/products/productListWrapper';

const HomePage = () => {
  const { state } = useAppContext();
  const { data, error } = useSWR(
    `/api/product?limit=${state.products.limit}`,
    fetcher
  );
  if (error) return <p>Error!</p>;

  return (
    <LayoutComponent pageTitle='Welcome to my stores'>
      <HeroComponent />

      {!data ? (
        <Spinner animation='grow' variant='danger' />
      ) : (
        <ProductListWrapper products={data.data} />
      )}
    </LayoutComponent>
  );
};

export default HomePage;
