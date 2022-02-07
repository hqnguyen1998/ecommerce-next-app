import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import config from '../../config/config';
import apiUrl from '../../libs/getApiUrl';
import styles from './Product.module.css';

import ProductCard from './productCard';

const ProductListWrapper = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(config.products_limit);
  const [products, setProducts] = React.useState(props.products);

  const handleLoadMore = async () => {
    setLoading(true);
    const res = await fetch(`${apiUrl}/api/product?limit=${limit + 4}`);
    const products = await res.json();

    setLimit(limit + 4);
    setProducts(products.data);
    setLoading(false);
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
            variant='primary'
            className='d-block'
            onClick={handleLoadMore}
            disabled={loading || products.length < limit}
          >
            {loading ? 'Loading...' : 'Load more'}
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
