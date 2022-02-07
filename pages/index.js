import React from 'react';
import config from '../config/config';
import fetch from 'isomorphic-unfetch';
import apiUrl from '../libs/getApiUrl';
import HeroComponent from '../components/hero/hero_component';
import LayoutComponent from '../components/layout/layout';
import ProductListWrapper from '../components/products/productListWrapper';

const HomePage = ({ products }) => {
  return (
    <LayoutComponent pageTitle='Welcome to my stores'>
      <HeroComponent />
      <ProductListWrapper products={products.data} />
    </LayoutComponent>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${apiUrl}/api/product?limit=${config.products_limit}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};

export default HomePage;
