import React from 'react';
import { Container } from 'react-bootstrap';
import FooterComponent from '../Footer';
import HeaderComponent from '../header/header';

const LayoutComponent = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <HeaderComponent pageTitle={pageTitle} title='UNIQLO' />

      <Container>{children}</Container>
      <FooterComponent />
    </React.Fragment>
  );
};

export default LayoutComponent;
