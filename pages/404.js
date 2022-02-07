import React from 'react';
import { Container } from 'react-bootstrap';
import LayoutComponent from '../components/layout/layout';

const ErrorPage = () => {
  return (
    <LayoutComponent pageTitle='Page Not Found'>
      <Container>
        <div className='text-center mt-5'>
          <h1>404 error</h1>
          <h5>This page doesn&apos;t exist.</h5>
        </div>
      </Container>
    </LayoutComponent>
  );
};

export default ErrorPage;
