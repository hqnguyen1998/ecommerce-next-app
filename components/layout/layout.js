import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderComponent from '../header/header';

const LayoutComponent = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <HeaderComponent pageTitle={pageTitle} title='UNIQLO' />

      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default LayoutComponent;
