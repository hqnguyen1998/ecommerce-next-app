import React from 'react';
import HeroComponent from '../components/hero/hero_component';
import LayoutComponent from '../components/layout/layout';
import ProductListWrapper from '../components/products/productListWrapper';

const HomePage = () => {
  return (
    <LayoutComponent pageTitle='Welcome to my stores'>
      <HeroComponent />
      <ProductListWrapper />
    </LayoutComponent>
  );
};

export default HomePage;
