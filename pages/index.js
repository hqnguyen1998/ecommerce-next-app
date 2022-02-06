import React from 'react';
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
  const response = await fetch(`${apiUrl}/api/product`, {
    headers: {
      Accept: 'application/json; charset=UTF-8',
    },
  });

  const products = await response.json();

  return {
    props: {
      products: products,
    },
  };
};

export default HomePage;
