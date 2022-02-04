/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';

const HeaderComponent = ({ pageTitle, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />

        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Navbar bg='light' variant='light'>
        <Container className={styles.container}>
          <Navbar.Brand>{title}</Navbar.Brand>
          <div>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Collections</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </div>
          <div>
            <Button variant='link' size='sm'>
              <Image
                src='/static/icons/search_icon.svg'
                alt='search_icon'
                width={24}
                height={24}
              />
            </Button>
            <Button variant='link' size='sm'>
              <Image
                src='/static/icons/person_icon.svg'
                alt='search_icon'
                width={24}
                height={24}
              />
            </Button>
            <Button variant='link' size='sm'>
              <Image
                src='/static/icons/shopping_cart.svg'
                alt='search_icon'
                width={24}
                height={24}
              />
            </Button>
          </div>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default HeaderComponent;
