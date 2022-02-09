import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { useRouter } from 'next/router';
import { Button, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

import styles from './Product.module.css';

import ProductCard from './productCard';

const ProductListWrapper = ({ products }) => {
  const { state, dispatch } = useAppContext();
  const [isLoading, setLoading] = React.useState(false);

  const handleLoadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      dispatch({ type: 'LOAD_MORE_POSTS' });
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_collections}>
        <Link href='#furniture'>FURNITURE</Link>
        <Link href='#bag'>BAG</Link>
        <Link href='#decoration'>DECORATION</Link>
        <Link href='#accessories'>ACCESSORIES</Link>
      </div>

      <div id='furniture'>
        <Row className='mt-5'>
          {products &&
            products.map((product) => (
              <Col xs={12} sm={12} md={6} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          <Button
            variant={
              state.products.limit > products.length ? 'secondary' : 'primary'
            }
            className='d-block'
            size='sm'
            onClick={handleLoadMore}
            disabled={isLoading || state.products.limit > products.length}
          >
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
