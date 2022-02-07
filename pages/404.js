import React from 'react';
import LayoutComponent from '../components/layout/layout';

const ErrorPage = () => {
  return (
    <LayoutComponent pageTitle='Page Not Found'>
      <h1>404 - Sorry could not find this page :(</h1>
    </LayoutComponent>
  );
};

export default ErrorPage;
