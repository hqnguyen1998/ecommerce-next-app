import React from 'react';
import useSWR from 'swr';
import { useAppContext } from '../context/AppContext';

import { fetcher } from '../libs/fetcher';
import apiUrl from '../libs/getApiUrl';
import HeroComponent from '../components/hero/hero_component';
import LayoutComponent from '../components/layout/layout';
import ProductListWrapper from '../components/products/productListWrapper';
import { Spinner } from 'react-bootstrap';

const HomePage = () => {
  const { state } = useAppContext();
  const { data, error } = useSWR(
    `${apiUrl}/api/product?limit=${state.posts.limit}`,
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
