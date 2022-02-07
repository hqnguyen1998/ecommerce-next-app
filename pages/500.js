import React from 'react';
import LayoutComponent from '../components/layout/layout';

const Custom500Page = () => {
  return (
    <LayoutComponent pageTitle='Page Not Found'>
      <h1>500 - Server Error</h1>
    </LayoutComponent>
  );
};

export default Custom500Page;
