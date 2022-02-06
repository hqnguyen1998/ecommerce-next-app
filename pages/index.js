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

HomePage.getInitialProps = async () => {
  const response = await fetch(`${apiUrl}/api/product`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });

  const data = await response.json();

  return {
    products: data,
  };
};

export default HomePage;
