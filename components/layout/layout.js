import React from 'react';
import config from '../../config/config';
import { Container } from 'react-bootstrap';
import FooterComponent from '../Footer';
import HeaderComponent from '../header/header';

const LayoutComponent = ({ pageTitle, children }) => {
  return (
    <React.Fragment>
      <HeaderComponent pageTitle={pageTitle} title={config.logo_text} />

      <Container>{children}</Container>
      <FooterComponent />
    </React.Fragment>
  );
};

export default LayoutComponent;
