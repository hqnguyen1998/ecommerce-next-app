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

      <ProductListWrapper products={products} />
    </LayoutComponent>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${apiUrl}/api/product?limit=8`);
  const product = await res.json();

  return {
    props: {
      products: product.data,
    },
    revalidate: 60,
  };
};

export default HomePage;
