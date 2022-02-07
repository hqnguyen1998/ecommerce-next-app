import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../libs/fetcher';
import { Button, Col, Row } from 'react-bootstrap';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import config from '../../config/config';
import apiUrl from '../../libs/getApiUrl';
import styles from './Product.module.css';

import ProductCard from './productCard';

const ProductListWrapper = ({ products }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(config.products_limit);
  const router = useRouter();

  const handleLoadMore = async () => {
    setLoading(true);
    setTimeout(() => {
      setLimit(limit + 4);
      setLoading(false);
      router.push(`/?limit=${limit + 4}`);
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
            variant='primary'
            className='d-block'
            onClick={handleLoadMore}
            disabled={isLoading || products.length < limit}
          >
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
