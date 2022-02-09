/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';
import { useSession, signOut } from 'next-auth/react';

import styles from './Header.module.css';
import CartWrapper from '../Cart/CartWrapper';

const HeaderComponent = ({ pageTitle, title }) => {
  const { state } = useAppContext();
  const { data: session, status } = useSession();
  const [isShowCart, setShowCart] = React.useState(false);

  const handleCartButton = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Navbar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        sticky='top'
      >
        <Container className={styles.container}>
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <div className='d-block m-auto'>
              <Nav className='me-auto'>
                <Link href='/' passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link href='/' passHref>
                  <Nav.Link>Collections</Nav.Link>
                </Link>
                <Link href='/' passHref>
                  <Nav.Link>About</Nav.Link>
                </Link>

                <Link href='/' passHref>
                  <Nav.Link>Contact</Nav.Link>
                </Link>
              </Nav>
            </div>
            <div className='d-flex align-items-center'>
              <Button variant='link' size='sm'>
                <Image
                  src='/static/icons/search_icon.svg'
                  alt='search_icon'
                  width={24}
                  height={24}
                />
              </Button>
              {status !== 'authenticated' ? (
                <Link href='/account/login' passHref>
                  <Button variant='link' size='sm'>
                    <Image
                      src='/static/icons/person_icon.svg'
                      alt='search_icon'
                      width={24}
                      height={24}
                    />
                  </Button>
                </Link>
              ) : (
                <React.Fragment>
                  <div>
                    <Image
                      width={30}
                      height={30}
                      src={session.user.avatar}
                      alt='user_avatar'
                    />
                  </div>
                  <Button variant='link' size='sm' onClick={() => signOut()}>
                    <Image
                      src='/static/icons/logout_icon.svg'
                      alt='search_icon'
                      width={24}
                      height={24}
                    />
                  </Button>
                </React.Fragment>
              )}

              <Button variant='link' size='sm' onClick={handleCartButton}>
                <Image
                  src='/static/icons/shopping_cart.svg'
                  alt='search_icon'
                  width={24}
                  height={24}
                />
                <Badge bg='dark'>
                  {state.products.carts.length
                    ? state.products.carts.length
                    : 0}
                </Badge>
              </Button>
              <CartWrapper show={isShowCart} onClose={handleCloseCart} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default HeaderComponent;
